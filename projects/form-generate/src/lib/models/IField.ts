
export enum TypeForm {
  PASSWORD = 'PASSWORD',
  CHECKBOX = 'CHECKBOX'
}


export interface IField {
  name: string;
  type: TypeForm;
}
