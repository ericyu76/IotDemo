import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatTabsModule, MatButtonModule } from "@angular/material";

import { MaterialModule } from './material.module';

import { AppComponent } from "./app.component";
import { TabContentComponent } from "./tab-content.component";
import { ContentContainerDirective } from "./content-container.directive";
import { TabService } from "./tab.service";
import { ImageMapComponent } from "./components/image-map/image-map.component";
import { Comp1Component } from "./components/comp1.component";
import { Comp2Component } from "./components/comp2.component";
// import { ModalComponent } from "../modal/modal.component";

@NgModule({
  declarations: [
    AppComponent,
    TabContentComponent,
    ContentContainerDirective,
    Comp1Component,
    Comp2Component,
    ImageMapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    FormsModule,
  ],
  providers: [TabService],
  bootstrap: [AppComponent],
  entryComponents: [Comp1Component, Comp2Component]
})
export class AppModule {}
