import {Component, Inject, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {PlatformLocation} from '@angular/common';
import * as _ from 'lodash';
import {SidebarService} from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() nav: string;
  menus = [];
  currentPath: string;

  constructor(private http: HttpClient,
              private router: Router,
              private sidebarService: SidebarService,
              private platFormLocation: PlatformLocation,
              @Inject(ActivatedRoute) private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
    });
    this.currentPath = this.platFormLocation.pathname;

    this.http.get('/api/menus')
      .subscribe(data => {
        const menuTree = data['menus'];
        _.set(this.menus, menuTree[1].name, menuTree[1].childItems);
        this.menus = _.result(this.menus, this.nav);
        const defaultItem = this.sidebarService.getDefaultItem(this.menus, this.currentPath);
        this.sidebarService.setActiveNavItem(this.menus, defaultItem, this.router);
        this.sidebarService.openItem(defaultItem);
        if (this.sidebarService.hasChildItem(defaultItem)) {
          this.sidebarService.setActiveChildNavItem(this.menus, defaultItem, this.currentPath);
        }
      });
  }

  setActiveChildNavItem(item) {
    this.sidebarService.setActiveChildNavItem(this.menus, item, this.currentPath);
  }

  setActiveNavItem(item) {
    if (this.hasChildItem(item)) {
      this.clearParentItemsActiveStatus();
    } else {
      this.clearActiveStatusWithChildItems();
      item.active = true;
      if (!!item.path) {
        this.router.navigate([item.path]);
      }
    }
  }

  hasChildItem(item) {
    return this.sidebarService.hasChildItem(item);
  }

  clearParentItemsActiveStatus() {
    this.sidebarService.clearParentItemsActiveStatus(this.menus);
  }

  clearActiveStatusWithChildItems() {

    this.sidebarService.clearActiveStatusWithChildItems(this.menus);
  }

  openItem(item) {
    this.sidebarService.openItem(item);
  }

  clearActiveItem(menus, activeItem) {
    this.sidebarService.clearActiveItem(menus, activeItem);
  }

}
