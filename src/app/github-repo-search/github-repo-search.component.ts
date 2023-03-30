import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface GitHubApiResponse {
  items: Repo[];
}

export interface Repo {
  name: string;
  html_url: string;
  description: string;
  owner: {
    login: string;
    html_url: string;
  };
}

@Component({
  selector: 'app-github-repo-search',
  templateUrl: './github-repo-search.component.html',
  styleUrls: ['./github-repo-search.component.css']
})
export class GithubRepoSearchComponent {
  searchTerm = '';
  repos: Repo[] = [];

  constructor(private http: HttpClient) {}

  search() {
    const url = `https://api.github.com/search/repositories?q=${this.searchTerm}`;
    this.http.get<GitHubApiResponse>(url).subscribe(response => {
      this.repos = response.items;
    });
  }
}