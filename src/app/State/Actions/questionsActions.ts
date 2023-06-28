import {createAction, props} from '@ngrx/store'
import { NewQuestion, questions } from 'src/app/Interfaces'

 export const GetQuestions = createAction('[questions]-GetQuestion')
export const GetQuestionsSuccess = createAction('[questions]-GetquestionsSuccess',props<{Questions:questions[]}>())
export const GetQuestionsFailure = createAction('[questions]-GetquestionsFailure', props<{errorMessage:string}>())

export const Addquestion = createAction('[questions]-questions', props<{newquestion:NewQuestion}>())
export const AddquestionSuccess = createAction('[questions]-AddquestionsSuccess',props<{message:string}>())
export const AddquestionFailure = createAction('[questions]-AddquestionFailure', props<{message:string}>())

export const deletequestion = createAction('[questions]-deletequestion', props<{questionsId:string}>())
export const deletequestionSuccess = createAction('[questions]-deletequestionSuccess',props<{message:string}>())
export const deletequestionFailure = createAction('[questions]-deletequestionFailure', props<{message:string}>())
 