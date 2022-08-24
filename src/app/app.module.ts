import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormGenerateModule} from "form-generate/form-generate.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormGenerateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
