import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

    constructor(private authService: AuthService, private title: Title) { }

    ngOnInit() {
        this.title.setTitle('Signup');
    }

    signup(form: NgForm){
        this.authService.signup(form.value.email, form.value.password);
    }

}
