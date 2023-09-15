import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import { OSM } from 'ol/source';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat, transform } from 'ol/proj';
import Select from 'ol/interaction/Select';
import { defaults } from 'ol/control/defaults';
import { Location } from 'src/app/models/location';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import Feature from 'ol/Feature.js';
import Point from 'ol/geom/Point.js';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import Control from 'ol/control/Control';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Size } from 'ol/size';
import { Avaliation, Building, Location_, Room } from '../models/avaliation';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit, OnDestroy {
  constructor(private http: HttpClient) {}

  toolTips = {
    locationTitle:
      'A localização do edifício serve para deternimanar o valor gama que é variante com a geologia.',
    postCode:
      'Insira o código postal da localidade do edifício para o mapa ir automáticamente para essa localidade.',
  };

  isSubmited = false;
  isConfirmed = false;

  locationStatus = false;

  avaliation!: Avaliation;

  public map!: Map;
  place = [-9.152996, 38.715752];
  postCodePattern = /^\d{4}-\d{3}$/;
  postCode: String = '';

  location = new Location(0, 0);

  center = fromLonLat(this.place);

  selectSingleClick = new Select();

  view = new View({
    center: fromLonLat(this.place),
    zoom: 8,
    maxZoom: 18,
  });

  vectorSource = new VectorSource({});

  mapSize!: Size;
  ngOnInit(): void {
    this.avaliation = new Avaliation();
    this.avaliation.building = new Building();
    this.avaliation.location = new Location_();
    this.avaliation.room = new Room();

    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'ol-map',
      view: this.view,
      controls: defaults({ attribution: false, rotate: false }),
    });

    this.mapSize = this.map.getSize()!;

    // Define the icon image URL and size
    const iconUrl = 'assets/Map_pin_icon_green.svg';

    // Create a custom style for the marker feature, using the icon image and anchor point
    const markerStyle = new Style({
      image: new Icon({
        src: iconUrl,
        anchor: [0.5, 1],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        scale: 0.4,
      }),
    });

    const vectorLayer = new VectorLayer({
      source: this.vectorSource,
      style: markerStyle,
    });

    this.map.addLayer(vectorLayer);

    this.map.on('click', (e) => {
      if (!this.isSubmited) {
        let x = transform(e.coordinate, 'EPSG:3857', 'EPSG:4326');
        this.location.latitude = x[1];
        this.location.longitude = x[0];

        this.avaliation.location.latitude = x[1];
        this.avaliation.location.longitude = x[0];

        this.vectorSource.clear();

        const marker = new Feature({
          geometry: new Point(e.coordinate),
        });
        this.vectorSource.addFeature(marker);

        const baseUrl = 'https://nominatim.openstreetmap.org/reverse';

        let url =
          baseUrl +
          '?lat=' +
          this.avaliation.location.latitude +
          '&lon=' +
          this.avaliation.location.longitude +
          '&zoom=16&format=jsonv2';
        this.http.get<any>(url).subscribe((data) => {
          this.avaliation.location.address = data['address']['road'];
          this.avaliation.location.city = data['address']['city'];
          this.avaliation.location.postCode = data['address']['postcode'];
          if (data['address']['municipality']) {
            this.avaliation.location.municipality =
              data['address']['municipality'];
          } else {
            this.avaliation.location.municipality = data['address']['town'];
          }
          this.avaliation.location.district = data['address']['county'];
          this.postCode = data['address']['postcode'];
          console.log(this.avaliation);
          console.log(data);
          this.locationStatus = true
        });
      }
    });
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.getLayers().forEach((layer) => {
        this.map.removeLayer(layer);
      });
      this.map.getControls().forEach((control) => {
        this.map.removeControl(control);
      });
      const mapTarget = this.map.getTargetElement();
      if (mapTarget && mapTarget.parentNode) {
        mapTarget.parentNode.removeChild(mapTarget);
      }
    }
  }

  setMapLocation(location: Location) {}

  setSubmitState(avaliation: Avaliation) {
    this.isSubmited = !this.isSubmited;
    this.avaliation = avaliation;
  }

  setEmailState(avaliation: Avaliation) {
    this.isConfirmed = !this.isConfirmed;
    this.avaliation = avaliation;
  }

  setAvaliation(avaliation: Avaliation) {
    this.avaliation = avaliation;
  }

  private timeout: any;

  searchPostCode() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      const baseUrl = 'https://nominatim.openstreetmap.org/search';
      let indicator = this.postCode.slice(0, 4);
      let localidade = this.postCode.slice(5, 8);

      this.avaliation.location.postCode = indicator + '-' + localidade;

      let url =
        baseUrl +
        '?postalcode=' +
        indicator +
        '-' +
        localidade +
        '&country=Portugal&format=jsonv2';
      this.http.get<any>(url).subscribe((data) => {
        this.center = fromLonLat([data[0].lon, data[0].lat]);
        this.location.latitude = data[0].lat;
        this.location.longitude = data[0].lon;
        this.avaliation.location.latitude = data[0].lat;
        this.avaliation.location.longitude = data[0].lon;
        this.view.centerOn(this.center, this.mapSize!, [
          this.mapSize![0] / 2,
          this.mapSize![1] / 2,
        ]);
        this.view.setZoom(14);

        this.vectorSource.clear();

        const marker = new Feature({
          geometry: new Point(fromLonLat([data[0].lon, data[0].lat])),
        });
        this.vectorSource.addFeature(marker);
      });
    }, 500);
  }

  searchLatLon() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      if (this.location.latitude != 0 && this.location.longitude != 0) {
        this.center = fromLonLat([
          this.location.longitude,
          this.location.latitude,
        ]);
        this.avaliation.location.latitude = this.location.latitude;
        this.avaliation.location.longitude = this.location.longitude;
        this.view.centerOn(this.center, this.mapSize!, [
          this.mapSize![0] / 2,
          this.mapSize![1] / 2,
        ]);
        this.view.setZoom(14);
        this.vectorSource.clear();

        const marker = new Feature({
          geometry: new Point(
            fromLonLat([this.location.longitude, this.location.latitude])
          ),
        });
        this.vectorSource.addFeature(marker);
        this.getAddress();
      }
    }, 500);
  }

  getAddress() {
    const baseUrl = 'https://nominatim.openstreetmap.org/reverse';

    let url =
      baseUrl +
      '?lat=' +
      this.avaliation.location.latitude +
      '&lon=' +
      this.avaliation.location.longitude +
      '&zoom=16&format=jsonv2';
    this.http.get<any>(url).subscribe((data) => {
      this.avaliation.location.address = data['address']['road'];
      this.avaliation.location.city = data['address']['city'];
      this.avaliation.location.postCode = data['address']['postcode'];
      this.postCode = data['address']['postcode'];
    });
  }
}
