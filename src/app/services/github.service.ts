import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  searchRepositories(query: string): Observable<any> {
    const url = `${this.apiUrl}/search/repositories?q=${query}`;
    return this.http.get(url);
  }

  getRepositoryDetails(repoName: string, ownerName: string): Observable<any> {
    const url = `${this.apiUrl}/repos/${ownerName}/${repoName}`;
    return this.http.get(url);
  }
}