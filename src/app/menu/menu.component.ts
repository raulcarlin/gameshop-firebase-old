import { Observable } from 'rxjs/Rx';
import { ShoppingCart } from '../shared/models/shopping-cart';
import { ShoppingCartService } from '../shared/shopping-cart.service';
import { AppUser } from '../shared/models/app-user';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { AuthService } from '../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isCollapsed = true;
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;

  constructor(
    private userService: UserService, 
    private authService: AuthService, 
    private shoppingCartService: ShoppingCartService,
    router: Router) {
    this.authService.user$.subscribe(user => {
      if(user) {
        this.userService.get(user.email).then(user => { this.appUser = user.toJSON(); localStorage.setItem('roles', this.appUser.roles) }); 
      } else {
        this.appUser = null;
      }
    });
  }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
    console.log(this.cart$)
  }

  change() {
    this.isCollapsed = !this.isCollapsed;
  }

  showManage() {
    let roles = localStorage.getItem('roles');
    if(this.appUser && roles) {
      return (roles.includes('owner') || roles.includes('admin'));
    }
  }
  showLogin() {
    if(this.appUser) {
      return false;
    }

    return true;
  }

  logout() {
    this.authService.logout();
    localStorage.removeItem('roles');
    this.appUser = null;
    this.change;
  }

}
