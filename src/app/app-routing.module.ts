import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { DetailComponent } from './accounts/detail.component';
import { CreditComponent } from './credit/credit.component';
import { CurrentComponent } from './current/current.component';

const routes: Routes = [
    {
        path: 'accounts',
        component: AccountsComponent,
        data: {
            accountsRoute: 'data',
        },
        children: [
            {
                // component-less path
                // param and data get merged with childs param and data maps
                path: ':id',
                data: {
                    componentLessRoute: 'id',
                },
                children: [
                    {
                        path: '',
                        component: DetailComponent,
                        data: {
                            routeData: 'detailEmptyRoute',
                        },
                    },
                    {
                        path: 'credit',
                        component: CreditComponent,
                        data: {
                            routeData: 'creditRoute',
                        },
                    },
                    {
                        path: 'current',
                        component: CurrentComponent,
                        data: {
                            routeData: 'currentRoute',
                        },
                    },
                ],
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
