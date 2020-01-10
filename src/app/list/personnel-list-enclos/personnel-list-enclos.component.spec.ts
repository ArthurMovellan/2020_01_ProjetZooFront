import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelListEnclosComponent } from './personnel-list-enclos.component';

describe('PersonnelListEnclosComponent', () => {
  let component: PersonnelListEnclosComponent;
  let fixture: ComponentFixture<PersonnelListEnclosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnelListEnclosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnelListEnclosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
