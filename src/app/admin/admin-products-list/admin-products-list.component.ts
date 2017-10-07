import { Router } from '@angular/router';
import { ProductsService } from '../../products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-products-list',
  templateUrl: './admin-products-list.component.html',
  styleUrls: ['./admin-products-list.component.css']
})
export class AdminProductsListComponent {
  
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
