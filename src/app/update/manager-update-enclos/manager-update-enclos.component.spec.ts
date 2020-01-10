import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerUpdateEnclosComponent } from './manager-update-enclos.component';

describe('ManagerUpdateEnclosComponent', () => {
  let component: ManagerUpdateEnclosComponent;
  let fixture: ComponentFixture<ManagerUpdateEnclosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerUpdateEnclosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerUpdateEnclosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
