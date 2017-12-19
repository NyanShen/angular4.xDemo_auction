import {FormItemBase} from './form-item-base';

export class FormTextBox extends FormItemBase<string> {
  controlType = 'textBox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
