import { Component, Input } from "@angular/core";
import { ImageMap } from "image-map";

@Component({
  templateUrl: "./comp1.component.html"
})
export class Comp1Component {
  @Input() data;


  office4(){
  	alert(111);
  }

  reception(){
    alert ("reception");
  }

}
