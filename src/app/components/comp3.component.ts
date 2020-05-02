import { Component, Input } from "@angular/core";

@Component({
  template: "<div> <p>I am comp3 loaded by {{data.parent}}<p></div>"
})
export class Comp3Component {
  @Input() data;
}
