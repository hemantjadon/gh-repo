import { Component } from 'angular2/core';
import { RepoListComponent } from './repo-list.component';
import { RepoSearchComponent } from './repo-search.component';

@Component({
	selector: 'ng-app',
    templateUrl: '/static/ng-main/app/templates/app.component.html',
    directives:[RepoListComponent,RepoSearchComponent],
})

export class AppComponent{
    title: string = "Github Viewer";
    searchTerm: string;
}
