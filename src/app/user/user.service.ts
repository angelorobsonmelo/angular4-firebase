import {Injectable} from '@angular/core';
import {User} from '../shared/model';

import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import 'rxjs/add/operator/toPromise'
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {

    todos$: FirebaseListObservable<any[]>;
    items: FirebaseListObservable<any[]>;


    constructor(private af: AngularFireDatabase) {

    }

    saveUser(user: User) {
        this.todos$ = this.af.list('/user');
        return  this.todos$.push({firstname: user.firstname, lastname: user.lastname, officer: user.officer})
    }
    delete(key: string) {
       return this.af.object('/user/' + key).remove();
    }

    updateUser(user: User, key: string){
        return this.af.object('/user/' + key)
            .update({firstname: user.firstname, lastname: user.lastname, officer: user.officer});
    }

    findByKey(key: string) {
        return this.af.database.ref('/user/' + key).once('value');
    }

    findAllUser() {
       return this.af.list('/user', {
           query: {
               orderByChild: 'firstname'
           }
       });
    }

    search(user: User) {
        return this.af.list('/user', {
            query: {
                orderByChild: 'firstname',
                equalTo: user.firstname
            }
        });
    }

}
