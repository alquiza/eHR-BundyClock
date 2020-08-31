import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../../services/token-storage/token-storage.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  TOKEN_HEADER_KEY = 'Authorization';

  constructor(
    private token: TokenStorageService,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<HttpEvent<any>>> {
    let AuthRequest = req;
    const token = this.token.getToken();
    if (token !=null) {
      AuthRequest = req.clone({
        headers: req.headers
          .set(this.TOKEN_HEADER_KEY, 'Bearer' + token )
      });
    }
    return next.handle(AuthRequest);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
