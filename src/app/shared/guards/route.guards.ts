import { Injectable, Type } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateChild,
    CanDeactivate,
    RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class RouteGuard
    implements CanActivate, CanActivateChild, CanDeactivate<any> {
    // Can also return UrlTree, or Promise/Observable<boolean | UrlTree>
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        console.log('   canActivate: ', state.url);
        return true;
    }

    canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        console.log('   canActivateChild: ', state.url);
        return true;
    }

    canDeactivate(
        component: Type<any>,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState: RouterStateSnapshot
    ): Observable<boolean> {
        console.log('   canDeactivate: ', currentState.url);
        return new Observable((observer) => {
            // Open an OK, Cancel prompt, with callbacks to here
            // and trigger a next(true/false) then navigate, or return
            // a url tree
            observer.next(true);
            observer.complete();
        });
    }
}
