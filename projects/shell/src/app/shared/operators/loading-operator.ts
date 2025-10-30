import { finalize, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

/**
 * Custom RxJS operator that toggles a loading indicator.
 *
 * @param setLoading A function to set the loading state, e.g. `isLoading = true/false`
 */
export function withLoading<T>(setLoading: (state: boolean) => void) {
  return (source$: Observable<T>): Observable<T> => {
    return source$.pipe(
      tap(() => setLoading(true)),
      finalize(() => setLoading(false))
    );
  };
}
