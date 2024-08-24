import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductCardComponent } from './create-product-card.component';

describe('CreateProductCardComponent', () => {
  let component: CreateProductCardComponent;
  let fixture: ComponentFixture<CreateProductCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateProductCardComponent]
    });
    fixture = TestBed.createComponent(CreateProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
