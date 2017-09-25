import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import {AuthService} from '../auth.service';
import {FormsModule} from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'

@NgModule({
    imports: [
        CommonModule,
        SignupRoutingModule,
        FormsModule,
        CustomFormsModule

    ],
    declarations: [SignupComponent],
    providers: [AuthService]
})
export class SignupModule { }
