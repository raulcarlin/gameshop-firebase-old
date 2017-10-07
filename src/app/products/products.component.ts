import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: any[] = [];
  filteredProducts: any[] = []
  category;
  categories;

  constructor(private prodService: ProductsService,
  private route: ActivatedRoute) { 
    prodService.getCategories()
    .switchMap(categories => {
      this.categories = categories; 
      return prodService.getProducts();
    }).switchMap(products => {
      this.products = products;
      return route.queryParamMap;
    })
    .subscribe(params => {
      this.category = params.get('category');
      
      this.filteredProducts = (this.category) ? 
        this.products.filter(p => p.category === this.category) : 
        this.products;
    });
  }

}
