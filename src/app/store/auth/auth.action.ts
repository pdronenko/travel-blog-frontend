import { createAction, props } from '@ngrx/store'
import { ICredentials } from 'src/app/core/interfaces/credentials.interface'

export const login = createAction('[AUTH] Log in...', props<{ credentials: ICredentials }>())
export const loginSuccess = createAction('[AUTH] Log in [SUCCESS]', props<{ token: string }>())
export const loginError = createAction('[AUTH] Log in [ERROR]', props<{ error: any }>())
export const logout = createAction('[AUTH] Log out')
