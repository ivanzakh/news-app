import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
})
export class AppComponent {
	title = 'news-app';

	onActivate() {
		window.scroll(0, 0);
	}
}
