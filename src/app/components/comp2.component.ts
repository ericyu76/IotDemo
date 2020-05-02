import { Component, Input } from "@angular/core";

@Component({
  template: "<div><img src='assets/floor2.jpg'></div>"
})
export class Comp2Component {
  @Input() data;
}
