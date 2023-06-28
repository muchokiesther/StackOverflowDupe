import {createAction, props} from '@ngrx/store'
import { LoginUser, LoginUserSuccess, NewUser, User } from 'src/app/Interfaces'

export const GetUsers = createAction('[User]-GetUser')
export const GetUsersSuccess = createAction('[User]-GetUserSuccess',props<{Users:User[]}>())
export const GetUsersFailure = createAction('[User]-GetUsersFailure', props<{errorMessage:string}>())


export const Addusers = createAction('[User]-Adduser', props<{newUser:NewUser}>())
export const AddusersSuccess = createAction('[User]-AdduserSuccess',props<{message:string}>())
export const AddusersFailure = createAction('[User]-AddusersFailure', props<{message:string}>())

export const Updateusers = createAction('[User]-Updateuser', props<{updatedUser:NewUser}>())
export const UpdateusersSuccess = createAction('[User]-UpdateuserSuccess',props<{message:string}>())
export const UpdateusersFailure = createAction('[User]-Update usersFailure', props<{message:string}>())


export const Userlogin= createAction('[User] loginUser',props<{user:LoginUser}>())  
export const UserloginSuccess= createAction('[User]-loginuserSuccess', props<{message:string}>())
export const UserloginFailure= createAction('[User]-loginuserFailure',props<{message:string}>())