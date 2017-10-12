/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { XuEditorComponent } from './xu-editor.component';

describe('XuEditorComponent', () => {
  let component: XuEditorComponent;
  let fixture: ComponentFixture<XuEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XuEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
