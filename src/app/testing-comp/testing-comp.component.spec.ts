import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingCompComponent } from './testing-comp.component';

describe('TestingCompComponent', () => {
  let component: TestingCompComponent;
  let fixture: ComponentFixture<TestingCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingCompComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
