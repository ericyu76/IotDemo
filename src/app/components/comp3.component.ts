import { Component, Input } from "@angular/core";
import { ImageMapCoordinate } from './image-map/image-map.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalComponent } from '../../modal/modal.component';


@Component({
  templateUrl: "./comp1.component.html"
})

export class Comp3Component {
  @Input() data;

  constructor(public dialog: MatDialog) {}

  image: string = './assets/floor3.jpg';
  coordinates: ImageMapCoordinate[] = [
    {
      name: '5F (F5 CELL)',
      x: 1,
      y: 78,
      width: 280,
      height: 70,
      cssClass: 'area'
    },{
      name: '4F (F4 CELL)',
      x: 3,
      y: 149,
      width: 280,
      height: 70,
      cssClass: 'area'
    },{
      name: '3F (F3 CELL)',
      x: 1,
      y: 220,
      width: 280,
      height: 70,
      cssClass: 'areaWarnning'
    },{
      name: '2F (F2 CELL)',
      x: 1,
      y: 290,
      width: 280,
      height: 70,
      cssClass: 'area'
    },{
      name: '1F (F1 CELL)',
      x: 1,
      y: 363,
      width: 280,
      height: 70,
      cssClass: 'area'
    },
  ];

    //   <area target="" alt="5f" title="5f" href="" coords="1,78,280,144" shape="rect">
    // <area target="" alt="4f" title="4f" href="" coords="3,149,280,214" shape="rect">
    // <area target="" alt="3f" title="3f" href="" coords="5,223,279,285" shape="rect">
    // <area target="" alt="2f" title="2f" href="" coords="6,293,280,357" shape="rect">
    // <area target="" alt="1f" title="1f" href="" coords="5,363,281,427" shape="rect">


  getClick(coordinate: ImageMapCoordinate) {
    console.log(`Clicked on ${coordinate.name}`);
    this.iotData1.location = coordinate.name;
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '300px',
      data: this.iotData1
    });
  }

  iotData1 = {
    location: "",
    pm25: 12.1,
    tempreture: 12.2,
    hum: 34.3,
  }

}