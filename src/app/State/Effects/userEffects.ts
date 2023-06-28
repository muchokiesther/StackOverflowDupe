import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserServiceService } from "src/app/services/user-service.service";
import * as UserActions from '../Actions/userActions'
import { catchError, concatMap, map, mergeMap, of, switchMap } from "rxjs";
import { Route, Router } from '@angular/router';
@Injectable()

export class UserEffects{
constructor(private action$:Actions,  private userService:UserServiceService,private router:Router ){}

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


addUser$ = createEffect(()=>{
  return this.action$.pipe(
    ofType(UserActions.Addusers ),
    concatMap(action=>{
        return this.userService.addUser(action.newUser).pipe(
            map(message=>UserActions.AddusersSuccess({message:message.message})),
            catchError(error=>of(UserActions.AddusersFailure({message:error})))
        )
    }),

    //REFRESH BEHAVIOUR:
    // switchMap(()=>[UserActions.GetUsers()]))
  )
})


updateProperty$ = createEffect(()=>{
return this.action$.pipe(
  ofType(UserActions.Updateusers),
  mergeMap(action=>{
    return this.userService.updateUser(action.updatedUser).pipe(
      map(message=>UserActions.UpdateusersSuccess ({message:message.message})),
      catchError(error=>of(UserActions.UpdateusersFailure({message:error})))
    )
  }),
  
    //REFRESH BEHAVIOUR:
    // switchMap(() => of(UserActions.Updateusers()))

)
}) 

loginUser$ = createEffect(() => {
  return this.action$.pipe(
    ofType(UserActions.Userlogin),
    mergeMap(action => {
      return this.userService.loginUser(action.user).pipe( 
        map((res) => {
          console.log(res);
          localStorage.setItem('token', res.token);
          localStorage.setItem('role', res.role);
          localStorage.setItem('username', res.username);
          if (res.role === 'user') {
            this.router.navigateByUrl('/home');
          } else {
            this.router.navigateByUrl('/adminusers');
          }
          return UserActions.UserloginSuccess({ message: res.message });
        }),
        catchError((error: any) => of(UserActions.UserloginFailure({ message: error })))
      )
    })
  )
})

deleteUser$ = createEffect(() => {
  return this.action$.pipe(
    ofType(UserActions.deleteuser),
    mergeMap(action => {
      return this.userService.getUserById(action.userId).pipe(
        map(message => UserActions.deleteuserSuccess({ message: message.message })),
        catchError(error => of(UserActions.deleteuserFailure({ message: error })))
      );
    }),
    // REFRESH BEHAVIOR:
    switchMap(() => of(UserActions.GetUsers()))
  );
});





}






  
