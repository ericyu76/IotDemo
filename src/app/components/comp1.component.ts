import { Component, Input } from "@angular/core";
import { ImageMapCoordinate } from './image-map/image-map.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalComponent } from '../../modal/modal.component';

interface DialogData {
  email: string;
}

@Component({
  templateUrl: "./comp1.component.html"
})
export class Comp1Component {
  @Input() data;

  constructor(public dialog: MatDialog) {}

  image: string = './assets/floor1.jpg';
  coordinates: ImageMapCoordinate[] = [
    {
      name: '辦公室 4',
      x: 0,
      y: 5,
      width: 141,
      height: 111,
      cssClass: 'area'
    },  {
      name: '接待區',
      x: 145,
      y: 6,
      width: 113,
      height: 106,
      cssClass: 'area'
    }, {
      name: '等待區',
      x: 264,
      y: 4,
      width: 230,
      height: 111,
      cssClass: 'areaWarnning'
    }, {
      name: '辦公室 1',
      x: 5,
      y: 170,
      width: 103,
      height: 100,
      cssClass: 'area'
    }, {
      name: '辦公室 2',
      x: 112,
      y: 162,
      width: 104,
      height: 100,
      cssClass: 'area'
    }, {
      name: '放射檢查室',
      x: 222,
      y: 164,
      width: 80,
      height: 100,
      cssClass: 'area'
    }, {
      name: '辦公室 3',
      x: 308,
      y: 163,
      width: 105,
      height: 100,
      cssClass: 'area'
    }, {
      name: '浴室',
      x: 416,
      y: 162,
      width: 78,
      height: 100,
      cssClass: 'area'
    }
  ];

      // <area target="" alt="office4" title="office4" href="" coords="0,5,141,111" shape="rect">
    // <area target="" alt="receiption" title="receiption" href="" coords="145,6,258,106" shape="rect">
    // <area target="" alt="waiting room" title="waiting room" href="" coords="264,4,494,111" shape="rect">
    // <area target="" alt="office1" title="office1" href="" coords="5,170,107,262" shape="rect">
    // <area target="" alt="office2" title="office2" href="" coords="112,162,216,260" shape="rect">
    // <area target="" alt="x-ray" title="x-ray" href="" coords="222,164,302,260" shape="rect">
    // <area target="" alt="office3" title="office3" href="" coords="308,163,414,265" shape="rect">
    // <area target="" alt="bath" title="bath" href="" coords="416,162,494,262" shape="rect">
    // <area target="" alt="dark-room" title="dark-room" href="" coords="8,115,75,164" shape="rect">
    // <area target="" alt="hall" title="hall" href="" coords="80,120,497,159" shape="rect">

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
    tempreture: 12.2,
    hum: 34.3,
    gas: 0,
  }

  iotData2 = {
    location: "",
    pm25: 99,
    tempreture: 12.2,
    hum: 34.3,
    gas: 0,
  }

}



    // <area target="" alt="office4" title="office4" href="" coords="0,5,141,111" shape="rect">
    // <area target="" alt="receiption" title="receiption" href="" coords="145,6,258,106" shape="rect">
    // <area target="" alt="waiting room" title="waiting room" href="" coords="264,4,494,111" shape="rect">
    // <area target="" alt="office1" title="office1" href="" coords="5,170,107,262" shape="rect">
    // <area target="" alt="office2" title="office2" href="" coords="112,162,216,260" shape="rect">
    // <area target="" alt="x-ray" title="x-ray" href="" coords="222,164,302,260" shape="rect">
    // <area target="" alt="office3" title="office3" href="" coords="308,163,414,265" shape="rect">
    // <area target="" alt="bath" title="bath" href="" coords="416,162,494,262" shape="rect">
    // <area target="" alt="dark-room" title="dark-room" href="" coords="8,115,75,164" shape="rect">
    // <area target="" alt="hall" title="hall" href="" coords="80,120,497,159" shape="rect">