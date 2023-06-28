import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { answers } from '../Interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {

  constructor(private http: HttpClient) { }

  addAnswer(questionsId: string, body:string):Observable<answers []>{
    let token = localStorage.getItem('token') as string
    return this.http.post<answers[]>(`http://localhost:4000/answer/${questionsId}`,body,{
      headers:new HttpHeaders().set('token',token)
    })
  }

  setPreferred(answerId: string):Observable<answers []>{
    let token = localStorage.getItem('token') as string
    return this.http.post<answers[]>(`http://localhost:4000/answer/${answerId}`,{
      headers:new HttpHeaders().set('token',token)
    })
  }


  getAnswersByQuestionId(questionsId: string): Observable<answers[]> {
    let token = localStorage.getItem('token') as string
    return this.http.get<answers[]>(`http://localhost:4000/answer/${questionsId}`,{
      headers:new HttpHeaders().set('token',token)
    });
  }






}
