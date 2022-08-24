import { Component } from '@angular/core';
import {TypeForm} from "form-generate/models/IField";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-constructor';
  fields = [
    {
      name: 'Пароль',
      type: TypeForm.PASSWORD
    },
    {
      name: 'Пароль',
      type: TypeForm.CHECKBOX
    },
    {
      name: 'Пароль',
      type: TypeForm.CHECKBOX
    },
  ]
}
