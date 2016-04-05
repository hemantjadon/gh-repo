import { Component,OnInit } from 'angular2/core';
import { RepoSearchService } from './repo-search.service';
import { HTTP_PROVIDERS } from 'angular2/http';

@Component({
	selector: 'repo-search',
	
	templateUrl: '/static/ng-main/app/templates/repo-search.html',
	
	providers: [RepoSearchService,HTTP_PROVIDERS]

})
export class RepoSearchComponent implements OnInit{
	constructor(
		private _repoSearchService: RepoSearchService
	){}
	
	private _searchTerm: string = "django";

	repoJson: any;
	
	private _httpError: string;
	
	private _getReops(){
		this._repoSearchService.getRepos(this._searchTerm)
								.subscribe(
									repo => this.repoJson=repo,
									error => this._httpError = <any>error
								);
	}
	
	ngOnInit(){
		this._getReops();
	}	
}