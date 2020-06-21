import { Route } from '@angular/compiler/src/core';
import { Injectable, Type } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateChild,
    CanDeactivate,
    CanLoad,
    RouterStateSnapshot,
    UrlSegment,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class RouteGuard
    implements CanActivate, CanActivateChild, CanDeactivate<any>, CanLoad {
    // Can also return UrlTree, or Promise/Observable<boolean | UrlTree>
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        const segment = route.url.toString() || `''`;
        console.log('   canActivate: ', segment, state.url);
        return true;
    }

    canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        const segment = childRoute.url.toString() || `''`;
        console.log('   canActivateChild: ', segment, state.url);
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

    canLoad(
        route: Route,
        segments: UrlSegment[]
    ): boolean | Observable<boolean> | Promise<boolean> {
        console.log('   canLoad: ', segments.toString());
        return false;
    }
}
