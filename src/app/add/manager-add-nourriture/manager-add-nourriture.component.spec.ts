import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAddNourritureComponent } from './manager-add-nourriture.component';

describe('ManagerAddNourritureComponent', () => {
  let component: ManagerAddNourritureComponent;
  let fixture: ComponentFixture<ManagerAddNourritureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerAddNourritureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerAddNourritureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
