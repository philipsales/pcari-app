import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMenuTitleComponent } from './admin-menu-title.component';

describe('AdminMenuTitleComponent', () => {
  let component: AdminMenuTitleComponent;
  let fixture: ComponentFixture<AdminMenuTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMenuTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMenuTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
