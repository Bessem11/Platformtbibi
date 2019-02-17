import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchemedecinComponent } from './recherchemedecin.component';

describe('RecherchemedecinComponent', () => {
  let component: RecherchemedecinComponent;
  let fixture: ComponentFixture<RecherchemedecinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecherchemedecinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecherchemedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
