import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerListAnimalComponent } from './manager-list-animal.component';

describe('ManagerListAnimalComponent', () => {
  let component: ManagerListAnimalComponent;
  let fixture: ComponentFixture<ManagerListAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerListAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerListAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
