import { Component } from '@angular/core';
import {IField, TypeForm} from "form-generate/models/IField";
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-constructor';
  fields: IField[] = [
    {
      name: 'Пароль',
      type: TypeForm.PASSWORD,
      defaultValue: '',
      caption: 'Ваш пароль',
      validators: [Validators.minLength(3), Validators.required]
    },
    {
      name: 'Пароль1',
      type: TypeForm.CHECKBOX
    },
    {
      name: 'Пароль2',
      type: TypeForm.CHECKBOX
    },
  ]
}
