import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { DetailComponent } from './accounts/detail.component';
import { CreditComponent } from './credit/credit.component';
import { CurrentComponent } from './current/current.component';
import { RouteGuard } from './shared/guards/route.guards';

const routes: Routes = [
    {
        path: 'accounts',
        component: AccountsComponent,
        data: {
            accountsRoute: 'data',
        },
        canActivate: [RouteGuard], // triggered once for the route
        children: [
            {
                path: ':id', // component-less path. Param & data merged with childs param & data maps
                data: {
                    componentLessRoute: 'id',
                },
                canActivateChild: [RouteGuard], // triggered initial and moving between children
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
                        canDeactivate: [RouteGuard],
                    },
                    {
                        path: 'investments',
                        data: {
                            routeData: 'investmentsRoute',
                        },
                        loadChildren: () =>
                            import('./investments/investments.module').then(
                                (m) => m.InvestmentsModule
                            ),
                    },
                ],
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule {}
