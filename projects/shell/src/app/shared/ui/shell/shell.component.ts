import { loadRemoteModule } from '@angular-architects/native-federation';
import { AfterViewInit, Component, Injector, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'plataform-shell-dashboard',
  imports: [RouterOutlet],
  template: `
  <ng-template #navbarContainer></ng-template>
  <router-outlet></router-outlet>
  <ng-template #footerContainer></ng-template>
  `,
  styles: `
  :host {
      display: block;
      background-color: #f4f2ee;
  }
  `
})
export class ShellComponent implements AfterViewInit {

  @ViewChild('navbarContainer', { read: ViewContainerRef, static: true })
  navbarContainer!: ViewContainerRef;

  @ViewChild('footerContainer', { read: ViewContainerRef, static: true })
  footerContainer!: ViewContainerRef;

  constructor(private injector: Injector) {}

  async ngAfterViewInit() {
    // -------------------------- FOOTER --------------------------
    const footerModule = await loadRemoteModule({
      remoteName: 'shared',    
      exposedModule: './ShellFooterComponent'
    });


    const footer = footerModule.ShellFooterComponent;

    this.footerContainer.createComponent(footer, { injector: this.injector });
    // -------------------------- NAVBAR --------------------------
    const navbarModule = await loadRemoteModule({
        remoteName: 'shared',    
        exposedModule: './ShellNavbarComponent'
      });
  
  
      const navbar = navbarModule.ShellNavbarComponent;
  
      this.navbarContainer.createComponent(navbar, { injector: this.injector });
  }
}
