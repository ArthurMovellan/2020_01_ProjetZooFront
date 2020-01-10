import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerListEnclosComponent } from './manager-list-enclos.component';

describe('ManagerListEnclosComponent', () => {
  let component: ManagerListEnclosComponent;
  let fixture: ComponentFixture<ManagerListEnclosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerListEnclosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerListEnclosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
