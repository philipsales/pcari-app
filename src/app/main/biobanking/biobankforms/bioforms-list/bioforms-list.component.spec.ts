import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioformsListComponent } from './bioforms-list.component';

describe('BioformsListComponent', () => {
  let component: BioformsListComponent;
  let fixture: ComponentFixture<BioformsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BioformsListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioformsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
