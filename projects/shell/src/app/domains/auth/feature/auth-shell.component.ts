import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'auth-shell',
  imports: [RouterOutlet],
  template: `
  <router-outlet></router-outlet>
  `
})
export class AuthShellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  
}
