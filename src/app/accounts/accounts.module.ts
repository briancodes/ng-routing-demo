import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { DetailComponent } from './detail.component';

@NgModule({
    declarations: [AccountsComponent, DetailComponent],
    imports: [CommonModule, AccountsRoutingModule],
})
export class AccountsModule {}
