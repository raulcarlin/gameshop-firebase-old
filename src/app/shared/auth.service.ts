import { UserService } from './user.service';
import { AppUser } from './models/app-user';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of'; 
import * as firebase from 'firebase'; 

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(
    private userService: UserService,
    private afAuth: AngularFireAuth, 
    private route: ActivatedRoute,
    private router: Router) { 
    this.user$ = afAuth.authState;    
  }

  login(email, password) {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password).then(() => {
        this.router.navigateByUrl(returnUrl);
      })
    });
  }

  logout() { 
    this.afAuth.auth.signOut().then(() => {
      this.router.navigateByUrl('');
    });;
  }

  get appUser$() : Observable<AppUser> {
    return this.user$
      .switchMap(user => {
        if (user) return this.userService.get(user.uid);

        return Observable.of(null);
      });    
  }
}
