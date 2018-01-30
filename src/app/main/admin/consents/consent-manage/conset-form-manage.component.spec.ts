import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsetFormManageComponent } from './conset-form-manage.component';

describe('ConsetFormManageComponent', () => {
  let component: ConsetFormManageComponent;
  let fixture: ComponentFixture<ConsetFormManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsetFormManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsetFormManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
