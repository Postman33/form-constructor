import {Component, OnInit} from '@angular/core';
import {IField, TypeForm} from "form-generate/models/IField";
import {LoadEntityService} from "form-generate/services/load-entity.service";

/**
 * Движок обработки каждого поля
 *
 */

@Component({
  selector: 'fm-template-engine',
  templateUrl: './template-engine.component.html',
  styleUrls: ['./template-engine.component.css']
})
export class TemplateEngineComponent implements OnInit {

  public formGroups: IField[] = [];


  constructor(public loadEntityService: LoadEntityService) {
  }

  ngOnInit(): void {
  }

  public createForm(FG: IField[]) {
    this.formGroups = FG;
  }

  public trackByFn(index: any, value: any) {
    return value;
  };
}
