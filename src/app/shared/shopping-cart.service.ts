import { ShoppingCart } from './models/shopping-cart';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/take';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  async addToCart(product) {
    this.changeCartQuantity(product, 1);
  }

  async removeFromCart(product) {
    this.changeCartQuantity(product, -1);
  }
  
  private async changeCartQuantity(product, num) {
    let cartID = await this.getOrCreateCartID();
    let item$ = this.getItems(cartID, product.$key);
    item$.take(1).subscribe(item => {
      let quantity = (item.quantity || 0) + num;
      
      if (quantity === 0) item$.remove();

      else item$.update({ 
        category: product.category,
        title: product.title,
        imageURL: product.imageURL,
        price: product.price,
        quantity: quantity
      });
    });
  }

  async clearCart() { 
    let cartId = await this.getOrCreateCartID();
    this.db.object('/shopping-carts/' + cartId + '/items').remove();
  }

  private async getOrCreateCartID(): Promise<String> {
    let cartID = localStorage.getItem('cartID');
    if(cartID) return cartID;

    if(!cartID) {
      let result = await this.create();
      if(result) {
        localStorage.setItem('cartID', result.key);
        return result.key;
      }
    }

  }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateAdd: new Date().getTime()
    });
  }

  async getCart() {
    let cartID = await this.getOrCreateCartID();
    return this.db.object('/shopping-carts/' + cartID).map(x => new ShoppingCart(x.items));
  }

  private getItems(cartID, productKey) {
    return this.db.object('/shopping-carts/' + cartID + '/items/' + productKey);
  }

}
