import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseFormManageComponent } from './case-form-manage.component';

describe('CaseFormManageComponent', () => {
  let component: CaseFormManageComponent;
  let fixture: ComponentFixture<CaseFormManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseFormManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseFormManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
