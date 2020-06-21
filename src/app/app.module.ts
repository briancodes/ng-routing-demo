import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountsModule } from './accounts/accounts.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditModule } from './credit/credit.module';
import { CurrentModule } from './current/current.module';
import { HeaderModule } from './header/header.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeaderModule,
        AccountsModule,
        CurrentModule,
        CreditModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
