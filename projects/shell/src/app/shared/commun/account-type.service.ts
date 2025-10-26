import { Injectable, inject } from "@angular/core";
import { AuthHttpService } from "@shared/auth/auth-http.service";
import { lastValueFrom, map } from "rxjs";

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
  
  private http = inject(AuthHttpService) 
  
  // Constants
  private readonly baseUrl = 'http://localhost:8080/mbe-user/api/v1';

  private checker = this.http.get<AccountTypeResponse>(`${this.baseUrl}/users/check-account-type`);

  async isBusinessAccount() {
    const state = await lastValueFrom(this.checker);
    return state.accountType === AccountType.BUSINESS;
  }

  async isPersonalAccount() {
    const state = await lastValueFrom(this.checker);
    return state.accountType === AccountType.PERSONAL;
  }
}