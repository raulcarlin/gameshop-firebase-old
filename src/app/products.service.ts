import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProductsService {

  constructor(private db: AngularFireDatabase) { }

  getCategories() {
    return this.db.list('/categories');
  }

  getProducts() {
    return this.db.list('/products');
  }

  removeProduct(product) {
    this.db.list('/products').remove(product);
  }

  addProduct(product) {
    this.db.list('/products').push(product);
  }
  
  getProduct(id) {
    return this.db.object('/products/' + id);
  }

  updateProduct(id, product) {
    this.db.object('/products/' + id).update(product);
  }
}
