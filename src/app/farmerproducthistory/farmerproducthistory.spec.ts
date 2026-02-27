import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Farmerproducthistory } from './farmerproducthistory';

describe('Farmerproducthistory', () => {
  let component: Farmerproducthistory;
  let fixture: ComponentFixture<Farmerproducthistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Farmerproducthistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Farmerproducthistory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
