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
    this.http.post<{name:string}>('https://fruitmagacine-default-rtdb.firebaseio.com/suppliers.json', supplier, {headers:headers}).subscribe((response) => {
      console.log(response);
    })
  }

  deleteSupplier(id:string | undefined) {
    this.http.delete(`https://fruitmagacine-default-rtdb.firebaseio.com/suppliers/${id}.json`)
    .subscribe(() => {});
  }

  deleteAllSuppliers(){
    this.http.delete('https://fruitmagacine-default-rtdb.firebaseio.com/suppliers.json')
    .subscribe(() => {
    })
  }

  UpdateSupplier(id:string | undefined, supplier:Supplier){
    this.http.put(`https://fruitmagacine-default-rtdb.firebaseio.com/suppliers/${id}.json`, supplier).subscribe();
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