import {  createSelector,createFeatureSelector,createReducer, on } from '@ngrx/store';
import { User } from 'src/app/Interfaces';
import * as UserActions from '../Actions/userActions';

export interface UserInterface {
  Users: User[];
  getUserError: string;
  addusersuccess:string
  adduserfailure:string 
 updateusersuccess:string
 updateuserfailure:string 
 loginusersuccess:string 
 loginuserfailure:string 
 deleteusersuccess:string 
 deleteuserfailure:string 
}

const initialState: UserInterface = {
  Users: [],
  getUserError: '',
  addusersuccess:'',
  adduserfailure:'', 
 updateusersuccess:'',
  updateuserfailure:'',
 loginusersuccess:'',
  loginuserfailure:'',
  deleteusersuccess:'' ,
  deleteuserfailure:'' 
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
      }),
      on(UserActions.AddusersSuccess , (state, action):UserInterface =>{
        return{
            ...state,
         adduserfailure:'',
         addusersuccess:action.message
        }
          }),
          on(UserActions.AddusersFailure , (state, action):UserInterface =>{
            return{
                ...state,
             adduserfailure:action.message,
             addusersuccess:''
            }
              }),

              on(UserActions.UpdateusersSuccess , (state, action):UserInterface =>{
                return{
                    ...state,
                 updateuserfailure:'',
                 updateusersuccess:action.message
                }
                  }),
                  on(UserActions.UpdateusersFailure , (state, action):UserInterface =>{
                    return{
                        ...state,
                    updateuserfailure:action.message,
                    updateusersuccess:''
                    }
                      }) ,
                      on(UserActions.UserloginSuccess , (state, action):UserInterface =>{
                        return{
                            ...state,
                         loginuserfailure:'',
                        loginusersuccess:action.message
                        }
                          }),
                          on(UserActions.UserloginFailure, (state, action):UserInterface =>{
                            return{
                                ...state,
                         loginuserfailure:action.message,
                           loginusersuccess:''
                            }
                              }) ,
                              on(UserActions.deleteuserSuccess , (state, action):UserInterface =>{
                                return{
                                    ...state,
                                 deleteuserfailure:'',
                                deleteusersuccess:action.message
                                }
                                  }),
                                  on(UserActions.deleteuserFailure, (state, action):UserInterface =>{
                                    return{
                                        ...state,
                                 deleteuserfailure:action.message,
                                   deleteusersuccess:''
                                    }
                                      }) 
  
 




)


 