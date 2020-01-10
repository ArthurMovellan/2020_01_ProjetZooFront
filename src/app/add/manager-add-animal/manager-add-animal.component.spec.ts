import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAddAnimalComponent } from './manager-add-animal.component';

describe('ManagerAddAnimalComponent', () => {
  let component: ManagerAddAnimalComponent;
  let fixture: ComponentFixture<ManagerAddAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerAddAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerAddAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
