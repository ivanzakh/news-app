import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsListService } from 'src/app/services/news.service';
import { NewsItem } from '../../models/news-item';
import { NewsDetail } from '../../models/news-detail';

@Component({
	selector: 'app-news-detail',
	templateUrl: './news-detail.component.html',
	styleUrls: ['./news-detail.component.styl']
})
export class NewsDetailComponent {
	newsDetail: NewsDetail;
	relatedNews: NewsItem[];

	constructor(
		private newsService: NewsListService,
		private route: ActivatedRoute
	) {
		this.route.params.subscribe(({ id }) => {
			this.newsService.getRelatedNews(id).subscribe(data => this.relatedNews = data);
			this.newsService.getNewsDetail(id).subscribe(data => this.newsDetail = data);
		});
	}

}
