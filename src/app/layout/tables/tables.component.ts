import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {User} from '../../shared/model';
import {UserService} from '../../user/user.service';
import {Router} from '@angular/router';
import {ToastyService} from 'ng2-toasty';
import {NgForm} from '@angular/forms';
import {Title} from "@angular/platform-browser";

declare var swal: any;
@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    users$: FirebaseListObservable<any[]>;
    usersDropDown$: FirebaseListObservable<any[]>;
    user = new User();
    p: any;

    constructor(private userService: UserService,
                private router: Router, private af: AngularFireDatabase, private toasty: ToastyService, private title: Title) {}
    ngOnInit() {
        this.finAllUser();
        this.getAllUserDropDown();
        this.title.setTitle('Users');
    }

    delete(key: string) {
        swal({
            title: 'Confirm!',
            text: `Are you sure?`,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then((x) =>
            this.userService.delete(key)
                .then(() => this.toasty.success('Removed Successfully'))
                .catch(erro => console.log(erro))
        ).catch(() => null);
    }

    findByKey(key: string) {
        this.router.navigate(['/user-save'], { queryParams: { key: key } });

    }

    search(form: NgForm) {
        if(this.user.firstname) {
            this.users$ = this.userService.search(this.user);
        } else {
            this.finAllUser();
        }
    }

    finAllUser() {
        this.users$ = this.userService.findAllUser();
    }

    getAllUserDropDown(){
        this.usersDropDown$ = this.userService.findAllUser();
    }
}
