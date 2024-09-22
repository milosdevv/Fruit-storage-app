import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../Model/Product';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http:HttpClient = inject(HttpClient)
  constructor() { }

  createProduct(product:Product) {
   return this.http.post<{name:string}>('https://storage-application-management-default-rtdb.firebaseio.com/products.json', product)
  }

  deleteProduct(id:string | undefined) {
   return this.http.delete(`https://storage-application-management-default-rtdb.firebaseio.com/products/${id}.json`)
  }

  deleteAllProducts() {
    return this.http.delete('https://storage-application-management-default-rtdb.firebaseio.com/products.json')
  }

  updateProduct(id:string | undefined, product:Product) {
   return this.http.put(`https://storage-application-management-default-rtdb.firebaseio.com/products/${id}.json`, product)
  }

  getProductDetails(id:string | undefined) {
    return this.http.get<{[key:string]: Product}>(`https://storage-application-management-default-rtdb.firebaseio.com/products/${id}.json`).pipe(map((response) => {
      let productDetail = {};
      productDetail = {...Product};
      productDetail = {...response, id: id};
      return productDetail;
    }))
  }

  getAllproducts(){
    return this.http.get<{ [key: string]: Product }>('https://storage-application-management-default-rtdb.firebaseio.com/products.json')
     .pipe(
       map((response) => {
         let products: Product[] = [];
         for (let key in response) {
           if (response.hasOwnProperty(key)) {
             products.push({ ...response[key], id: key });
           }
         }
         return products;
       })
     )
   }
}
