import { AdminProductsListComponent } from './admin/admin-products-list/admin-products-list.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './auth-guard.service';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';


const mainRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    { 
        path: 'login',
        canActivate: [AuthGuardService],
        component: LoginComponent
    },
    { 
        path: 'orders',
        canActivate: [AuthGuardService],
        component: UserOrdersComponent
    },
    { 
        path: 'products',
        canActivate: [AuthGuardService],
        component: ProductsComponent
    },
    { 
        path: 'admin-products/new',
        canActivate: [AuthGuardService],
        component: AdminProductsComponent
    },
    { 
        path: 'admin-products/:id',
        canActivate: [AuthGuardService],
        component: AdminProductsComponent
    },
    { 
        path: 'admin-products',
        canActivate: [AuthGuardService],
        component: AdminProductsListComponent
    },
    { 
        path: 'admin-orders',
        canActivate: [AuthGuardService],
        component: AdminOrdersComponent
    },
    {
        path: 'orders-success',
        canActivate: [AuthGuardService],
        component: OrderSuccessComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(mainRoutes);