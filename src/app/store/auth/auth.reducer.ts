import { Action, createReducer, on } from '@ngrx/store'
import { IAppState } from '..'
import { loginError } from './auth.action'

export class AuthState {
  error: string
}

const commonReducer = createReducer(
  new AuthState(),
  on(loginError, (state, { error }) => ({ ...state, error }))
)

export function authFactory(state: AuthState | undefined, action: Action) {
  return commonReducer(state, action)
}

export const getAuthState = (state: IAppState) => state.auth
