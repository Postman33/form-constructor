import {AfterContentChecked, AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {TemplateEngineComponent} from "form-generate/components/template-engine/template-engine/template-engine.component";

@Component({
  selector: 'fm-form-viewer',
  templateUrl: './form-viewer.component.html',
  styleUrls: ['./form-viewer.component.css']
})
export class FormViewerComponent implements OnInit, AfterViewInit, AfterViewChecked, AfterContentChecked {

  @ViewChild('engine') engineComponent: TemplateEngineComponent

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  ngAfterViewChecked(): void {
    setTimeout(() => {
      this.engineComponent.createForm();
    }, 0);
  }

  ngAfterContentChecked(): void {
  }

}

