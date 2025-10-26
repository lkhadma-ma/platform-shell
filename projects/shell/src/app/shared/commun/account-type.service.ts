import { Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthHttpService } from "@shared/auth/auth-http.service";
import { EMPTY, catchError, lastValueFrom, map } from "rxjs";

enum AccountType {
  BUSINESS = 'BUSINESS',
  PERSONAL = 'PERSONAL'
}

interface AccountTypeResponse {
  accountType: AccountType;
}

@Injectable({ 
    providedIn: 'root'
})
export class AccountTypeService {
  
  private http = inject(AuthHttpService);
  private router = inject(Router);
  private accountType: AccountType | null = null;
  
  private readonly baseUrl = 'http://localhost:8080/mbe-user/api/v1';

  isBusinessAccount() {
    return this.accountType === AccountType.BUSINESS;
  }

  isPersonalAccount() {
    return this.accountType === AccountType.PERSONAL;
  }

  async checkAccountType(username : string) {
    const checker = this.http.get<AccountTypeResponse>(`${this.baseUrl}/users/check-account-type?username=${username}`)
    .pipe(
      map(response => {
        this.accountType = response.accountType;
      }),
      catchError(_ => {
        this.router.navigate(['/lk/feeds']);
        throw EMPTY;
      })
    );
    return lastValueFrom(checker);
  }

}