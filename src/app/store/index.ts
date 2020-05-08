import { ActionReducerMap, MetaReducer } from '@ngrx/store'
import { storeFreeze } from 'ngrx-store-freeze'
import { CommonState, commonFactory } from './common/common.reducer'
import { CommonEffects } from './common/common.effect'
import { environment } from 'src/environments/environment'
import { AuthEffects } from './auth/auth.effect'
import { TrailsState, trailsFactory } from './trails/trails.reducer'
import { TrailsEffects } from './trails/trails.effect'
import { AuthState, authFactory } from './auth/auth.reducer'

export interface IAppState {
  auth: AuthState,
  common: CommonState,
  trails: TrailsState,
}

export const APP_EFFECTS = [
  AuthEffects,
  CommonEffects,
  TrailsEffects
]

export const appReducers: ActionReducerMap<IAppState> = {
  auth: authFactory,
  common: commonFactory,
  trails: trailsFactory
}

export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [storeFreeze] : []
