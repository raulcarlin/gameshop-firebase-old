import { Product } from '../shared/models/product';
import { ShoppingCart } from '../shared/models/shopping-cart';
import { ShoppingCartService } from '../shared/shopping-cart.service';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../shared/products.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  shoppingCart: ShoppingCart;
  category;
  categories;
  sub;

  constructor(
    private prodService: ProductsService,
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService) { 

    prodService.getCategories()
    .switchMap(categories => {
      this.categories = categories; 
      return prodService.getProducts();
    
    }).switchMap(products => {
      this.products = products;
      return route.queryParamMap;
    
    }).subscribe(params => {
      this.category = params.get('category');
      
      this.filteredProducts = (this.category) ? 
        this.products.filter(p => p.category === this.category) : 
        this.products;
    });
  }

  async ngOnInit() {
    this.sub = (await this.shoppingCartService.getCart()).subscribe(cart => {
      this.shoppingCart = cart;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
