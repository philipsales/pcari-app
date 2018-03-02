import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseFormsUpdateComponent } from './case-forms-update.component';

describe('CaseFormsUpdateComponent', () => {
  let component: CaseFormsUpdateComponent;
  let fixture: ComponentFixture<CaseFormsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseFormsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseFormsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
