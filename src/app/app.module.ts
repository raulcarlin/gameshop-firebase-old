import { FormsModule } from '@angular/forms';
import { ProductsService } from './products.service';
import { AuthGuardService } from './auth-guard.service';
import { routing } from './routing';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { AdminProductsListComponent } from './admin/admin-products-list/admin-products-list.component';
import { ProductCardComponent } from './products/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    ProductsComponent,
    CheckoutComponent,
    HomeComponent,
    LoginComponent,
    ShoppingCartComponent,
    OrderSuccessComponent,
    UserOrdersComponent,
    NotFoundComponent,
    AdminProductsListComponent,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    routing
  ],
  providers: [AuthGuardService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
