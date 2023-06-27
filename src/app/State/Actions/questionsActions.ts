import {createAction, props} from '@ngrx/store'
import { questions } from 'src/app/Interfaces'

 export const GetQuestions = createAction('[questions]-GetUser')
export const GetQuestionsSuccess = createAction('[questions]-GetquestionsSuccess',props<{Questions:questions[]}>())

 export const GetQuestionsFailure = createAction('[questions]-GetquestionsFailure', props<{errorMessage:string}>())
 