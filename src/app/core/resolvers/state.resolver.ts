import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot } from '@angular/router'
import { of } from 'rxjs'
import { Title } from '@angular/platform-browser'

@Injectable({ providedIn: 'root'})
export class StateResolver implements Resolve<any> {
  constructor(
    private titleService: Title,
  ) {}
  resolve(route: ActivatedRouteSnapshot) {
    const { pageTitle } = route.data
    if (pageTitle) {
      this.titleService.setTitle(pageTitle)
    }
    return of(null)
  }
}
