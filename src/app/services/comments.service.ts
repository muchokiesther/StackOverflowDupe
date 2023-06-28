import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { comments } from '../Interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  addComment(questionsId: string,body:string, answerId:string){
    let token = localStorage.getItem('token') as string
    return this.http.post< comments[]>(`http://localhost:4000/comments/${questionsId}/${answerId}`,{body} , {
      headers:new HttpHeaders().set('token',token)
    })
  }

  getComments(answerId:string):Observable< comments []>{
    let token = localStorage.getItem('token') as string
    return this.http.get< comments[]>(`http://localhost:4000/comments/${answerId}`,{
      headers:new HttpHeaders().set('token',token)
    })
  }

}
