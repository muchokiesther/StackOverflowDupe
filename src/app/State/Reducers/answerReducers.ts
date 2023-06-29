import {  createSelector,createFeatureSelector,createReducer, on } from '@ngrx/store';
import { questions, votes } from 'src/app/Interfaces';
import * as answerActions from '../Actions/answerActions';

export interface answersInterface {
    Upvoting: votes[];
  addvotesuccess:string
  addvotefailure:string
  downvotesuccess:string
  downvotefailure:string
  setpreferredssuccess:string
  setprefferedfailure:string


}

const initialState: answersInterface = {
    Upvoting: [],
    addvotesuccess:'',
    addvotefailure:'',
    downvotesuccess:'',
    downvotefailure:'',
    setpreferredssuccess:'',
    setprefferedfailure:''

};



export const answerReducer = createReducer(
  initialState,
  on(answerActions.upVoteSuccess, (state, action):answersInterface =>{ 
    return{
        ...state,
        addvotefailure:'',
        addvotesuccess:action.message
    }
      }),
      on(answerActions.upVoteFailure, (state, action):answersInterface =>{ 
        return{
            ...state,
            addvotefailure:action.message,
            addvotesuccess:''
        }
          }),
    
      on(answerActions.downvoteSuccess , (state, action):answersInterface =>{
        return{
            ...state,
            downvotefailure:action.message,
            downvotesuccess:''
        }
          }),
          on(answerActions.downvoteFailure , (state, action):answersInterface =>{
            return{
                ...state,
                addvotefailure:action.message,
                downvotesuccess:''
            }
              }),

              on(answerActions.setPreferredAnswerSuccess , (state, action):answersInterface =>{
                return{
                    ...state,
                   setprefferedfailure:'',
                    setpreferredssuccess:action.message
                }
                  }),
                  on(answerActions.setPreferredAnswerFailure , (state, action):answersInterface =>{
                    return{
                        ...state,
                       setprefferedfailure:action.message,
                        setpreferredssuccess:''
                    }
                      })

          

)
        