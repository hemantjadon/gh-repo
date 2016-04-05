System.register(['angular2/core', './repo-search.service', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, repo_search_service_1, http_1;
    var RepoSearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (repo_search_service_1_1) {
                repo_search_service_1 = repo_search_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            RepoSearchComponent = (function () {
                function RepoSearchComponent(_repoSearchService) {
                    this._repoSearchService = _repoSearchService;
                    this._searchTerm = "django";
                }
                RepoSearchComponent.prototype._getReops = function () {
                    var _this = this;
                    this._repoSearchService.getRepos(this._searchTerm)
                        .subscribe(function (repo) { return _this.repoJson = repo; }, function (error) { return _this._httpError = error; });
                };
                RepoSearchComponent.prototype.ngOnInit = function () {
                    this._getReops();
                };
                RepoSearchComponent = __decorate([
                    core_1.Component({
                        selector: 'repo-search',
                        templateUrl: '/static/ng-main/app/templates/repo-search.html',
                        providers: [repo_search_service_1.RepoSearchService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [repo_search_service_1.RepoSearchService])
                ], RepoSearchComponent);
                return RepoSearchComponent;
            }());
            exports_1("RepoSearchComponent", RepoSearchComponent);
        }
    }
});
