import { Component } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.styl']
})
export class FooterComponent {
	scrollToTop(e) {
		e.preventDefault();
		window.scroll({top: 0, behavior: 'smooth'});
	}
}
