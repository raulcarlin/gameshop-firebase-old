import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../products.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {

  categories$;
  product: any = {};
  id;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router) { 
    this.categories$ = productsService.getCategories();

    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) this.productsService.getProduct(this.id).take(1).subscribe(p => this.product = p);
  }

  save() {
    if(this.id) this.productsService.updateProduct(this.id, this.product);
    else this.productsService.addProduct(this.product);

    this.router.navigate(['/admin-products']);
  }

  removeProduct() {
    if(!confirm('Are you sure? ' + this.product.title + ' will be removed...')) return;
    
    this.productsService.removeProduct(this.product);
    this.router.navigate(['/admin-products']);
  }
}
