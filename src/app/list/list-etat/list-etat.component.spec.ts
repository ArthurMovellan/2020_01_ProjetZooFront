import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEtatComponent } from './list-etat.component';

describe('ListEtatComponent', () => {
  let component: ListEtatComponent;
  let fixture: ComponentFixture<ListEtatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEtatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEtatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
