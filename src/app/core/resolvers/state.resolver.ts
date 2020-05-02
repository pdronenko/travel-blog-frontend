import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot } from '@angular/router'
import { of } from 'rxjs'
import { Title } from '@angular/platform-browser'
import { Store } from '@ngrx/store'
import { IAppState } from 'src/app/store'

@Injectable({ providedIn: 'root'})
export class StateResolver implements Resolve<any> {
  constructor(
    private store: Store<IAppState>,
    private titleService: Title
  ) {}
  resolve(route: ActivatedRouteSnapshot) {
    const { action, pageTitle } = route.data
    if (action) {
      this.store.dispatch(action())
    }

    this.titleService.setTitle(pageTitle || 'Trails blog')
    return of(null)
  }
}
