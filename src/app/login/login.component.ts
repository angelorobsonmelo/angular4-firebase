import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routerTransition} from '../router.animations';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';
import {Title} from "@angular/platform-browser";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    constructor(public router: Router, private authService: AuthService, private title: Title) {
    }

    ngOnInit() {
        this.title.setTitle('Login');
    }

    onLoggedin(form: NgForm) {
        console.log(form.value);
        this.authService.login(form.value.email, form.value.password);
    }

}
