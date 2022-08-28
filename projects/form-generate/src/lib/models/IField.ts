import {EmailValidator, ValidatorFn, Validators} from "@angular/forms";

export enum TypeForm {
  PASSWORD = 'PASSWORD',
  CHECKBOX = 'CHECKBOX',
  DATE = 'DATE',
  FILE = 'FILE'
}

export interface IField {
  name: string; // Имя IControl. Используется для имени в FormGroup
  type: TypeForm;
  defaultValue?: any;
  validators?: Validators | ValidatorFn[],
  caption?: string // Текст слева
  placeholder?: string; // Текст в input

}
