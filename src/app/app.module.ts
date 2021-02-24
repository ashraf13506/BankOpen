import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import { SlidercomponentComponent } from './slidercomponent/slidercomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    
    SlidercomponentComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
