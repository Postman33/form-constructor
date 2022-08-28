import {Component, Input, OnInit} from '@angular/core';
import {IField, TypeForm} from "form-generate/models/IField";
import {LoadEntityService} from "form-generate/services/load-entity.service";
import {FormControl, FormGroup} from "@angular/forms";

/**
 * Движок обработки каждого поля
 *
 */

@Component({
  selector: 'fm-template-engine',
  templateUrl: './template-engine.component.html',
  styleUrls: ['./template-engine.component.scss'],

})
export class TemplateEngineComponent implements OnInit {

  // Какиеи есть поля в компоненте
  public iFields: IField[] = [];
  // Типы форм
  public types = TypeForm;

  @Input()
  public inputFormGroup: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
  }

  public createForm(FG: IField[]) {
    this.iFields = FG;

    for (let i of FG) {
      console.log(i.defaultValue || null)
      this.inputFormGroup.addControl(i.name, new FormControl(i.defaultValue || null, i.validators))
    }
  }

  public trackByFn(index: any, value: IField) {
    return value.name;
  };
}
