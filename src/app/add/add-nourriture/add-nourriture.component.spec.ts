import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNourritureComponent } from './add-nourriture.component';

describe('AddNourritureComponent', () => {
  let component: AddNourritureComponent;
  let fixture: ComponentFixture<AddNourritureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNourritureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNourritureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
