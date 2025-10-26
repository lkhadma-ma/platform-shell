import { inject } from '@angular/core';
import { ResolveFn, ActivatedRouteSnapshot } from '@angular/router';
import { AccountTypeService } from './account-type.service';

export const AccountTypeResolver: ResolveFn<Promise<void>> = async (route: ActivatedRouteSnapshot) => {
  const username = route.paramMap.get('username')!;
  const accountTypeService = inject(AccountTypeService);
  return await accountTypeService.checkAccountType(username);
};
