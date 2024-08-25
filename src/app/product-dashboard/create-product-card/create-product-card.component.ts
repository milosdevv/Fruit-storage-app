import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/Model/Product';

@Component({
  selector: 'app-create-product-card',
  templateUrl: './create-product-card.component.html',
  styleUrls: ['./create-product-card.component.css']
})
export class CreateProductCardComponent implements AfterViewInit{
@Input() isEditMode:boolean = false;
@Input() selectedProduct:Product;

@ViewChild('productForm') productForm:NgForm;
@Output()
 closeForm: EventEmitter<boolean> = new EventEmitter<boolean>();

@Output() 
emitProductData: EventEmitter<Product> = new EventEmitter<Product>();

ngAfterViewInit(): void {
  setTimeout(() => {
    this.productForm.form.patchValue(this.selectedProduct)
  }, 0)
}
onCloseForm(){
  this.closeForm.emit(false)
}

onProductFormSubmitted(productForm: NgForm) {
  if (productForm.valid) {
    this.closeForm.emit(false);
    this.emitProductData.emit(productForm.value);
    console.log('Form submitted:', productForm.value);
  } else {
    alert('Form is invalid');
  }
}
}
