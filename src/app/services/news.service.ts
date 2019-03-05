import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsItem } from '../models/news-item';
import { NewsDetail } from '../models/news-detail';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class NewsService {

	constructor(private http: HttpClient) { }

	getNews(): Observable<NewsItem[]> {
		return this.http.get<NewsItem[]>(environment.BASE_URL + 'get-news');
	}

	getRelatedNews(newsId): Observable<NewsItem[]> {
		return this.http.get<NewsItem[]>(environment.BASE_URL + 'get-related-news', { params: { news_id: newsId.toString() } });
	}

	getNewsDetail(newsId): Observable<NewsDetail> {
		return this.http.get<NewsDetail>(environment.BASE_URL + 'get-news-detail', { params: { news_id: newsId.toString() } });
	}
}
