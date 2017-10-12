import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountMenuComponent } from './my-account-menu.component';

describe('MyAccountMenuComponent', () => {
  let component: MyAccountMenuComponent;
  let fixture: ComponentFixture<MyAccountMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAccountMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccountMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
