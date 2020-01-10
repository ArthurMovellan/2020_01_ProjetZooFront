import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelListTacheComponent } from './personnel-list-tache.component';

describe('PersonnelListTacheComponent', () => {
  let component: PersonnelListTacheComponent;
  let fixture: ComponentFixture<PersonnelListTacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnelListTacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnelListTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
