import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserServiceService } from "src/app/services/user-service.service";
import * as UserActions from '../Actions/userActions'
import { catchError, map, mergeMap, of } from "rxjs";
@Injectable()

export class UserEffects{
constructor(private action$:Actions,  private userService:UserServiceService){}

getUsers$=createEffect(()=>{
    return this.action$.pipe(
        ofType(UserActions.GetUsers),
        mergeMap(() => {
            return this.userService.getUsers().pipe(
              map((Users) => {
                return UserActions.GetUsersSuccess({ Users })
              }),
              catchError((error) => of(UserActions.GetUsersFailure({errorMessage:error})))
            )
          })
    )
 
})

}






  
