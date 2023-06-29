import {
  createSelector,
  createFeatureSelector,
  createReducer,
  on,
} from '@ngrx/store';
import { questions } from 'src/app/Interfaces';
import * as questionsActions from '../Actions/questionsActions';

export interface QuestionsInterface {
  Questions: questions[];
  getQuestionError: string;
  getUserQuestionError:string;
updatequestionsuccess:string;
updatequestionfailure:string;
  addquestionssuccess: string;
  addquestionsfailure: string;
  deletequestionfailure: string;
  deletequestionsuccess: string;
  getuserquestionsByIdsuccess: string;
  getuserquestionsByIdfailure: string;
}

const initialState: QuestionsInterface = {
  Questions: [],
  getQuestionError: '',
  addquestionssuccess: '',
  addquestionsfailure: '',
  deletequestionfailure: '',
  deletequestionsuccess: '',
  getuserquestionsByIdsuccess: '',
  getuserquestionsByIdfailure: '',
  getUserQuestionError:'',
  updatequestionfailure:'',
  updatequestionsuccess:''

};

//selectors
export const getQuestionState =
  createFeatureSelector<QuestionsInterface>('question');
export const getQuestions = createSelector(
  getQuestionState,
  (state) => state.Questions
);
export const getPropError = createSelector(
  getQuestionState,
  (state) => state.getQuestionError
);

export const questionsReducer = createReducer(
  initialState,
  on(
    questionsActions.GetQuestionsSuccess,
    (state, action): QuestionsInterface => {
      return {
        ...state,
        getQuestionError: '',
        Questions: action.Questions,
      };
    }
  ),

  on(
    questionsActions.GetQuestionsFailure,
    (state, action): QuestionsInterface => {
      return {
        ...state,
        getQuestionError: action.errorMessage,
        Questions: [],
      };
    }
  ),
  on(
    questionsActions.AddquestionSuccess,
    (state, action): QuestionsInterface => {
      return {
        ...state,
        addquestionsfailure: '',
        addquestionssuccess: action.message,
      };
    }
  ),

  on(
    questionsActions.AddquestionFailure,
    (state, action): QuestionsInterface => {
      return {
        ...state,
        addquestionsfailure: action.message,
        addquestionssuccess: '',
      };
    }
  ),
  on(
    questionsActions.deletequestionSuccess,
    (state, action): QuestionsInterface => {
      return {
        ...state,
        deletequestionfailure: '',
        deletequestionsuccess: action.message,
      };
    }
  ),

  on(
    questionsActions.deletequestionFailure,
    (state, action): QuestionsInterface => {
      return {
        ...state,
        deletequestionfailure: action.message,
        deletequestionsuccess: '',
      };
    }
  ),

  on(
    questionsActions.GetUserQuestionsFailure,
    (state, action): QuestionsInterface => {
      return {
        ...state,
        getuserquestionsByIdsuccess: ''
      };
    }
  ),

  on(
    questionsActions.GetUserQuestionsSuccess,
    (state, action): QuestionsInterface => {
      return {
        ...state,
        Questions:action.Questions,
   
      }
    }
  ),
  on(questionsActions.UpdatequestionSuccess , (state, action):QuestionsInterface =>{
    return{
        ...state,
     updatequestionfailure:'',
     updatequestionsuccess:action.message
    }
      }),

      on(questionsActions.UpdatequestionFailure , (state, action):QuestionsInterface =>{
        return{
            ...state,
         updatequestionsuccess:'',
         updatequestionfailure:action.message
        }
          })








  
)
