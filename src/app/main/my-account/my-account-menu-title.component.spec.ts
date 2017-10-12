import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountMenuTitleComponent } from './my-account-menu-title.component';

describe('MyAccountMenuTitleComponent', () => {
  let component: MyAccountMenuTitleComponent;
  let fixture: ComponentFixture<MyAccountMenuTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAccountMenuTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccountMenuTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
