import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioformsCreateComponent } from './bioforms-create.component';

describe('BioformsCreateComponent ', () => {
  let component: BioformsCreateComponent;
  let fixture: ComponentFixture<BioformsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BioformsCreateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioformsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
