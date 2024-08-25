import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Supplier } from 'src/app/Model/Supplier';

@Component({
  selector: 'app-create-supplier-card',
  templateUrl: './create-supplier-card.component.html',
  styleUrls: ['./create-supplier-card.component.css']
})
export class createSupplierCardComponent implements AfterViewInit{
 @Input() isEditMode: boolean = false;
 @Input() selectedSupplier: Supplier;

 @ViewChild('supplierForm') supplierForm: NgForm;
  @Output()
  closeForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() emitSupplierData:EventEmitter<Supplier> = new EventEmitter<Supplier>();

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.supplierForm.form.patchValue(this.selectedSupplier);
    }, 0)
  }

  OnCloseForm(){
    this.closeForm.emit(false);
  }

  onSupplierFormSubmitted(supplierForm: NgForm) {
    if(supplierForm.valid) {
      this.emitSupplierData.emit(supplierForm.value);
      this.closeForm.emit(false);
    }
  }
}
