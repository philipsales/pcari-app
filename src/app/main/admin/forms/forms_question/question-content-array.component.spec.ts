import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionContentArrayComponent } from './question-content-array.component';

describe('QuestionContentArrayComponent', () => {
  let component: QuestionContentArrayComponent;
  let fixture: ComponentFixture<QuestionContentArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionContentArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionContentArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
