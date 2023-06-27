import {  createSelector,createFeatureSelector,createReducer, on } from '@ngrx/store';
import { questions } from 'src/app/Interfaces';
import * as questionsActions from '../Actions/questionsActions';

export interface QuestionsInterface {
  Questions: questions[];
  getQuestionError: string;
}

const initialState: QuestionsInterface = {
   Questions: [],
  getQuestionError: ''
};

//selectors
export const getQuestionState = createFeatureSelector<QuestionsInterface>('question')
export  const getQuestions = createSelector(getQuestionState,(state)=>state.Questions)
export const  getPropError = createSelector(getQuestionState,(state)=>state.getQuestionError)

export const questionsReducer = createReducer(
  initialState,
  on(questionsActions.GetQuestionsSuccess, (state, action):QuestionsInterface =>{ 
return{
    ...state,
    getQuestionError: '',
    Questions: action.Questions
}
  }),

  on(questionsActions.GetQuestionsFailure , (state, action):QuestionsInterface =>{
    return{
        ...state,
       getQuestionError: action.errorMessage ,
       Questions: []
    }
      })
  
 




)


 