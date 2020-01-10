import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerUpdateNourritureComponent } from './manager-update-nourriture.component';

describe('ManagerUpdateNourritureComponent', () => {
  let component: ManagerUpdateNourritureComponent;
  let fixture: ComponentFixture<ManagerUpdateNourritureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerUpdateNourritureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerUpdateNourritureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
