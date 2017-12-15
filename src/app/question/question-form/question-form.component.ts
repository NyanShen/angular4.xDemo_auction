import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormItemBase} from '../../common/component/dynamic-form/form-item-base';
import {FormItemControlService} from '../../common/component/dynamic-form/form-item-control.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {

  form: FormGroup;
  payLoad = '';
  @Input()
  questions: FormItemBase<any>[] = [];

  constructor(private fromItemControlService: FormItemControlService) {
  }

  ngOnInit() {
    this.form = this.fromItemControlService.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
