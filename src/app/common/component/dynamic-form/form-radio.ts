import {FormItemBase} from './form-item-base';

export class FormRadio extends FormItemBase<string> {
  controlType = 'radio';
  type: string;
  radioOptions: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
    this.radioOptions = options['radioOptions'] || [];
  }
}
