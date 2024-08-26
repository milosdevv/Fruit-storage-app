import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/Model/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
@Output()
closeDetailView: EventEmitter<boolean> = new EventEmitter<boolean>();

@Input() currentProduct: Product | null = null;

onCloseProductDetail(){
  this.closeDetailView.emit(false)
}
}
