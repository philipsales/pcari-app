import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcaricaseManageComponent } from './pcaricase-manage.component';

describe('PcaricaseManageComponent', () => {
  let component: PcaricaseManageComponent;
  let fixture: ComponentFixture<PcaricaseManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcaricaseManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcaricaseManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
