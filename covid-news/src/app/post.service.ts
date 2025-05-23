import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostService {
  private baseUrl = 'https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/post';

  constructor(private http: HttpClient) {}

  createPost(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, data);
  }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getPost(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
}
