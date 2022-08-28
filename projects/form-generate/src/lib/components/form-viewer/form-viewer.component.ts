import {
  AfterViewChecked, AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  TemplateEngineComponent
} from "form-generate/components/template-engine/template-engine/template-engine.component";
import {IField} from "form-generate/models/IField";
import {ChangeDetection} from "@angular/cli/lib/config/workspace-schema";
import {fromEvent, Observable} from "rxjs";
import {FormGroup} from "@angular/forms";

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
export class FormViewerComponent implements OnInit, AfterViewInit {
  @Input('fields') inputs: IField[];

  @ViewChild('engine') engineComponent: TemplateEngineComponent
  @ViewChild("button", {static: true}) button: ElementRef

  public clicked$: Observable<MouseEvent>;
  public formGroup: FormGroup = new FormGroup({});

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.clicked$ = fromEvent(this.button.nativeElement, 'click');
    this.clicked$.subscribe((e: MouseEvent) => {
      console.log(this.formGroup)
    })
  }


  ngAfterViewInit(): void {
    setTimeout(() => {
      // Инициализация движка форм
      this.engineComponent.createForm(this.inputs);
      this.cd.markForCheck();
    }, 0);
  }


}

