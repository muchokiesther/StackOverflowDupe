import { Injectable } from '@angular/core';
import { questions } from '../Interfaces';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<questions[]> {
    let token = localStorage.getItem('token') as string
    return this.http.get<questions[]>('http://localhost:4000/questions',{
      headers:new HttpHeaders().set('token',token)
    });
  }


 deleteQuestion(questionsId: string):Observable<questions[]>{
    let token = localStorage.getItem('token') as string
    return this.http.delete<questions[]>(`http://localhost:4000/questions/${questionsId}`,{
      headers:new HttpHeaders().set('token',token)
    })
  }



}

