import { ActionReducerMap, MetaReducer } from '@ngrx/store'
import { storeFreeze } from 'ngrx-store-freeze'
import { CommonState, commonFactory } from './common/common.reducer'
import { CommonEffects } from './common/common.effect'
import { environment } from 'src/environments/environment'
import { TrailsState, trailsFactory } from './trails/trails.reducer'
import { TrailsEffects } from './trails/trails.effect'

export interface IAppState {
  common: CommonState,
  trails: TrailsState,
}

export const APP_EFFECTS = [
  CommonEffects,
  TrailsEffects
]

export const appReducers: ActionReducerMap<IAppState> = {
  common: commonFactory,
  trails: trailsFactory
}

export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [storeFreeze] : []
