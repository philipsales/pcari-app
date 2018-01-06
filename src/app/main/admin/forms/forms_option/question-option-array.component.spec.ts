import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionOptionArrayComponent } from './question-option-array.component';

describe('QuestionOptionArrayComponent', () => {
  let component: QuestionOptionArrayComponent;
  let fixture: ComponentFixture<QuestionOptionArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionOptionArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionOptionArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
