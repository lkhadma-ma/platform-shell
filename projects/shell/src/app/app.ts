import { loadRemoteModule } from '@angular-architects/native-federation';
import { Component, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { loadRemoteStyles } from '@shared/util/load-remote-styles';

@Component({
  selector: 'plataform-shell',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  @ViewChild('alert', { read: ViewContainerRef, static: true })
  alertContainer!: ViewContainerRef;

  constructor(private injector: Injector) { }

  async ngOnInit() {
    // -------------------------- STYLES --------------------------
    await loadRemoteStyles('auth');
    await loadRemoteStyles('shared');
    await loadRemoteStyles('feed');
    await loadRemoteStyles('user');
    // -----------------------------Alert Component--------------------------
    const AlertContainerModule = await loadRemoteModule({
      remoteName: 'shared',    
      exposedModule: './AlertContainerComponent'
    });

    const alertContainer = AlertContainerModule.AlertContainerComponent;

    this.alertContainer.createComponent(alertContainer, { injector: this.injector });
  }

}
