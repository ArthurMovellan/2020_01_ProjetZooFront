import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNourritureComponent } from './list-nourriture.component';

describe('ListNourritureComponent', () => {
  let component: ListNourritureComponent;
  let fixture: ComponentFixture<ListNourritureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNourritureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNourritureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
