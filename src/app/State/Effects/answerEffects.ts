import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as answerActions from '../Actions/answerActions';
import { catchError, concatMap, map, mergeMap, of, switchMap } from "rxjs";
import { VotesService } from "src/app/services/votes.service";


@Injectable()
export class AnswerEffects {
  constructor(private action$: Actions, private voteService:VotesService) {}

  upVote$ = createEffect(() => {
    return this.action$.pipe(
      ofType(answerActions.upVote),
      concatMap(action => {
        return this.voteService.upVote(action.answerId ).pipe(
          map(m => answerActions.upVoteSuccess({ message: m.message })),
          catchError(error => of(answerActions.upVoteFailure({ message: error })))
        );
      })
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
      })
    );
  });

}
