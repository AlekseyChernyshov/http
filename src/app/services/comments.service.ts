import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../interfaces/comment';
import { Observable, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getComments(): Observable<Comment[]> {
    const url = 'http://localhost:3000/comments'
    return this.http.get<Comment[]>(url)
  }

  getCommentByPostId(id: string): Observable<Comment[]> {
    const postId = Number(id);
    return this.getComments().pipe(map(comments => comments.filter(comment => comment.postId === postId)))
  }

  getCommentsByEmail(email: string): Observable<Comment[]> {
    return this.getComments().pipe(map(comments => comments.filter(comment => comment.email === email)))
  }
}
