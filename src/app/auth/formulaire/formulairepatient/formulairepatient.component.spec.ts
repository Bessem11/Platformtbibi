import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairepatientComponent } from './formulairepatient.component';

describe('FormulairepatientComponent', () => {
  let component: FormulairepatientComponent;
  let fixture: ComponentFixture<FormulairepatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulairepatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulairepatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
