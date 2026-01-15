import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerHomepage } from './farmer-homepage';

describe('FarmerHomepage', () => {
  let component: FarmerHomepage;
  let fixture: ComponentFixture<FarmerHomepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmerHomepage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerHomepage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
