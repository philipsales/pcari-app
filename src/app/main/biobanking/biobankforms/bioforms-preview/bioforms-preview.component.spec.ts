import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioformsPreviewComponent } from './bioforms-preview.component';

describe('BioformsPreviewComponent', () => {
  let component: BioformsPreviewComponent;
  let fixture: ComponentFixture<BioformsPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BioformsPreviewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioformsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
