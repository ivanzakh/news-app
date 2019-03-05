import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	animations: [
		trigger('collapseAnimation', [
			state('void', style({
				height: '0px',
				overflow: 'hidden'
			})),
			state('*', style({
				height: '*'
			})),

			transition('void <=> *', animate('200ms ease-in'))
		])
	]
})
export class HeaderComponent {
	collapseExpanded = false;

	toggleCollapse() {
		this.collapseExpanded = !this.collapseExpanded;
	}

}
