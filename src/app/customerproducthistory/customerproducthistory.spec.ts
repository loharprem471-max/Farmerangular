import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customerproducthistory } from './customerproducthistory';

describe('Customerproducthistory', () => {
  let component: Customerproducthistory;
  let fixture: ComponentFixture<Customerproducthistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Customerproducthistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Customerproducthistory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
