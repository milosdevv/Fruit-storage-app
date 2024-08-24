import { Component, OnInit, inject } from '@angular/core';
import { Supplier } from '../Model/Supplier';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { SupplierService } from '../services/supplier.service';

@Component({
  selector: 'app-supplier-dashboard',
  templateUrl: './supplier-dashboard.component.html',
  styleUrls: ['./supplier-dashboard.component.css']
})
export class supplierDashboardComponent implements OnInit{
  showCreateSupplierForm: boolean = false;
  http:HttpClient = inject(HttpClient);
  allSuppliers: Supplier[] = [];
  supplierService:SupplierService = inject(SupplierService);
  currentSupplierId:string = '';

  editMode:boolean = false;
  selectedSupplier:Supplier;
  ngOnInit(): void {
    this.fetchAllTasks()
  }

  OpenCreateSupplierForm(){
    this.showCreateSupplierForm = true;
    this.editMode = false;
    this.selectedSupplier = {
      supplierName: '',
      supplierSurname: '',
      supplierPhoneNumber: '', 
      supplierDateOfArrival: '',
      supplierBeginDestination: '',
      supplierFinalDestination: '',
      supplierPriority: '',
      supplierStatus: ''
  };
  }

  onEditSupplierClick(id:string | undefined){
    this.currentSupplierId = id;
    this.showCreateSupplierForm = true;
    this.editMode = true;

  this.selectedSupplier = this.allSuppliers.find((supplier) => {
      return supplier.id === id;
    })
  }

  closeCreateSupplierForm(){
    this.showCreateSupplierForm = false;
  }

  // HTTP Methods
  createOrUpdateSupplier(supplier: Supplier) {
    if(!this.editMode) this.supplierService.createSupplier(supplier);
    else 
    this.supplierService.UpdateSupplier(this.currentSupplierId, supplier)
    this.fetchAllTasks()
  }

  getAllSuppliers(){
    this.supplierService.getAllSuppliers().subscribe((suppliers) => {
      this.allSuppliers = suppliers;
    })
  }

  deleteSupplier(id: string | undefined) {
    this.supplierService.deleteSupplier(id)
    this.fetchAllTasks()
  }

  deleteAllSuppliers(){
    this.supplierService.deleteAllSuppliers()
    this.fetchAllTasks()
}

private fetchAllTasks() {
  this.supplierService.getAllSuppliers().subscribe((suppliers) => {
    this.allSuppliers = suppliers;
  });
}
}