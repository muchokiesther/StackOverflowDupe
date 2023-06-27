import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as questionsActions from '../Actions/questionsActions';
import { catchError, map, mergeMap, of } from "rxjs";
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

}






  
