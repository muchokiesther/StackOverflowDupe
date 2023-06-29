import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as answerActions from '../Actions/answerActions';
import { catchError, concatMap, map, mergeMap, of, switchMap, tap } from "rxjs";
import { VotesService } from "src/app/services/votes.service";
import { AnswersService } from "src/app/services/answers.service";


@Injectable()
export class AnswerEffects {
  constructor(private action$: Actions, private voteService:VotesService, private answerService:AnswersService) {}

  upVote$ = createEffect(() => {
    return this.action$.pipe(
      ofType(answerActions.upVote),
      concatMap(action => {
        return this.voteService.upVote(action.answerId ).pipe(
          map(m => answerActions.upVoteSuccess({ message: m.message })),
          catchError(error => of(answerActions.upVoteFailure({ message: error })))
        );
      }),
      tap(() => window.location.reload()) // Refresh the page
    );
  });

  downVote$ = createEffect(() => {
    return this.action$.pipe(
      ofType(answerActions.downvote),
      concatMap(action => {
        return this.voteService.downVote(action.answerId ).pipe(
          map(m => answerActions.downvoteSuccess({ message: m.message })),
          catchError(error => of(answerActions.downvoteFailure({ message: error })))
        );
      }),
      tap(() => window.location.reload())
    );
  });

  setPreferred$ = createEffect(()=>{
    return this.action$.pipe(
      ofType(answerActions.setPreferredAnswer),
      concatMap(action => {
        return this.answerService.setPreferred(action.answerId ).pipe(
          map(m => answerActions.setPreferredAnswerSuccess({ message: m.message })),
          catchError(error => of(answerActions.setPreferredAnswerFailure({ message: error })))
        );
      })
      
    );
  })

}
