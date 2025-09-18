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
    await loadRemoteStyles('auth');
  }

}
