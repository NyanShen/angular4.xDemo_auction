import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() title: string;
  @Input() subTitle: string;
  @Input() menu: string;
  @Input() subMenu: string;
  @Input() button: string;

  constructor() {
  }

  ngOnInit() {
  }

}
