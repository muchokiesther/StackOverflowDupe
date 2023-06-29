import {createAction, props} from '@ngrx/store'
import { votesSuccess } from 'src/app/Interfaces'



export const upVote = createAction('[answer]-Addupvote', props<{answerId:string}>())
export const upVoteSuccess = createAction('[answer]-upvoteSuccess',props<{message:string}>())
export const upVoteFailure = createAction('[answer]-upvoteFailure', props<{message:string}>())



export const downvote = createAction('[answer]-Adddownvote', props<{answerId:string}>())
export const downvoteSuccess = createAction('[answer]-AdddownvoteSuccess',props<{message:string}>())
export const downvoteFailure = createAction('[answer]-AdddownvoteFailure', props<{message:string}>())