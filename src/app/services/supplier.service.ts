import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Supplier } from '../Model/Supplier';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  http:HttpClient = inject(HttpClient);
  allSuppliers: Supplier[] = [];
  constructor() { }

  createSupplier(supplier:Supplier){
    const headers = new HttpHeaders({'supplier':'new-supplier'})
   return this.http.post<{name:string}>('https://storage-application-management-default-rtdb.firebaseio.com/suppliers.json', supplier, {headers:headers})
  }

  deleteSupplier(id:string | undefined) {
   return this.http.delete(`https://storage-application-management-default-rtdb.firebaseio.com/suppliers/${id}.json`);
  }

  deleteAllSuppliers(){
   return this.http.delete('https://storage-application-management-default-rtdb.firebaseio.com/suppliers.json');
    
  }

  UpdateSupplier(id:string | undefined, supplier:Supplier){
   return this.http.put(`https://storage-application-management-default-rtdb.firebaseio.com/suppliers/${id}.json`, supplier);
  }

  getSupplierDetails(id:string | undefined){
   return this.http.get(`https://storage-application-management-default-rtdb.firebaseio.com/suppliers/${id}.json`)
    .pipe(map((response) => {
      let supplierDetail = {};
      supplierDetail = {...response,id:id};
      return supplierDetail;
    }))
  }

  getAllSuppliers(){
   return this.http.get<{ [key: string]: Supplier }>('https://storage-application-management-default-rtdb.firebaseio.com/suppliers.json')
    .pipe(
      map((response) => {
        let suppliers: Supplier[] = [];
        for (let key in response) {
          if (response.hasOwnProperty(key)) {
            suppliers.push({ ...response[key], id: key });
          }
        }
        return suppliers;
      })
    )
  }
  }