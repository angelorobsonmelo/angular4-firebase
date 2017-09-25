import { Component } from '@angular/core';
import {AuthService} from "../../../auth.service";
import {AngularFireAuth} from "angularfire2/auth";
import {Router} from "@angular/router";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    isActive = false;
    showMenu = '';

    constructor(private authService: AuthService){}
    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    onLoggedout() {
       this.authService.logout();
    }
}
