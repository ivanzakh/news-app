import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { NewsCard } from '../../models/news-card';
import { Detail } from '../../models/detail';

@Component({
	selector: 'app-detail-page',
	templateUrl: './detail-page.component.html',
})
export class DetailPageComponent {
	detail: Detail;
	related: NewsCard[];

	constructor(
		private newsService: NewsService,
		private route: ActivatedRoute
	) {
		this.route.params.subscribe(({ id }) => {
			this.newsService.getRelated(id).subscribe(data => this.related = data);
			this.newsService.getDetail(id).subscribe(data => this.detail = data);
		});
	}

}
