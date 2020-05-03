import { Injectable } from "@angular/core";
import { Tab } from "./tab.model";
import { Comp1Component } from "./components/comp1.component";
import { Comp2Component } from "./components/comp2.component";
import { Comp3Component } from "./components/comp3.component";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class TabService {
  public tabs: Tab[] = [
    new Tab(Comp1Component, "辦公室", { parent: "AppComponent" }),
    new Tab(Comp2Component, "家庭", { parent: "AppComponent" }),
    new Tab(Comp3Component, "大樓", { parent: "AppComponent" })
  ];

  public tabSub = new BehaviorSubject<Tab[]>(this.tabs);

  public removeTab(index: number) {
    this.tabs.splice(index, 1);
    if (this.tabs.length > 0) {
      this.tabs[this.tabs.length - 1].active = true;
    }
    this.tabSub.next(this.tabs);
  }

  public addTab(tab: Tab) {
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].active === true) {
        this.tabs[i].active = false;
      }
    }
    tab.id = this.tabs.length + 1;
    tab.active = true;
    this.tabs.push(tab);
    this.tabSub.next(this.tabs);
  }
}
