import {Injectable} from '@angular/core';
import {FormItemBase} from '../../common/component/dynamic-form/form-item-base';
import {FormDropdown} from '../../common/component/dynamic-form/form-dropdown';
import {FormTextbox} from '../../common/component/dynamic-form/form-textbox';

@Injectable()
export class QuestionFromService {

  getQuestionFormItems() {
    const questionFormItems: FormItemBase<any>[] = [
      new FormDropdown({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new FormTextbox({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new FormTextbox({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        required: false,
        order: 2
      })
    ];
    return questionFormItems.sort((a, b) => a.order - b.order);
  }
}
