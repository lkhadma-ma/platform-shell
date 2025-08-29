import { loadRemoteModule } from '@angular-architects/native-federation';
import { AfterViewInit, Component, Injector, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { loadRemoteStyles } from '@shared/util/load-remote-styles';

@Component({
  selector: 'plataform-shell',
  imports: [RouterOutlet],
  template: `
  <ng-template #navbarContainer></ng-template>
  <router-outlet></router-outlet>
  <ng-template #footerContainer></ng-template>

  `
})
export class FeedShellComponent implements AfterViewInit {

  @ViewChild('navbarContainer', { read: ViewContainerRef, static: true })
  navbarContainer!: ViewContainerRef;

  @ViewChild('footerContainer', { read: ViewContainerRef, static: true })
  footerContainer!: ViewContainerRef;

  constructor(private injector: Injector) {}

  async ngAfterViewInit() {
    // -------------------------- STYLES --------------------------
    await loadRemoteStyles('shared');
    await loadRemoteStyles('feed');
    // -------------------------- FOOTER --------------------------
    const footerModule = await loadRemoteModule({
      remoteName: 'shared',    
      exposedModule: './footer'
    });


    const footer = footerModule.FooterComponent;

    this.footerContainer.createComponent(footer, { injector: this.injector });
    // -------------------------- NAVBAR --------------------------
    const navbarModule = await loadRemoteModule({
        remoteName: 'shared',    
        exposedModule: './navbar'
      });
  
  
      const navbar = navbarModule.NavbarComponent;
  
      this.navbarContainer.createComponent(navbar, { injector: this.injector });
  }
}
