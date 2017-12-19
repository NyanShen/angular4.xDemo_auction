import { Component, OnInit } from '@angular/core';
import {QuestionFromService} from './question-form.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questions: any[];

  constructor(questionFormService: QuestionFromService) {
    this.questions = questionFormService.getQuestionFormItems();
  }

  ngOnInit() {
  }

}
