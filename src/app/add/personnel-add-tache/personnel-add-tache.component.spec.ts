import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelAddTacheComponent } from './personnel-add-tache.component';

describe('PersonnelAddTacheComponent', () => {
  let component: PersonnelAddTacheComponent;
  let fixture: ComponentFixture<PersonnelAddTacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnelAddTacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnelAddTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
