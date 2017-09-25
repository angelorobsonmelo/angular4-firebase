import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';
import {ToastyService} from 'ng2-toasty';

@Injectable()
export class AuthService {
    user: Observable<firebase.User>;

    constructor(private firebaseAuth: AngularFireAuth, private router: Router, private toasty: ToastyService) {
        this.user = firebaseAuth.authState;
    }

    signup(email: string, password: string) {
        this.firebaseAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(value => {
                console.log('Success!', value);
                localStorage.setItem('isLoggedin', 'true');
                this.router.navigate(['/dashboard']);
            })
            .catch(err => {
                console.log('Something went wrong:',err.message);
                this.toasty.error(err.message);
            });
    }

    login(email: string, password: string) {
        this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then(value => {
                console.log('Nice, it worked!');
                localStorage.setItem('isLoggedin', 'true');
                this.router.navigate(['/dashboard']);
            })
            .catch(err => {
                this.toasty.error(err.message);
            });
    }

    logout() {
        this.firebaseAuth
            .auth
            .signOut().then(() => {
            localStorage.removeItem('isLoggedin');
            this.router.navigate(['/login']);
        });
    }

}
