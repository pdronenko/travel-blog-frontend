import { createReducer, on, Action } from '@ngrx/store'
import * as trailsAction from './trails.action'
import { IAppState } from '..'

export class TrailsState {
  trailPreviews = []
}

const commonReducer = createReducer(
  new TrailsState(),
  on(trailsAction.loadTrailPreviews, (state) => state),
  on(trailsAction.loadTrailPreviewsEnd, (state, { trailPreviews }) => ({ ...state, trailPreviews })),
)

export function trailsFactory(state: TrailsState | undefined, action: Action) {
  return commonReducer(state, action)
}

export const getTrailsState = (state: IAppState) => state.trails
