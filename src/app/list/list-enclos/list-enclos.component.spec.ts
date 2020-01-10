import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnclosComponent } from './list-enclos.component';

describe('ListEnclosComponent', () => {
  let component: ListEnclosComponent;
  let fixture: ComponentFixture<ListEnclosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEnclosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEnclosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
