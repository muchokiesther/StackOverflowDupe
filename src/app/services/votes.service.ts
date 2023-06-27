import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { votes } from '../Interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VotesService {

  constructor(private http: HttpClient) { }

  upVote(answerId: string):Observable<votes []>{
    let token = localStorage.getItem('token') as string
    return this.http.post<votes[]>(`http://localhost:4000//votes/upvote/${answerId}`,{
      headers:new HttpHeaders().set('token',token)
    })
  }


  
  downVote(answerId: string):Observable<votes []>{
    let token = localStorage.getItem('token') as string
    return this.http.post<votes[]>(`http://localhost:4000//votes/downvote/${answerId}`,{
      headers:new HttpHeaders().set('token',token)
    })
  }





}
