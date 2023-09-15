import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Avaliation,
  Location_,
  Building,
  Room,
  Reading,
} from '../models/avaliation';
import Map from 'ol/Map';
import View from 'ol/View';
import { OSM } from 'ol/source';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat, transform } from 'ol/proj';
import { defaults } from 'ol/control/defaults';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import { Size } from 'ol/size';
import Feature from 'ol/Feature.js';
import Point from 'ol/geom/Point.js';
import Select from 'ol/interaction/Select';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { camelCase } from '../utils/utilFunctions';
import { SubmitReadingComponent } from '../submit-reading/submit-reading.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-reading-form',
  templateUrl: './reading-form.component.html',
  styleUrls: ['./reading-form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ReadingFormComponent implements OnInit, OnDestroy {
  token: string = '';
  isLoading = false;

  avaliation!: Avaliation;
  location!: Location_;
  building!: Building;
  room!: Room;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    public dialog: MatDialog
  ) {}

  public map!: Map;

  mapSize!: Size;

  showFB: string = '';
  showFF: string = '';
  showWB: string = '';
  showWF: string = '';
  showV: string = '';
  showR: string = '';
  showClass: string = '';
  showAddress: string = '';

  readingExists: boolean = false;

  // startDate: Date = new Date();
  // endDate: Date = new Date();

  reading: Reading = new Reading();

  dialogWidth = 50

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.token = params['token'];

      const apiUrl = environment.RnAPI;
      this.http
        .get(apiUrl + 'reading?token=' + this.token)
        .subscribe((data) => {
          this.avaliation = data as Avaliation;

          if (data == null) {
            this.readingExists = false;
          } else if(this.avaliation.reading != null){
            this.router.navigateByUrl('/readings/' + this.avaliation.emailHash)
          }
          else {
            this.avaliation = data as Avaliation;
            console.log('Avaliation');
            console.log(this.avaliation);

            this.showFB = camelCase(this.avaliation.room.floorBase);
            this.showFF = camelCase(this.avaliation.room.floorFinish);

            this.showWB = camelCase(this.avaliation.room.wallBase);
            this.showWF = camelCase(this.avaliation.room.wallFinish);

            this.showV = camelCase(this.avaliation.room.ventilation);
            if (this.avaliation.room.retrofit == 1) this.showR = 'Sim';
            else this.showR = 'Não';

            switch (this.avaliation.classification) {
              case 0:
                this.showClass = 'Baixo potencial de radão';
                break;
              case 1:
                this.showClass = 'Médio potencial de radão';
                break;
              case 2:
                this.showClass = 'Alto potencial de radão';
                break;

              default:
                break;
            }

            this.showAddress =
              this.avaliation.location.address +
              ', ' +
              this.avaliation.location.city;
            this.readingExists = true;
            this.setUpMap();
          }
        });
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

  openReading() {
    this.router.navigateByUrl('/reading/' + this.token);
    console.log(this.token);
  }

  setUpMap() {
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([
          this.avaliation.location.longitude,
          this.avaliation.location.latitude,
        ]),
        zoom: 14,
        maxZoom: 18,
      }),
      controls: defaults({ attribution: false, rotate: false }),
    });

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

    const vectorSource = new VectorSource({});

    const vectorLayer = new VectorLayer({
      source: vectorSource,
      style: markerStyle,
    });

    this.map.addLayer(vectorLayer);

    const marker = new Feature({
      geometry: new Point(
        fromLonLat([
          this.avaliation.location.longitude,
          this.avaliation.location.latitude,
        ])
      ),
    });
    marker.setStyle(markerStyle);
    vectorSource.addFeature(marker);

    setTimeout(() => {
      this.map.setTarget('ol-map');
    }, 1000);
  }

  submitReading() {
    const baseUrl = environment.RnAPI;
    this.http
      .post(baseUrl + 'reading/' + this.avaliation.id, {
        device: this.reading.device,
        value: this.reading.value,
        endDate: this.reading.endDate.toISOString(),
        startDate: this.reading.startDate.toISOString(),
      })
      .subscribe((data) => {
        console.log(data);
        this.router.navigateByUrl('readings/'+ this.avaliation.emailHash)
      });
  }

  addReading(): void {
    const dialogRef = this.dialog.open(SubmitReadingComponent, {
      width:this.dialogWidth + '%',
      height: '600px',
      data: this.avaliation,
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if(result !=undefined){
      //console.log(result)
      this.avaliation = result;
      }
    });
  }
}
