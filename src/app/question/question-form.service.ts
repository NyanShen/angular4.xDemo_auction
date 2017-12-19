import {Injectable} from '@angular/core';
import {FormItemBase} from '../common/component/dynamic-form/form-item-base';
import {FormDropDown} from '../common/component/dynamic-form/form-dropdown';
import {FormTextBox} from '../common/component/dynamic-form/form-textbox';
import {FormRadio} from '../common/component/dynamic-form/form-radio';
import {FormCheck} from "../common/component/dynamic-form/form-check";

@Injectable()
export class QuestionFromService {

  getQuestionFormItems() {
    const questionFormItems: FormItemBase<any>[] = [
      new FormDropDown({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid', value: 'Solid value'},
          {key: 'great', value: 'Great value'},
          {key: 'good', value: 'Good value'},
          {key: 'unproven', value: 'Unproven value'}
        ],
        order: 3
      }),

      new FormTextBox({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new FormTextBox({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        required: false,
        order: 2
      }),

      new FormRadio({
        key: 'sex',
        label: 'men or women',
        type: 'radio',
        radioOptions: [
          {key: 'male', value: 'male'},
          {key: 'female', value: 'female'}
        ],
        order: 4
      }),

      new FormCheck({
        key: 'favorite',
        label: 'favorite things',
        type: 'checkbox',
        checkOptions: [
          {key: 'sing', value: 'sing value'},
          {key: 'football', value: 'football value'},
          {key: 'dance', value: 'dance value'},
          {key: 'reading', value: 'reading value'}
        ],
        order: 5
      })
    ];
    return questionFormItems.sort((a, b) => a.order - b.order);
  }
}
