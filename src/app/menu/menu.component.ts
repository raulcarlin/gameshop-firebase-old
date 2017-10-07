import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  isCollapsed = true;
  
  constructor() { }

  change() {
    this.isCollapsed = !this.isCollapsed;
  }

}
