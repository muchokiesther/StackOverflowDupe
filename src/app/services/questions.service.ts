import { Injectable } from '@angular/core';
import { NewQuestion, addQuestionSuccess, questions } from '../Interfaces';
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


 deleteQuestion(questionsId: string):Observable<addQuestionSuccess>{
    let token = localStorage.getItem('token') as string
    return this.http.delete<addQuestionSuccess>(`http://localhost:4000/questions/${questionsId}`,{
      headers:new HttpHeaders().set('token',token)
    })
  }


    addQuestion( newQuestion:NewQuestion):Observable<addQuestionSuccess>{
      let token = localStorage.getItem('token') as string
      console.log (newQuestion);
      return this.http.post<addQuestionSuccess>(`http://localhost:4000/questions`,newQuestion,{
        headers:new HttpHeaders().set('token',token)
      })
    }

    updateQuestion(newQuestion: NewQuestion, questionsId: string): Observable<addQuestionSuccess> {
      let token = localStorage.getItem('token') as string;
      console.log(newQuestion);
      return this.http.post<addQuestionSuccess>(`http://localhost:4000/questions/${questionsId}`, newQuestion, {
        headers: new HttpHeaders().set('token', token)
      });
    }

   
      getOneQuestion(questionsId:string):Observable<questions>{
        let token = localStorage.getItem('token') as string
        return this.http.get<questions>(`http://localhost:4000/questions/${questionsId}`,{
          headers:new HttpHeaders().set('token',token)
        })
      }
    }
    

  





