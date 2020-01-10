import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerUpdateAnimalComponent } from './manager-update-animal.component';

describe('ManagerUpdateAnimalComponent', () => {
  let component: ManagerUpdateAnimalComponent;
  let fixture: ComponentFixture<ManagerUpdateAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerUpdateAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerUpdateAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
