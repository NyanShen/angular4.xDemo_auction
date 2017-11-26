import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {DialogComponent, DialogService} from 'ngx-bootstrap-modal';

export class UserModel {
  title: string;
  user: User;
}

@Component({
  selector: 'app-user-detail-modal',
  templateUrl: './user-detail-modal.component.html',
  styleUrls: ['./user-detail-modal.component.css']
})
export class UserDetailModalComponent extends DialogComponent<UserModel, boolean> implements UserModel {

  title: string;
  user: User;

  constructor(dialogService: DialogService) {
    super(dialogService);
  }

}
