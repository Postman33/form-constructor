import {Component, Input, OnInit} from '@angular/core';
import {IField, TypeForm} from "form-generate/models/IField";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'fm-primitive-input',
  templateUrl: './primitive-input.component.html',
  styleUrls: ['./primitive-input.component.scss']
})
export class PrimitiveInputComponent implements OnInit {
  @Input()
  public inputFormGroup: FormGroup;

  @Input() iField: IField;

  public types = TypeForm;
  constructor() {
  }

  ngOnInit(): void {
  }

}
