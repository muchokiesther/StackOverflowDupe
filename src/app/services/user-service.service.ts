import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser, LoginUserSuccess, NewUser, User, addUserSuccess } from '../Interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
addUser(newUser:NewUser):Observable<addUserSuccess>{
  return this.http.post<addUserSuccess>('http://localhost:4000/users',newUser)
}

loginUser(loginUser:LoginUser):Observable<LoginUserSuccess>{
  return this.http.post<LoginUserSuccess>('http://localhost:4000/users/login',loginUser)
}

getUsers():Observable<User[]>{
  return this.http.get<User[]>('http://localhost:4000/users')
}

}
