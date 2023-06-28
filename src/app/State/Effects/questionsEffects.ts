import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as questionsActions from '../Actions/questionsActions';
import { catchError, concatMap, map, mergeMap, of, switchMap } from "rxjs";
import { QuestionsService } from "src/app/services/questions.service";
@Injectable()

export class QuestionsEffects{
constructor(private action$:Actions,  private questionsService:QuestionsService){}

getQuestions$=createEffect(()=>{
    return this.action$.pipe(
        ofType(questionsActions.GetQuestions),
        mergeMap(() => {
            return this.questionsService.getQuestions().pipe(
              map((Questions) => {
                return questionsActions.GetQuestionsSuccess({Questions})
              }),
              catchError((error) => of(questionsActions.GetQuestionsFailure({errorMessage:error})))
            )
          })
    )
 
})


addQuestion$ =createEffect(()=>{
  return this.action$.pipe(
      ofType(questionsActions.Addquestion),
      concatMap(action=>{
          return this.questionsService. addQuestion(action.newquestion).pipe(
              map(m=>questionsActions.AddquestionSuccess({message:m.message})),
              catchError(error=>of(questionsActions.AddquestionFailure({message:error})))
          )
      }),

      

  )
})





deletQuestion$ = createEffect(() => {
  return this.action$.pipe(
    ofType(questionsActions.deletequestion),
    mergeMap(action => {
      return this.questionsService. deleteQuestion(action.questionsId).pipe(
        map(message => questionsActions.deletequestionSuccess({ message: message.message })),
        catchError(error => of(questionsActions.deletequestionFailure({ message: error })))
      );
    }),
    // REFRESH BEHAVIOR:
    switchMap(() => of(questionsActions.GetQuestions()))
  );
});

}






  
