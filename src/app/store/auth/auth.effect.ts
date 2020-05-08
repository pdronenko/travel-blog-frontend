import { Inject, Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service'
import { EMPTY, of } from 'rxjs'
import { catchError, map, switchMap, tap } from 'rxjs/operators'

import { EStorageItem } from 'src/app/core/enums/storage-item.enum'
import { ICredentials } from 'src/app/core/interfaces/credentials.interface'
import { loadingSuccess } from '../common/common.action'
import { login, loginError, loginSuccess, logout } from './auth.action'

@Injectable()
export class AuthEffects {
  @Effect()
  login$ = this.actions$.pipe(
      ofType<Action & { credentials: ICredentials }>(login.type),
      map(action => action.credentials),
      switchMap(credentials => of('token').pipe(
          map(token => loginSuccess({token})),
          catchError(error => of(loginError({ error }))),
      )),
  )

  @Effect({ dispatch: false })
  onLoginSuccess$ = this.actions$.pipe(
      ofType<Action & { token: string }>(loadingSuccess.type),
      map(action => action.token),
      tap((token: string) => {
          if (!token) return
          this.storage.set(EStorageItem.TOKEN, token)
          this.router.navigate(['/'])
      }),
      switchMap(() => EMPTY),
  )

  @Effect({ dispatch: false })
  onLogout$ = this.actions$.pipe(
      ofType<Action>(logout.type),
      tap(() => {
          this.storage.remove(EStorageItem.TOKEN)
          this.router.navigate(['/login'])
      }),
  )

  constructor(
    private actions$: Actions,
    private router: Router,
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ) {}
}
