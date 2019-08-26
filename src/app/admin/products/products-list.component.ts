import { Router } from '@angular/router';
import { ProductsService } from '../../shared/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  
    products$;
  
    constructor(
      private productsService: ProductsService,
      private router: Router) { 
      this.products$ = productsService.getProducts();
    }

    removeProduct(product) {
      if(!confirm('Are you sure? ' + product.title + ' will be removed...')) return;
      
      this.productsService.removeProduct(product);
    }

  }
