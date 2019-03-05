import { Component } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { NewsItem } from '../../models/news-item';

@Component({
	selector: 'app-news-list',
	templateUrl: './news-list.component.html',
})
export class NewsListComponent {
	news: NewsItem[] = [];

	constructor(
		private newsService: NewsService
	) {
		this.getNews();
	}

	getNews() {
		this.newsService.getNews().subscribe(data => this.news = data);
	}
}
