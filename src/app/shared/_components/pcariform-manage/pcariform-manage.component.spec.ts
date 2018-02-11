import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcariformManageComponent } from './pcariform-manage.component';

describe('PcariformManageComponent', () => {
  let component: PcariformManageComponent;
  let fixture: ComponentFixture<PcariformManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcariformManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcariformManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
