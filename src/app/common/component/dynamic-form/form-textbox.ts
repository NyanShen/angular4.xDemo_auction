import {FormItemBase} from './form-item-base';

export class FormTextBox extends FormItemBase<string> {
  controlType = 'textBox';
  type: string;
  maxLength: number;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
    this.maxLength = options['maxLength'] || Number.MAX_SAFE_INTEGER;
  }
}
