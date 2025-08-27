import { Component, OnInit } from '@angular/core';
import { LinkItemComponent } from './components/link-item/link-item.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [LinkItemComponent]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
