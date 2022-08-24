import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  TemplateEngineComponent
} from "form-generate/components/template-engine/template-engine/template-engine.component";
import {IField} from "form-generate/models/IField";
import {ChangeDetection} from "@angular/cli/lib/config/workspace-schema";

/**
 * Представление всей формы
 *
 */

@Component({
  selector: 'fm-form-viewer',
  templateUrl: './form-viewer.component.html',
  styleUrls: ['./form-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormViewerComponent implements OnInit, AfterViewChecked {

  @ViewChild('engine') engineComponent: TemplateEngineComponent
  @Input('fields') inputs: IField[];

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }


  ngAfterViewChecked(): void {
    setTimeout(() => {
      this.engineComponent.createForm(this.inputs);
      this.cd.markForCheck();
    }, 0);
  }


}

