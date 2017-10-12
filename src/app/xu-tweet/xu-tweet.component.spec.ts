/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { XuTweetComponent } from './xu-tweet.component';

describe('XuTweetComponent', () => {
  let component: XuTweetComponent;
  let fixture: ComponentFixture<XuTweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuTweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XuTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
