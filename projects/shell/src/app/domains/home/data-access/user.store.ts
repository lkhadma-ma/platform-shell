import { AuthHttpService } from "@shared/auth/auth-http.service";
import { User } from "./user";
import { inject, signal } from "@angular/core";


export class UserStore {
    user = signal<User | null>(null);
    private http = inject(AuthHttpService);
    private readonly baseUrl = 'http://localhost:8080/mbe-user/api/v1';

    loadCurrentUser() {
        return this.http.get<User>(`${this.baseUrl}/users/mfe-shell/view`)
            .subscribe({
                next: (user) => this.user.set(user),
                error: () => {
                    this.user.set(null);
                }
            });
    }

}