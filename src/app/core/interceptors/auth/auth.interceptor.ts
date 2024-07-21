import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpClient } from "@angular/common/http";
import { Injectable, Injector, inject } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../../services/auth/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authService = inject(AuthService);
    const token = authService.getAccessToken();
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(req);
  }
}
