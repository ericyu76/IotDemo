import { Component, Input } from "@angular/core";
import { ImageMapCoordinate } from './image-map/image-map.component';

@Component({
  templateUrl: "./comp1.component.html"
})
export class Comp1Component {
  @Input() data;

  image: string = './assets/floor1.jpg';
  coordinates: ImageMapCoordinate[] = [
    {
      name: 'office4',
      x: 0,
      y: 5,
      width: 141,
      height: 111
    },  {
      name: '接待區',
      x: 145,
      y: 6,
      width: 113,
      height: 106
    }, {
      name: 'waitting room',
      x: 264,
      y: 4,
      width: 240,
      height: 111
    }
  ]

  getClick(coordinate: ImageMapCoordinate) {
    console.log(`Clicked on ${coordinate.name}`);

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