import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../shared/products.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-admin-products',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent {

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
