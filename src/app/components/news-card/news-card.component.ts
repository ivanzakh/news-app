import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-news-card',
	templateUrl: './news-card.component.html',
})
export class NewsCardComponent {
	@Input() card: string;
}
