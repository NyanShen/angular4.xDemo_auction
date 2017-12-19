import {FormItemBase} from './form-item-base';

export class FormDropDown extends FormItemBase<string> {
  controlType = 'dropDown';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
