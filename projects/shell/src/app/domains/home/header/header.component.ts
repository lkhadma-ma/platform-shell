import { loadRemoteModule } from '@angular-architects/native-federation';
import { Component, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('btnContinueWithGoogle', { read: ViewContainerRef, static: true })
  btnContinueWithGoogleContainer!: ViewContainerRef;

  constructor(private injector: Injector) { }

  async ngOnInit() {
    // -------------------------- btn Continue With Google --------------------------
    const btnContinueWithGoogleModule = await loadRemoteModule({
      remoteName: 'auth',    
      exposedModule: './BtnContinueWithGoogle'
    });

    const btnContinueWithGoogle = btnContinueWithGoogleModule.BtnContinueWithGoogle;

    this.btnContinueWithGoogleContainer.createComponent(btnContinueWithGoogle, { injector: this.injector });
  }

}
