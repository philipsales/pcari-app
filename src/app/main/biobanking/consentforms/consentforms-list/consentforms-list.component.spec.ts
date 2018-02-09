import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentformsListComponent } from './consentforms-list.component';

describe('ConsentformsListComponent', () => {
  let component: ConsentformsListComponent;
  let fixture: ComponentFixture<ConsentformsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentformsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentformsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
