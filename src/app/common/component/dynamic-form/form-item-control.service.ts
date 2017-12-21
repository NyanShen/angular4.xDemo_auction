import {Injectable} from '@angular/core';
import {FormItemBase} from './form-item-base';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable()
export class FormItemControlService {
  constructor(private formBuilder: FormBuilder) {
  }

  toFormGroup(formItems: FormItemBase<any>[]) {
    const group: any = {};
    formItems.forEach(formItem => {
      group[formItem.key] = formItem.required
        ? [formItem.value || '', Validators.required]
        : [formItem.value || ''];
    });
    return this.formBuilder.group(group);
  }
}
