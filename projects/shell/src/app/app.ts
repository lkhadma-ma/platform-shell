import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { loadRemoteStyles } from '@shared/util/load-remote-styles';

@Component({
  selector: 'plataform-shell',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  async ngOnInit() {
    // -------------------------- STYLES --------------------------
    await loadRemoteStyles('auth');
    await loadRemoteStyles('shared');
    await loadRemoteStyles('feed');
    await loadRemoteStyles('user');
    await loadRemoteStyles('company');
    await loadRemoteStyles('search');
  }

}
