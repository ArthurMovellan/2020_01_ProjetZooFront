import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerListNourritureComponent } from './manager-list-nourriture.component';

describe('ManagerListNourritureComponent', () => {
  let component: ManagerListNourritureComponent;
  let fixture: ComponentFixture<ManagerListNourritureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerListNourritureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerListNourritureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
