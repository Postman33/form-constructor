import { NgModule } from '@angular/core';
import { FormGenerateComponent } from './form-generate.component';
import { FormViewerComponent } from './components/form-viewer/form-viewer.component';
import { TemplateEngineComponent } from './components/template-engine/template-engine/template-engine.component';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    FormGenerateComponent,
    FormViewerComponent,
    TemplateEngineComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormGenerateComponent,
    FormViewerComponent
  ]
})
export class FormGenerateModule { }
