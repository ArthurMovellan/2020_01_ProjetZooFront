import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAddEnclosComponent } from './manager-add-enclos.component';

describe('ManagerAddEnclosComponent', () => {
  let component: ManagerAddEnclosComponent;
  let fixture: ComponentFixture<ManagerAddEnclosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerAddEnclosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerAddEnclosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
