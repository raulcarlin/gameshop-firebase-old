import { MyOrdersComponent } from './my-orders/my-orders.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { OrderService } from './shared/order.service';
import { ShoppingCartService } from './shared/shopping-cart.service';
import { UserService } from './shared/user.service';
import { AuthService } from './shared/auth.service';
import { FormsModule } from '@angular/forms';
import { ProductsService } from './shared/products.service';
import { AuthGuard } from './shared/auth-guard.service';
import { routing } from './shared/routing';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AdminOrdersComponent } from './admin/orders/admin-orders.component';
import { ProductsFormComponent } from './admin/products/products-form.component';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { ProductsListComponent } from './admin/products/products-list.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { LoginComponent } from './login/login.component';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AdminOrdersComponent,
    ProductsFormComponent,
    ProductsListComponent,
    ProductsComponent,
    CheckoutComponent,
    HomeComponent,
    ShoppingCartComponent,
    OrderSuccessComponent,
    UserOrdersComponent,
    NotFoundComponent,
    ProductCardComponent,
    LoginComponent,
    ProductQuantityComponent,
    ShippingFormComponent,
    ShoppingCartSummaryComponent,
    CheckOutComponent,
    MyOrdersComponent
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
  providers: [AuthGuard, ProductsService, AuthService, UserService, ShoppingCartService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
