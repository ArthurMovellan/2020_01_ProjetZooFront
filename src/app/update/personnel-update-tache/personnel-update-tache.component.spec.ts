import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelUpdateTacheComponent } from './personnel-update-tache.component';

describe('PersonnelUpdateTacheComponent', () => {
  let component: PersonnelUpdateTacheComponent;
  let fixture: ComponentFixture<PersonnelUpdateTacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnelUpdateTacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnelUpdateTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
