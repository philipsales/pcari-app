import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormQuestionDetailComponent } from './form-question-detail.component';

describe('FormQuestionDetailComponent', () => {
  let component: FormQuestionDetailComponent;
  let fixture: ComponentFixture<FormQuestionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormQuestionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormQuestionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
