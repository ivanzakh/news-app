import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-news-card',
	templateUrl: './news-card.component.html',
	styleUrls: ['./news-card.component.styl']
})
export class NewsCardComponent implements OnInit {
	@Input() card: string;

	constructor() { }

	ngOnInit() {
	}

}
