import {Component, Input, OnInit} from '@angular/core';
import {FormItemBase} from './form-item-base';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() formItem: FormItemBase<any>;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }
  get isValid() { return this.form.controls[this.formItem.key].valid; }

}