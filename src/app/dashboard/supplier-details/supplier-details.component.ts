import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Supplier } from 'src/app/Model/Supplier';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css']
})
export class SupplierDetailsComponent {
  @Output()
  CloseDetailView: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() currentSupplier: Supplier | null = null;

  OnCloseSupplierDetail(){
    this.CloseDetailView.emit(false);
  }
}
