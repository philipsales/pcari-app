import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcdoncologyManageComponent } from './icdoncology-manage.component';

describe('IcdoncologyManageComponent', () => {
  let component: IcdoncologyManageComponent;
  let fixture: ComponentFixture<IcdoncologyManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcdoncologyManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcdoncologyManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
