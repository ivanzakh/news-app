import { Component } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { NewsCard } from '../../models/news-card';

@Component({
	selector: 'app-main-page',
	templateUrl: './main-page.component.html',
})
export class MainPageComponent {
	news: NewsCard[] = [];

	constructor(
		private newsService: NewsService
	) {
		this.getNews();
	}

	getNews() {
		this.newsService.getNews().subscribe(data => this.news = data);
	}
}
