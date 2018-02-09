import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentformsPreviewComponent } from './consentforms-preview.component';

describe('ConsentformsPreviewComponent', () => {
  let component: ConsentformsPreviewComponent;
  let fixture: ComponentFixture<ConsentformsPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentformsPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentformsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
