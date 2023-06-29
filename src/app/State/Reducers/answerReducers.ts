import {  createSelector,createFeatureSelector,createReducer, on } from '@ngrx/store';
import { questions, votes } from 'src/app/Interfaces';
import * as questionsActions from '../Actions/answerActions';

export interface answersInterface {
    Upvoting: votes[];
  addvotesuccess:string
  addvotefailure:string
  downvotesuccess:string
  downvotefailure:string


}

const initialState: answersInterface = {
    Upvoting: [],
    addvotesuccess:'',
    addvotefailure:'',
    downvotesuccess:'',
    downvotefailure:''

};



export const answerReducer = createReducer(
  initialState,
  on(questionsActions.upVoteSuccess, (state, action):answersInterface =>{ 
    return{
        ...state,
        addvotefailure:'',
        addvotesuccess:action.message
    }
      }),
      on(questionsActions.upVoteFailure, (state, action):answersInterface =>{ 
        return{
            ...state,
            addvotefailure:action.message,
            addvotesuccess:''
        }
          }),
    
      on(questionsActions.downvoteSuccess , (state, action):answersInterface =>{
        return{
            ...state,
            downvotefailure:action.message,
            downvotesuccess:''
        }
          }),
          on(questionsActions.downvoteFailure , (state, action):answersInterface =>{
            return{
                ...state,
                addvotefailure:action.message,
                downvotesuccess:''
            }
              }),

          

)
        