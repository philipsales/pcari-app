import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuTitleComponent } from './side-menu-title.component';

describe('SideMenuTitleComponent', () => {
  let component: SideMenuTitleComponent;
  let fixture: ComponentFixture<SideMenuTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideMenuTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
