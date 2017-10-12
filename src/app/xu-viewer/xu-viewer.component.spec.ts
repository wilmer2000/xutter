/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { XuViewerComponent } from './xu-viewer.component';

describe('XuViewerComponent', () => {
  let component: XuViewerComponent;
  let fixture: ComponentFixture<XuViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XuViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
