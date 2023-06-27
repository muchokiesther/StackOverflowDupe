import {  createSelector,createFeatureSelector,createReducer, on } from '@ngrx/store';
import { User } from 'src/app/Interfaces';
import * as UserActions from '../Actions/userActions';

export interface UserInterface {
  Users: User[];
  getUserError: string;
}

const initialState: UserInterface = {
  Users: [],
  getUserError: ''
};

//selectors
export const getUserState = createFeatureSelector <UserInterface>('user')
export  const getUsers = createSelector(getUserState,(state)=>state.Users)
export const  getPropError = createSelector(getUserState,(state)=>state.getUserError)

export const userReducer = createReducer(
  initialState,
  on(UserActions.GetUsersSuccess, (state, action):UserInterface =>{ 
return{
    ...state,
    getUserError: '',
    Users: action.Users
}
  }),

  on(UserActions.GetUsersFailure , (state, action):UserInterface =>{
    return{
        ...state,
        getUserError: action.errorMessage ,
        Users: []
    }
      })
  
 




)


 