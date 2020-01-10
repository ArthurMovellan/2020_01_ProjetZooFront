import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilPersonnelComponent } from './accueil-personnel.component';

describe('AccueilPersonnelComponent', () => {
  let component: AccueilPersonnelComponent;
  let fixture: ComponentFixture<AccueilPersonnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilPersonnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
