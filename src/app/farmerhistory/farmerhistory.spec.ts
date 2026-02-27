import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Farmerhistory } from './farmerhistory';

describe('Farmerhistory', () => {
  let component: Farmerhistory;
  let fixture: ComponentFixture<Farmerhistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Farmerhistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Farmerhistory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
