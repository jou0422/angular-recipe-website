import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('isLoginStatus')

  if (token) {
    const newRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log('great');
    return next(newRequest)
  }

  return next(req);
}
