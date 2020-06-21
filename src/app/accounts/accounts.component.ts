import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

const log = console.log;

@Component({
    selector: 'app-accounts',
    template: `
        <p>
            app-accounts component
        </p>
        <p>
            app-accounts - router
        </p>
        <router-outlet></router-outlet>
    `,
    styles: [],
})
export class AccountsComponent implements OnInit {
    constructor(route: ActivatedRoute, router: Router) {
        log(
            route.routeConfig.component?.name,
            route.snapshot.data,
            route.snapshot.params
        );
    }

    ngOnInit(): void {}
}
