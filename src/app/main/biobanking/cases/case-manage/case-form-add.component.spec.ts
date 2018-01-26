import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseFormAddComponent } from './case-form-add.component';

describe('CaseFormAddComponent', () => {
  let component: CaseFormAddComponent;
  let fixture: ComponentFixture<CaseFormAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseFormAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
