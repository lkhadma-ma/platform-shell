import { Component, OnInit } from '@angular/core';
import { LinkItemComponent } from './components/link-item/link-item.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [LinkItemComponent, RouterLink]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
