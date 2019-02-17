import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaspageComponent } from './baspage.component';

describe('BaspageComponent', () => {
  let component: BaspageComponent;
  let fixture: ComponentFixture<BaspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
