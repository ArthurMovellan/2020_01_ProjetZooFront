import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAddTacheComponent } from './manager-add-tache.component';

describe('ManagerAddTacheComponent', () => {
  let component: ManagerAddTacheComponent;
  let fixture: ComponentFixture<ManagerAddTacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerAddTacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerAddTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
