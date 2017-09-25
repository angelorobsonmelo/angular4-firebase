import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TablesComponent} from './tables.component';
import {TablesRoutingModule} from './tables-routing.module';
import {PageHeaderModule} from './../../shared';
import {AngularFireDatabase} from 'angularfire2/database';
import {UserService} from '../../user/user.service';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/components/dropdown/dropdown';

@NgModule({
    imports: [
        CommonModule,
        TablesRoutingModule,
        PageHeaderModule,
        DataTableModule,
        NgxPaginationModule,
        FormsModule,
        DropdownModule
    ],
    declarations: [TablesComponent],
    providers: [AngularFireDatabase, UserService]
})
export class TablesModule { }
