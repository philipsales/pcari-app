import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseUpdateComponent } from './case-update.component';

describe('CaseUpdateComponent', () => {
  let component: CaseUpdateComponent;
  let fixture: ComponentFixture<CaseUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
