import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AccountTypeService } from '../data-access/account-type.store';

@Component({
  selector: 'mfe-shell-profile',
  template: `<router-outlet></router-outlet>`,
  imports: [RouterOutlet],
})
export class ProfileComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private accountTypeService = inject(AccountTypeService);

  async ngOnInit(): Promise<void> {
    this.route.paramMap.subscribe((params) => {
      const username = params.get('username');
      if (!username) {
        this.router.navigate(['lk','feeds']);
        return;
      };

      this.accountTypeService.checkAccountType(username)
        .subscribe(({ accountType }) => {
            this.navigateToAccountType(accountType, username);
        },() => {
            this.router.navigate(['lk','feeds']);
            return;
        });

    });
  }

  navigateToAccountType(accountType: string, username: string): void {
    if (accountType === 'PERSONAL') {
      this.router.navigate(['lk','p',username]);
    } else if (accountType === 'BUSINESS') {
      this.router.navigate(['lk', 'b',username]);
    }
  }
}
