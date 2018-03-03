import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentformsUpdateComponent } from './consentforms-update.component';

describe('ConsentformsUpdateComponent', () => {
  let component: ConsentformsUpdateComponent;
  let fixture: ComponentFixture<ConsentformsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentformsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentformsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
