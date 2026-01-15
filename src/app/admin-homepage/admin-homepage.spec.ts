import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomepage } from './admin-homepage';

describe('AdminHomepage', () => {
  let component: AdminHomepage;
  let fixture: ComponentFixture<AdminHomepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminHomepage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminHomepage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
