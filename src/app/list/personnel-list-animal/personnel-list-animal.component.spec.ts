import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelListAnimalComponent } from './personnel-list-animal.component';

describe('PersonnelListAnimalComponent', () => {
  let component: PersonnelListAnimalComponent;
  let fixture: ComponentFixture<PersonnelListAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnelListAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnelListAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
