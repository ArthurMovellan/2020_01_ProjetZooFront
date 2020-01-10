import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerListTacheComponent } from './manager-list-tache.component';

describe('ManagerListTacheComponent', () => {
  let component: ManagerListTacheComponent;
  let fixture: ComponentFixture<ManagerListTacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerListTacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerListTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
