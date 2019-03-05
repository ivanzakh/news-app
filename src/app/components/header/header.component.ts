import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	animations: [
		trigger('slide', [
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
	visible = false;

	toggle() {
		this.visible = !this.visible;
	}

}
