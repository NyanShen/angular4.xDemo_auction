import {FormItemBase} from './form-item-base';

export class FormCheck extends FormItemBase<string> {
  controlType = 'checkbox';
  checkOptions: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.checkOptions = options['checkOptions'] || [];
  }
}
