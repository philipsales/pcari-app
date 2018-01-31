import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentManageComponent } from './consent-manage.component';

describe('ConsentManageComponent', () => {
  let component: ConsentManageComponent;
  let fixture: ComponentFixture<ConsentManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
