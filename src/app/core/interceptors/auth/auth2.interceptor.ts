import { HttpInterceptorFn } from '@angular/common/http';

export const auth2Interceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
