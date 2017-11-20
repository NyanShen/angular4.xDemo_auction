import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Code403Component } from './code403.component';

describe('Code403Component', () => {
  let component: Code403Component;
  let fixture: ComponentFixture<Code403Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Code403Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Code403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
