import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customerfooter } from './customerfooter';

describe('Customerfooter', () => {
  let component: Customerfooter;
  let fixture: ComponentFixture<Customerfooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Customerfooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Customerfooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
