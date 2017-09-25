import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {UserComponent} from './user.component';
import {UserRoutingModule} from './user-routing.module';
import {PageHeaderModule} from '../shared/modules/page-header/page-header.module';
import {FormsModule} from '@angular/forms';
import {UserService} from './user.service';
import {AngularFireDatabase} from 'angularfire2/database';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        PageHeaderModule,
        FormsModule
    ],
    declarations: [
        UserComponent,
    ],
    providers: [UserService, AngularFireDatabase]
})
export class UserModule { }
