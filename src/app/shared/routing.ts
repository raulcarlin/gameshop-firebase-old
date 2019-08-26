import { CheckOutComponent } from '../check-out/check-out.component';
import { MyOrdersComponent } from '../my-orders/my-orders.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { LoginComponent } from '../login/login.component';
import { ProductsListComponent } from '../admin/products/products-list.component';
import { ProductsFormComponent } from '../admin/products/products-form.component';
import { NotFoundComponent } from '../notfound/notfound.component';
import { ProductsComponent } from '../products/products.component';
import { HomeComponent } from '../home/home.component';
import { AuthGuard } from './auth-guard.service';
import { OrderSuccessComponent } from '../order-success/order-success.component';
import { AdminOrdersComponent } from '../admin/orders/admin-orders.component';
import { UserOrdersComponent } from '../user-orders/user-orders.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { MenuComponent } from '../menu/menu.component';


const mainRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    { 
        path: 'products',
        component: ProductsComponent
    },
    { 
        path: 'login',
        component: LoginComponent
    },

    { path: 'check-out', component: CheckOutComponent },
    { path: 'order-success/:id', component: OrderSuccessComponent },
    { path: 'my/orders', component: MyOrdersComponent },
    
    { 
        path: 'cart',
        component: ShoppingCartComponent
    },
    { 
        path: 'orders',
        canActivate: [AuthGuard],
        component: UserOrdersComponent
    },
    { 
        path: 'admin-products/new',
        canActivate: [AuthGuard],
        component: ProductsFormComponent
    },
    { 
        path: 'admin-products/:id',
        canActivate: [AuthGuard],
        component: ProductsFormComponent
    },
    { 
        path: 'admin-products',
        canActivate: [AuthGuard],
        component: ProductsListComponent
    },
    { 
        path: 'admin-orders',
        canActivate: [AuthGuard],
        component: AdminOrdersComponent
    },
    {
        path: 'orders-success',
        canActivate: [AuthGuard],
        component: OrderSuccessComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(mainRoutes);