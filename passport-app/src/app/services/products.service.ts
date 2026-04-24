import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
   productData:Product=new Product();
    productList:Product[];
    readonly passportApiUrl='http://localhost:5000/api/Products';
    constructor(private objHttp:HttpClient) { }
    getProductList(){
      this.objHttp.get(this.passportApiUrl).toPromise().then(res=>this.productList=res as Product[]);
    }
}
