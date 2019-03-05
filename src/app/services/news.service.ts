import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsCard } from '../models/news-card';
import { Detail } from '../models/detail';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class NewsService {

	constructor(private http: HttpClient) { }

	getNews(): Observable<NewsCard[]> {
		return this.http.get<NewsCard[]>(environment.rootUrl + 'get-news');
	}

	getRelated(id): Observable<NewsCard[]> {
		return this.http.get<NewsCard[]>(environment.rootUrl + 'get-related', { params: { id: id.toString() } });
	}

	getDetail(id): Observable<Detail> {
		return this.http.get<Detail>(environment.rootUrl + 'get-detail', { params: { id: id.toString() } });
	}
}
