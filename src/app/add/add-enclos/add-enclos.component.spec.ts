import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnclosComponent } from './add-enclos.component';

describe('AddEnclosComponent', () => {
  let component: AddEnclosComponent;
  let fixture: ComponentFixture<AddEnclosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEnclosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEnclosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
