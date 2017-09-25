import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import {User} from '../shared/model';
import {NgForm} from '@angular/forms';
import {UserService} from './user.service';
import {ActivatedRoute} from '@angular/router';
import {ToastyConfig, ToastyService} from 'ng2-toasty';
import {Title} from "@angular/platform-browser";


@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    animations: [routerTransition()]
})
export class UserComponent implements OnInit {

    user: User = new User();
    key: string;
    constructor(private userService: UserService,  private route: ActivatedRoute, private toasty: ToastyService, private title: Title) {}

    ngOnInit() {
        this.title.setTitle('User');
        this.route.queryParams.subscribe(queryParams => {
            this.key = queryParams['key'];
            if (this.key) {
                this.findUserByKey(this.key);
            }
        });
    }

    saveUser(form: NgForm) {
        if (this.key) {
            this.updateUser(this.user, this.key);
        } else {
            this.saveUserDataBase(form);
        }
    }

    saveUserDataBase(form: NgForm) {
        this.userService.saveUser(this.user)
            .then(resposta => {
                this.user = new User();
                form.reset();
                this.toasty.success('Saved Successfully!')
            })
            .catch(error => {
                console.log(error);
            });
    }

    findUserByKey(key: string) {
        this.userService.findByKey(key).then(response => this.user = response.val());
    }

    updateUser(user: User, key: string) {
        this.userService.updateUser(user, key)
            .then(() => this.toasty.success('Successfully updated!'))
            .catch(error => {
                console.log(error);
            });
    }

}
