import {createAction, props} from '@ngrx/store'
import { User } from 'src/app/Interfaces'

export const GetUsers = createAction('[User]-GetUser')
export const GetUsersSuccess = createAction('[User]-GetUserSuccess',props<{Users:User[]}>())

export const GetUsersFailure = createAction('[User]-GetUsersFailure', props<{errorMessage:string}>())
 