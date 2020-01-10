import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerListPersonneComponent } from './manager-list-personne.component';

describe('ManagerListPersonneComponent', () => {
  let component: ManagerListPersonneComponent;
  let fixture: ComponentFixture<ManagerListPersonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerListPersonneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerListPersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
