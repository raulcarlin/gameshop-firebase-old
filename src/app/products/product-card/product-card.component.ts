import { Product } from '../../shared/models/product';
import { ShoppingCart } from '../../shared/models/shopping-cart';
import { ShoppingCartService } from '../../shared/shopping-cart.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input('product') product: Product;
  @Input('show-actions') showActions: boolean = true;
  @Input('shopping-cart') shoppingCart: ShoppingCart;
  
  constructor(private shoppingCartService: ShoppingCartService) { }

  addToCart() {
    this.shoppingCartService.addToCart(this.product);
  }

}
