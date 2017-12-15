import {FormItemBase} from './form-item-base';

export class FormTextbox extends FormItemBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
