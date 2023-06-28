import { HttpClient, HttpHeaders } from '@angular/common/http';
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

getUserById(userId: string):Observable<User[]>{
  let token = localStorage.getItem('token') as string                                   
  return this.http.delete<User[]>(`http://localhost:4000/users/${userId}`,{
    headers:new HttpHeaders().set('token',token)
  })
}

updateUser( newUser:NewUser):Observable<addUserSuccess>{
  let token = localStorage.getItem('token') as string
  console.log (token);
  return this.http.put<addUserSuccess>(`http://localhost:4000/users`,newUser,{
    headers:new HttpHeaders().set('token',token)
  })
}

}
