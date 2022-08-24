import {AfterContentChecked, AfterViewChecked, AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {
  TemplateEngineComponent
} from "form-generate/components/template-engine/template-engine/template-engine.component";
import {IField} from "form-generate/models/IField";

/**
 * Представление всей формы
 *
 */

@Component({
  selector: 'fm-form-viewer',
  templateUrl: './form-viewer.component.html',
  styleUrls: ['./form-viewer.component.css']
})
export class FormViewerComponent implements OnInit, AfterViewChecked {

  @ViewChild('engine') engineComponent: TemplateEngineComponent
  @Input('fields') inputs: IField[];

  constructor() {
  }

  ngOnInit(): void {
  }


  ngAfterViewChecked(): void {
    setTimeout(() => {
      this.engineComponent.createForm(this.inputs);
    }, 0);
  }


}

