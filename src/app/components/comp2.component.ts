import { Component, Input } from "@angular/core";
import { ImageMapCoordinate } from './image-map/image-map.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatCard} from '@angular/material';
import { ModalComponent } from './modal/modal.component';


@Component({
  templateUrl: "./comp1.component.html"
})
export class Comp2Component {
  @Input() data;

  constructor(public dialog: MatDialog) {}

  image: string = './assets/floor2.jpg';
  coordinates: ImageMapCoordinate[] = [
    {
      name: '浴室',
      x: 32,
      y: 11,
      width: 126,
      height: 64,
      cssClass: 'area'
    },  {
      name: '卧室',
      x: 163,
      y: 240,
      width: 96,
      height: 120,
      cssClass: 'area'
    }, {
      name: '主卧室',
      x: 269,
      y: 215,
      width: 102,
      height: 180,
      cssClass: 'area'
    }, {
      name: '主卧浴室',
      x: 302,
      y: 147,
      width: 63,
      height: 67,
      cssClass: 'area'
    }, {
      name: '廚房',
      x: 35,
      y: 79,
      width: 141,
      height: 122,
      cssClass: 'areaWarnning'
    }, {
      name: '客廳',
      x: 35,
      y: 207,
      width: 106,
      height: 87,
      cssClass: 'area'
    }
  ];


    // <area target="" alt="bath" title="bath" href="" coords="32,11,126,64" shape="rect">
    // <area target="" alt="bedroom" title="bedroom" href="" coords="163,240,259,347" shape="rect">
    // <area target="" alt="master bed room" title="master bed room" href="" coords="269,215,371,389" shape="rect">
    // <area target="" alt="master bath" title="master bath" href="" coords="302,147,365,204" shape="rect">
    // <area target="" alt="kitchen" title="kitchen" href="" coords="35,79,176,191" shape="rect">
    // <area target="" alt="living" title="living" href="" coords="" shape="rect">

  getClick(coordinate: ImageMapCoordinate) {
    console.log(`Clicked on ${coordinate.name}`);
    this.iotData1.location = coordinate.name;

    let showData = this.iotData1;
    if(coordinate.cssClass === 'areaWarnning'){
    	showData = this.iotData2;
    }


    const dialogRef = this.dialog.open(ModalComponent, {
      width: '300px',
      data: showData
    });
  }


  iotData1 = {
    location: "",
    pm25: 12.1,
    co2:10,
    tempreture: 12.2,
    hum: 34.3,
    gas: 0,
  }

  iotData2 = {
    location: "",
    pm25: 12.1,
    co2:100,
    tempreture: 180,
    hum: 34.3,
    gas: 0,
  }

}