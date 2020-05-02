import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { loadTrailPreviews, loadTrailPreviewsEnd } from './trails.action'
import { BlogService } from 'src/app/modules/trails/services/blog.service'
import { mergeMap, map, catchError, tap } from 'rxjs/operators'
import { EMPTY } from 'rxjs'
import { Store } from '@ngrx/store'
import { IAppState } from '..'
import { loading, loadingSuccess, loadingError } from '../common/common.action'

@Injectable()
export class TrailsEffects {

  loadTrailPreviews$ = createEffect(() => this.actions$.pipe(
    ofType(loadTrailPreviews.type),
    tap(() => this.store.dispatch(loading())),
    mergeMap(() => this.blogService.getTrails()
      .pipe(
        tap(() => this.store.dispatch(loadingSuccess())),
        map(trailPreviews => loadTrailPreviewsEnd({ trailPreviews })),
        catchError((err) => {
          this.store.dispatch(loadingError(err))
          return EMPTY
        })
      ))
    )
  )

  constructor(
    private actions$: Actions,
    private blogService: BlogService,
    private store: Store<IAppState>
  ) {}
}
