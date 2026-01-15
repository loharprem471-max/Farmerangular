import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Startfarmer } from './startfarmer';

describe('Startfarmer', () => {
  let component: Startfarmer;
  let fixture: ComponentFixture<Startfarmer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Startfarmer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Startfarmer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
