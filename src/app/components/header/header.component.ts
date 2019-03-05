import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.styl'],
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
export class HeaderComponent implements OnInit {
	collapseExpanded = false;

	constructor() { }

	ngOnInit() {
	}

	toggleCollapse() {
		this.collapseExpanded = !this.collapseExpanded;
	}

}
