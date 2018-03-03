import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioformsUpdateComponent } from './bioforms-update.component';

describe('BioformsUpdateComponent', () => {
  let component: BioformsUpdateComponent;
  let fixture: ComponentFixture<BioformsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BioformsUpdateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioformsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
