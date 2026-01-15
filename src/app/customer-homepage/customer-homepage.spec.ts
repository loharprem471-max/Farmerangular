import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerHomepage } from './customer-homepage';

describe('CustomerHomepage', () => {
  let component: CustomerHomepage;
  let fixture: ComponentFixture<CustomerHomepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerHomepage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerHomepage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
