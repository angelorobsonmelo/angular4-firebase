import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {AuthService} from '../auth.service';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        CommonModule,
        FormsModule,
    ],
    declarations: [LoginComponent],
    providers: [AuthService]
})
export class LoginModule {
}
