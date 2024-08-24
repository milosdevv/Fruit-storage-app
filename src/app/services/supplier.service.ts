import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Supplier } from '../Model/Supplier';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  http:HttpClient = inject(HttpClient);
  constructor() { }

  createSupplier(supplier:Supplier){
    const headers = new HttpHeaders({'supplier':'new-supplier'})
   return this.http.post<{name:string}>('https://fruitmagacine-default-rtdb.firebaseio.com/suppliers.json', supplier, {headers:headers})
  }

  deleteSupplier(id:string | undefined) {
   return this.http.delete(`https://fruitmagacine-default-rtdb.firebaseio.com/suppliers/${id}.json`);
  }

  deleteAllSuppliers(){
   return this.http.delete('https://fruitmagacine-default-rtdb.firebaseio.com/suppliers.json');
    
  }

  UpdateSupplier(id:string | undefined, supplier:Supplier){
   return this.http.put(`https://fruitmagacine-default-rtdb.firebaseio.com/suppliers/${id}.json`, supplier);
  }

  getAllSuppliers(){
   return this.http.get<{ [key: string]: Supplier }>('https://fruitmagacine-default-rtdb.firebaseio.com/suppliers.json')
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