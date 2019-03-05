import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { NewsListComponent } from './pages/news-list/news-list.component';
import { NewsDetailComponent } from './pages/news-detail/news-detail.component';

const routes: Routes = [
	{
		path: '',
		component: NewsListComponent
	},
	{
		path: 'detail/:id',
		component: NewsDetailComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
