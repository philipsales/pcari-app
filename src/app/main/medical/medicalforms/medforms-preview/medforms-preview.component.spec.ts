import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedformsPreviewComponent } from './medforms-preview.component';

describe('MedformsPreviewComponent', () => {
  let component: MedformsPreviewComponent;
  let fixture: ComponentFixture<MedformsPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedformsPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedformsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
