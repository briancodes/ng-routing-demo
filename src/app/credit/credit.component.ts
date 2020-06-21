import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

const log = console.log;
@Component({
    selector: 'app-credit',
    template: `
        <p>
            credit works!
        </p>
    `,
    styles: [],
})
export class CreditComponent implements OnInit {
    constructor(route: ActivatedRoute, router: Router) {
        log(
            route.routeConfig.component?.name,
            route.snapshot.data,
            route.snapshot.params
        );
    }

    ngOnInit(): void {}
}
