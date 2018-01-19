import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular//common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService implements CanActivate {

  userLoggerdIn = false;

  constructor(private router: Router, private http: HttpClient) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    const url = 'http://localhost:5000/api/Auth';

    return this.verifyLogin(url).map(
      r => {
        console.log(r);
        return false;
      }
    );
  }

  verifyLogin(url: string): Observable<boolean> {

    return this.http.post(url, `{"name": "rafael", "password": "123"}`)
    .map(r => {console.log(r); return false; })
    .catch(err => {
      //throw<Observable>
    });

    // if (this.userLoggerdIn) {
    //   console.log('Usuario logado');
    //   return true;
    // }

    // console.log('Usuario Nao logado');

    // return false;
  }

}
