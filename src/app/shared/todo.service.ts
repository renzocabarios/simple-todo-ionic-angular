import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHttpResponse, ITodo } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  url = 'https://api-simple-todo.onrender.com/api/v1/todo/';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<IHttpResponse<ITodo>> {
    return this.http.get<IHttpResponse<ITodo>>(this.url).pipe();
  }

  deleteTodo(id: string): Observable<IHttpResponse<ITodo>> {
    return this.http
      .delete<IHttpResponse<ITodo>>(`${this.url}${id}`, this.httpOptions)
      .pipe();
  }

  addTodo(song: ITodo): Observable<IHttpResponse<ITodo>> {
    return this.http
      .post<IHttpResponse<ITodo>>(this.url, song, this.httpOptions)
      .pipe();
  }

  getTodoById(id: string): Observable<IHttpResponse<ITodo>> {
    return this.http.get<IHttpResponse<ITodo>>(`${this.url}${id}`).pipe();
  }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(error);
  //     console.log(`${operation} failed: ${error.message}`);
  //     return of(result as T);
  //   };
  // }
}
