import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  products=[
    {id:101,pname:'Herbal Shampoo',price:350.50,mfgDate:'12/12/2020',expDate:'12/1/2026'},
    {id:102,pname:'Facewash',price:350.50,mfgDate:'12/12/2020',expDate:'12/1/2026'},
    {id:103,pname:'Sunscreen SPA50++',price:350.50,mfgDate:'12/12/2020',expDate:'12/1/2026'},
    {id:104,pname:'Hair Oil',price:350.50,mfgDate:'12/12/2020',expDate:'12/1/2026'},
    {id:105,pname:'Lip Balm',price:350.50,mfgDate:'12/12/2020',expDate:'12/1/2026'},
    {id:106,pname:'Face Mask',price:350.50,mfgDate:'12/12/2020',expDate:'12/1/2026'},
  ];
  public displayProducts():Array<{id,pname,price,mfgDate,expDate}>{
    return this.products;
  }
  public registerProduct(product:{id,pname,price,mfgDate,expDate})
  {
    this.products.push(product);
  }
}
