import { AuthService } from '../shared/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username;
  password;

  constructor(private authService: AuthService) { }

  login() {
    this.authService.login(this.username, this.password);
  }

}
