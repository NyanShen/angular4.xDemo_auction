import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {QuestionFormComponent} from './question-form/question-form.component';
import {QuestionFromService} from './question-form/question-form.service';
import {ReactiveFormsModule} from '@angular/forms';
import {QuestionComponent} from './question.component';
import {DynamicFormComponent} from '../common/component/dynamic-form/dynamic-form.component';
import {FormItemControlService} from '../common/component/dynamic-form/form-item-control.service';

@NgModule({
  declarations: [
    QuestionComponent,
    QuestionFormComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule],
  providers: [QuestionFromService, FormItemControlService],
  bootstrap: []
})
export class QuestionModule {
}
