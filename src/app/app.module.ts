import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatDialogModule, MatTabsModule, MatButtonModule, MatCardModule } from '@angular/material';


import { AppComponent } from "./app.component";
import { TabContentComponent } from "./tab-content.component";
import { ContentContainerDirective } from "./content-container.directive";
import { TabService } from "./tab.service";
import { ImageMapComponent } from "./components/image-map/image-map.component";
import { Comp1Component } from "./components/comp1.component";
import { Comp2Component } from "./components/comp2.component";
import { Comp3Component } from "./components/comp3.component";
import { ModalComponent } from "./components/modal/modal.component";

@NgModule({
  declarations: [
    AppComponent,
    TabContentComponent,
    ContentContainerDirective,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ImageMapComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule, MatTabsModule, MatButtonModule, MatCardModule  
  ],
  providers: [TabService],
  bootstrap: [AppComponent],
  entryComponents: [Comp1Component, Comp2Component, 
    Comp3Component, ModalComponent]
})
export class AppModule {}
