import { HttpErrorResponse } from '@angular/common/http'
import { createReducer, on, Action } from '@ngrx/store'
import * as commonActions from './common.action'
import { IAppState } from '..'

export class CommonState {
  loading = true
  success = false
  error: HttpErrorResponse = null
}

const commonReducer = createReducer(
  new CommonState(),
  on(commonActions.loading, (state) => ({ ...state, loading: true, success: false, error: null })),
  on(commonActions.loadingSuccess, (state) => ({ ...state, loading: false, success: true, error: null })),
  on(commonActions.loadingError, (state, { error }) => ({ ...state, loading: false, success: false, error }))
)

export function commonFactory(state: CommonState | undefined, action: Action) {
  return commonReducer(state, action)
}

export const getCommonState = (state: IAppState) => state.common
