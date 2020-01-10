import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelListNourritureComponent } from './personnel-list-nourriture.component';

describe('PersonnelListNourritureComponent', () => {
  let component: PersonnelListNourritureComponent;
  let fixture: ComponentFixture<PersonnelListNourritureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnelListNourritureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnelListNourritureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
