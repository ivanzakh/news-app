import { Component, OnInit } from '@angular/core';
import { NewsListService } from 'src/app/services/news.service';
import { NewsItem } from '../../models/news-item';

@Component({
	selector: 'app-news-list',
	templateUrl: './news-list.component.html',
	styleUrls: ['./news-list.component.styl']
})
export class NewsListComponent implements OnInit {
	news: NewsItem[] = [];

	constructor(
		private newsService: NewsListService
	) { }

	ngOnInit() {
		this.getNews();
	}

	getNews() {
		this.newsService.getNews().subscribe(data => this.news = data);
	}
}
