import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBookedComponent } from './list-booked.component';

describe('ListBookedComponent', () => {
  let component: ListBookedComponent;
  let fixture: ComponentFixture<ListBookedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBookedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
