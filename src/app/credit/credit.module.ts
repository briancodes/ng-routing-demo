import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreditRoutingModule } from './credit-routing.module';
import { CreditComponent } from './credit.component';

@NgModule({
    declarations: [CreditComponent],
    imports: [CommonModule, CreditRoutingModule],
})
export class CreditModule {}
