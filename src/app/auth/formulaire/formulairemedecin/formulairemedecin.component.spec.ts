import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairemedecinComponent } from './formulairemedecin.component';

describe('FormulairemedecinComponent', () => {
  let component: FormulairemedecinComponent;
  let fixture: ComponentFixture<FormulairemedecinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulairemedecinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulairemedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
