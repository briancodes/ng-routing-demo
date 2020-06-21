import { Component, OnInit } from '@angular/core';

export interface LinkType {
    name: string;
    route: string[];
}

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css'],
})
export class HeaderComponent implements OnInit {
    routeLinks: LinkType[];
    constructor() {
        console.log('app-header');
    }

    ngOnInit(): void {
        this.routeLinks = [
            {
                name: '/',
                route: ['/'],
            },
            {
                name: '/accounts',
                route: ['/accounts'],
            },
            {
                name: '/accounts/1',
                route: ['/', 'accounts', '1'],
            },
            {
                name: '/accounts/1/current',
                route: ['/', 'accounts', '1', 'current'],
            },
            {
                name: '/accounts/1/credit',
                route: ['/', 'accounts', '1', 'credit'],
            },
        ];
    }
}
