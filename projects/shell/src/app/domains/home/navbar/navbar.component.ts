import { Component, OnInit, inject } from '@angular/core';
import { LinkItemComponent } from './components/link-item/link-item.component';
import { RouterLink } from '@angular/router';
import { UserStore } from '../data-access/user.store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [LinkItemComponent, RouterLink],
  providers: [UserStore]
})
export class NavbarComponent implements OnInit {

  private userStore = inject(UserStore);
  user = this.userStore.user;

  constructor() { }

  ngOnInit() {
    this.userStore.loadCurrentUser();
  }

}
