import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent implements OnInit {
   constructor(public srv:ProductsService)
     {
  
     }
    ngOnInit(): void {
     
      this.srv.getProductList();
     
    }

//   products$:Observable<Product[]>;
// constructor(private srv:ProductsService){
//   this.products$=this.srv.getProductList();
// }

}
