import { Component, OnInit, ViewChild } from '@angular/core';
import View from 'ol/View';
import Select from 'ol/interaction/Select';
import { fromLonLat } from 'ol/proj';
import { Size } from 'ol/size';
import Map from 'ol/Map';
import { Location } from 'src/app/models/location';
import VectorSource from 'ol/source/Vector';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { defaults } from 'ol/control/defaults';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import VectorLayer from 'ol/layer/Vector';
import { Avaliation, Reading } from '../models/avaliation';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import Feature from 'ol/Feature';
import { Point } from 'ol/geom';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-locations-map',
  templateUrl: './locations-map.component.html',
  styleUrls: ['./locations-map.component.css'],
})
export class LocationsMapComponent implements OnInit {
  constructor(private http: HttpClient,private _liveAnnouncer: LiveAnnouncer) {}

  //Map variables
  public map!: Map;
  place = [-9.152996, 38.715752]; //Inicial Center point to render the map
  location = new Location(0, 0);
  center = fromLonLat(this.place);
  selectSingleClick = new Select();
  //Defining the view for the map
  view = new View({
    center: fromLonLat(this.place),
    zoom: 8,
    maxZoom: 18,
  });
  //The vector source allows to add markers to the map
  vectorSource = new VectorSource({});
  //Map Size variable, used to get the height and width
  mapSize!: Size;

  //Array with the readings fecthed from the server
  readings!: Avaliation[];
  //Currently selected reading
  selectedAvaliation!: Avaliation | null;
  selectedRow!: number;
  //Array wiht the readings in the view port of the map
  onViewReadings!: Avaliation[];

  //Columns that the table should display
  displayedColumns: string[] = [
    'created_At',
    'classification',
    'reading',
    'location.city',
    'email',
  ];

  dataSource!: MatTableDataSource<Avaliation>;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  dataLength = 0;

  @ViewChild('myPaginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  ngOnInit(): void {
    //Initiallization of the map
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(), //Type of map
        }),
      ],
      target: 'ol-map', //Which html compoment to target
      view: this.view,
      controls: defaults({ attribution: false, rotate: false }),
    });

    //Getting the map size
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

    //Adding the vector layer with the marker style defined
    const vectorLayer = new VectorLayer({
      source: this.vectorSource,
      style: markerStyle,
    });
    this.map.addLayer(vectorLayer);

    //Fetching all the readings from the api
    const baseUrl = environment.RnAPI;
    this.http.get(baseUrl + 'getAllReadings').subscribe((data) => {
      this.readings = data as Avaliation[];
      //Adding them to the map
      this.readings.forEach((element) => {
        const marker = new Feature({
          geometry: new Point(
            fromLonLat([element.location.longitude, element.location.latitude])
          ),
          values: { avaliation: element }, // This allows to store the values of the object inside the vector
        });
        this.vectorSource.addFeature(marker);
      });
    });

    //Definition of on click events in the map
    this.map.on('click', (e) => {
      var feature = this.map.forEachFeatureAtPixel(e.pixel, (feature) => {
        return feature;
      });
      var prop = feature?.get('values')['avaliation'] as Avaliation;
      this.selectedAvaliation = prop;
    });

    //Getting the readings on the view
    this.map.on('moveend', (e) => {
      var extent = this.map.getView().calculateExtent(this.map.getSize());
      this.onViewReadings = new Array<Avaliation>();
      this.vectorSource.forEachFeatureInExtent(extent, (e) => {
        this.onViewReadings.push(e?.get('values')['avaliation'] as Avaliation);
      });
      this.dataLength = this.onViewReadings.length;
      this.dataSource = new MatTableDataSource(this.onViewReadings);
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.dataSource.sort = this.matSort;
      this.dataSource.paginator = this.paginator;
    }, 500);
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  getClassificationText(classification: number) {
    switch (classification) {
      case 0:
        return ['Baixo', '#0ebd08'];

      case 1:
        return ['Médio', '#f28a0a'];

      case 2:
        return ['Alto', '#e00909'];

      default:
        return '';
    }
  }


  selectAvaliation(avaliation: Avaliation){
    if(this.selectedAvaliation == avaliation){
      this.selectedAvaliation = null
    }
    else{
      this.selectedAvaliation = avaliation
    }
    
  }
}
