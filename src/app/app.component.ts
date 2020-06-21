import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <app-header></app-header>
        <p>app-root router-outlet</p>
        <router-outlet></router-outlet>
    `,
    styles: [],
})
export class AppComponent {}
