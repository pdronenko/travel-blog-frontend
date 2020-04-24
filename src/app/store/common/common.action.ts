import { createAction, props } from '@ngrx/store'
import { HttpErrorResponse } from '@angular/common/http'

export const loading = createAction('[COMMON] Loading...')
export const loadingSuccess = createAction('[COMMON] Loading [SUCCESS]')
export const loadingError = createAction('[COMMON] Loading [ERROR]', props<{ error: HttpErrorResponse }>())
