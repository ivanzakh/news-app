import { Component } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.styl']
})
export class FooterComponent {
	scrollToTop(e) {
		e.preventDefault();
		window.scroll(0, 0);
	}
}
