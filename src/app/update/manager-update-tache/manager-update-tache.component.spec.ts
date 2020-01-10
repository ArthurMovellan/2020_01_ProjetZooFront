import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerUpdateTacheComponent } from './manager-update-tache.component';

describe('ManagerUpdateTacheComponent', () => {
  let component: ManagerUpdateTacheComponent;
  let fixture: ComponentFixture<ManagerUpdateTacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerUpdateTacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerUpdateTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
