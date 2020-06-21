import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

const log = console.log;

@Component({
    selector: 'app-current',
    template: `
        <p>
            'current works!'
        </p>
    `,
    styles: [],
})
export class CurrentComponent implements OnInit {
    constructor(route: ActivatedRoute, router: Router) {
        log(
            route.routeConfig.component?.name,
            route.snapshot.data,
            route.snapshot.params
        );
    }

    ngOnInit(): void {}
}
