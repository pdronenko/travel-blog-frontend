import { ActionReducerMap, MetaReducer } from '@ngrx/store'
import { storeFreeze } from 'ngrx-store-freeze'
import { CommonState, commonFactory } from './common/common.reducer'
import { CommonEffects } from './common/common.effect'
import { environment } from 'src/environments/environment'

export interface IAppState {
  common: CommonState,
}

export const APP_EFFECTS = [
  CommonEffects
]

export const appReducers: ActionReducerMap<IAppState> = {
  common: commonFactory,
}

export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [storeFreeze] : []
