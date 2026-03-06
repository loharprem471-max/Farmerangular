import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Farmerjunction } from './farmerjunction';

describe('Farmerjunction', () => {
  let component: Farmerjunction;
  let fixture: ComponentFixture<Farmerjunction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Farmerjunction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Farmerjunction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
