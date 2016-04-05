import { Injectable } from 'angular2/core';
import { Http,Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RepoSearchService{
	constructor(
		private http: Http
	){}
	
	private handleError (error: Response) {
		// in a real world app, we may send the error to some remote logging infrastructure
		// instead of just logging it to the console
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
	
	getRepos(search_term: string){
		let search_url = "https://api.github.com/search/repositories?q="+search_term;
		return this.http.get(search_url)
						.map(response => response.json().items)
						.catch(this.handleError);
	}
}