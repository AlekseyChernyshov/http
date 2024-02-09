import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/post';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    const url = 'http://localhost:3000/posts'
    return this.http.get<Post[]>(url)
  }

  getPostById(id: string): Observable<Post | undefined> {
    return this.getPosts().pipe(map(posts => posts.find(post => String(post.id) == id)))
  }
}
