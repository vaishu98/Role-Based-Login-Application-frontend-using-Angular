import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { UserAuthService } from "../service/userAuth.service";

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor{

    constructor(
        private userAuthService: UserAuthService,
        private router: Router
    ){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
        if(req.headers.get("No-Auth") === 'True'){
            return next.handle(req.clone());
        }

        const token = this.userAuthService.getToken();

        if(token != null){
            req=this.addToken(req, token);
        }

        return next.handle(req).pipe(
            catchError(
                (err:HttpErrorResponse) => {
                    console.log(err.status);
                    if(err.status === 401){
                        this.userAuthService.clear();
                        this.router.navigate(['Login']);
                    }
                    if(err.status === 403){
                        this.router.navigate(['Forbidden']);
                    }
                    throw new Error("Something is wrong");
                }
            )
        );

    }

    private addToken(req: HttpRequest<any>, token : string){
        return req.clone(
            {
                setHeaders:{
                    Authorization : `Bearer ${token}`
                }
            }
        )
    }
}