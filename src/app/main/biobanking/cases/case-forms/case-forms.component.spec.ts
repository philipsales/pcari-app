import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseFormsComponent } from './case-forms.component';

describe('CaseFormsComponent', () => {
  let component: CaseFormsComponent;
  let fixture: ComponentFixture<CaseFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
