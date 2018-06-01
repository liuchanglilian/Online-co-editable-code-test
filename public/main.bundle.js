webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app not work';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var problem_list_component_1 = __webpack_require__("./src/app/components/problem-list/problem-list.component.ts");
var problem_detail_component_1 = __webpack_require__("./src/app/components/problem-detail/problem-detail.component.ts");
var data_service_1 = __webpack_require__("./src/app/services/data.service.ts");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var auth_guard_service_1 = __webpack_require__("./src/app/services/auth-guard.service.ts");
var input_service_1 = __webpack_require__("./src/app/services/input.service.ts");
var collaboration_service_1 = __webpack_require__("./src/app/services/collaboration.service.ts");
var app_routes_1 = __webpack_require__("./src/app/app.routes.ts");
var new_problem_component_1 = __webpack_require__("./src/app/components/new-problem/new-problem.component.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var navbar_component_1 = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var profile_component_1 = __webpack_require__("./src/app/components/profile/profile.component.ts");
var editor_component_1 = __webpack_require__("./src/app/components/editor/editor.component.ts");
var search_pipe_1 = __webpack_require__("./src/app/pipes/search.pipe.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                problem_list_component_1.ProblemListComponent,
                profile_component_1.ProfileComponent,
                problem_detail_component_1.ProblemDetailComponent,
                new_problem_component_1.NewProblemComponent,
                navbar_component_1.NavbarComponent,
                editor_component_1.EditorComponent,
                search_pipe_1.SearchPipe
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routes_1.routing,
                forms_1.FormsModule,
                http_1.HttpModule,
                forms_1.ReactiveFormsModule
            ],
            providers: [{
                    provide: 'data',
                    useClass: data_service_1.DataService
                },
                {
                    provide: 'auth',
                    useClass: auth_service_1.AuthService
                },
                {
                    provide: 'authGuard',
                    useClass: auth_guard_service_1.AuthGuardService
                },
                {
                    provide: 'collaboration',
                    useClass: collaboration_service_1.CollaborationService
                },
                {
                    provide: 'input',
                    useClass: input_service_1.InputService
                }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var problem_list_component_1 = __webpack_require__("./src/app/components/problem-list/problem-list.component.ts");
var problem_detail_component_1 = __webpack_require__("./src/app/components/problem-detail/problem-detail.component.ts");
var profile_component_1 = __webpack_require__("./src/app/components/profile/profile.component.ts");
//import { AuthGuardService } from './services/auth-guard.service'
var routes = [
    {
        path: '',
        redirectTo: 'problems',
        pathMatch: 'full'
    },
    {
        path: 'problems',
        component: problem_list_component_1.ProblemListComponent
    },
    {
        path: 'problems/:id',
        component: problem_detail_component_1.ProblemDetailComponent
    },
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent,
        canActivate: ['authGuard']
    },
    {
        path: '**',
        redirectTo: 'problems'
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);


/***/ }),

/***/ "./src/app/components/editor/editor.component.css":
/***/ (function(module, exports) {

module.exports = "@media screen {\n  #editor {\n    height: 600px;\n  }\n  .lang-select {\n    width: 100px;\n    margin-right: 10px;\n  }\n  header .btn {\n    margin: 0 5px;\n  }\n  footer .btn {\n    margin: 0 5px;\n  }\n  .editor-footer, .editor-header {\n    margin: 10px 0;\n  }\n  .cursor {\n    /*position:absolute;*/\n    background: rgba(0, 250, 0, 0.5);\n    z-index: 40;\n    width: 2px!important\n  }\n}\n"

/***/ }),

/***/ "./src/app/components/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <header>\n    <select class=\"form-control pull-left lang-select\" id=\"language\"\n            name=\"language\"\n            [(ngModel)]=\"language\"\n            (change)=\"setLanguage(language)\"\n    >\n      <option *ngFor=\"let language of languages\"\n              [value]=\"language\">\n        {{language}}\n      </option>\n    </select>\n    <button type=\"button\" class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#myModal\">\n      <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span>\n    </button>\n    <!-- Modal -->\n    <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h1 class=\"modal-title\" id=\"exampleModalLabel\">Reset?</h1>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            Are you sure? Are you okay?\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\"\n                    (click)=\"resetEditor()\">Reset</button>\n            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Cancel</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n\n  <div class=\"row\">\n    <div id=\"editor\">\n    </div>\n  </div>\n\n  <div class=\"row\">\n    {{output}}\n  </div>\n  <footer>\n    <button type=\"button\" class=\"btn btn-success pull-right\" (click)=\"submit()\">\n      Submit Solution\n    </button>\n  </footer>\n</section>\n"

/***/ }),

/***/ "./src/app/components/editor/editor.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var EditorComponent = /** @class */ (function () {
    function EditorComponent(collaboration, data, route) {
        this.collaboration = collaboration;
        this.data = data;
        this.route = route;
        this.languages = ['Java', 'C++', 'Python'];
        this.language = 'Java';
        this.defaultContent = {
            'Java': "public class Example {\npublic static void main(String[] args) {\n    // Type your Java code here\n    }\n}",
            'C++': "#include <iostream>\nusing namespace std;\nint main() {\n  // Type your C++ code here\n  return 0;\n}",
            'Python': "class Solution:\n   def example():\n       # Write your Python code here"
        };
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.sessionId = params['id'];
            _this.initEditor();
        });
    };
    EditorComponent.prototype.initEditor = function () {
        var _this = this;
        this.editor = ace.edit('editor');
        this.editor.setTheme("ace/theme/eclipse");
        this.resetEditor();
        this.editor.$blockScrolling = Infinity;
        document.getElementsByTagName('textarea')[0].focus();
        this.collaboration.init(this.editor, this.sessionId);
        this.editor.on('change', function (e) {
            //console.log("here last appliedCHanged"+ this.editor.lastAppliJSedChange);
            console.group('e');
            console.log(JSON.stringify(e));
            console.groupEnd();
            if (!_this.editor.shouldIgnore) {
                // console.log("e"+JSON.stringify(e)+","+"lastappliedchange"+this.editor.lastAppliedChange);
                _this.collaboration.change(JSON.stringify(e));
            }
        });
        this.editor.getSession().getSelection().on("changeCursor", function () {
            var cursor = _this.editor.getSession().getSelection().getCursor();
            console.log('cursor moves:' + JSON.stringify(cursor));
            _this.collaboration.cursorMove(JSON.stringify(cursor));
        });
        this.collaboration.restoreBuffer();
    };
    EditorComponent.prototype.setLanguage = function (language) {
        this.language = language;
        this.resetEditor();
    };
    EditorComponent.prototype.resetEditor = function () {
        this.editor.session.setMode('ace/mode/' + this.language.toLowerCase());
        this.editor.setValue(this.defaultContent[this.language]);
        this.output = '';
    };
    EditorComponent.prototype.submit = function () {
        var _this = this;
        var userCode = this.editor.getValue();
        var data = {
            user_code: userCode,
            lang: this.language.toLowerCase()
        };
        this.data.buildAndRun(data)
            .then(function (res) { return _this.output = res.text; });
        console.log(userCode);
    };
    EditorComponent = __decorate([
        core_1.Component({
            selector: 'app-editor',
            template: __webpack_require__("./src/app/components/editor/editor.component.html"),
            styles: [__webpack_require__("./src/app/components/editor/editor.component.css")]
        }),
        __param(0, core_1.Inject('collaboration')),
        __param(1, core_1.Inject('data')),
        __metadata("design:paramtypes", [Object, Object, router_1.ActivatedRoute])
    ], EditorComponent);
    return EditorComponent;
}());
exports.EditorComponent = EditorComponent;


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div clas=\"container\">\n  <nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n       <form class=\"navbar-form navbar-left\" (ngSubmit)=\"searchProblem()\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search Problem\" [formControl]=\"searchBox\">\n          </div>\n           </form>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li>\n            <form class=\"navbar-form\">\n            <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"!auth.isAuthenticated()\" (click)=\"login()\">Sign in</button>\n            </form>\n          </li>\n          <li class=\"dropdown\" *ngIf=\"auth.isAuthenticated()\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{getUsername()}} <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n              <li><a routerLink=\"/profile\">My profile</a></li>\n              <li><a href=\"#\">My favourites</a></li>\n              <li><a href=\"#\">My Submissions</a></li>\n              <li role=\"separator\" class=\"divider\"></li>\n              <li><a href=\"#\" (click)=\"logout()\">Log Out</a></li>\n            </ul>\n          </li>\n        </ul>\n      </div><!-- /.navbar-collapse -->\n    </div><!-- /.container-fluid -->\n  </nav>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth, input, router) {
        this.auth = auth;
        this.input = input;
        this.router = router;
        this.title = 'COJ';
        this.username = "";
        this.searchBox = new forms_1.FormControl();
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("I am here");
        /* if(this.auth.authenticated()){
           this.username = this.auth.getProfile().nickname;
           }*/
        if (this.auth.isAuthenticated()) {
            console.log("hihihi");
            this.username = this.auth.getProfile().nickname;
            console.log("nick name" + this.username);
        }
        else {
            console.log("not authenticated");
        }
        this.subscription = this.searchBox
            .valueChanges
            .debounceTime(1000)
            .subscribe(function (term) {
            _this.input.changeInput(term);
        });
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    NavbarComponent.prototype.searchProblem = function () {
        this.router.navigate(['/problems']);
    };
    NavbarComponent.prototype.getUsername = function () {
        if (this.auth.isAuthenticated()) {
            return this.auth.getProfile().nickname;
        }
        return null;
    };
    NavbarComponent.prototype.login = function () {
        console.log("I am logging");
        this.auth.login();
    };
    NavbarComponent.prototype.logout = function () {
        this.auth.logout();
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __param(0, core_1.Inject('auth')),
        __param(1, core_1.Inject('input')),
        __metadata("design:paramtypes", [Object, Object, router_1.Router])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"authGuard.isAdmin()\">\n <form #formRef=\"ngForm\">\n  <div class=\"form-group\">\n   <label for=\"problemName\">\n     Problem Name\n   </label>\n   <input type=\"text\" class=\"form-control\" id=\"problemName\" name=\"problemName\" required placeholder=\"Enter Problem Name\"\n   [(ngModel)]=\"newProblem.name\" />\n  </div>\n\n  <div class=\"form-group\">\n   <label for=\"problemDesc\">\n     Problem Description\n   </label>\n   <textarea type=\"text\" row=\"3\" class=\"form-control\" id=\"problemDesc\" name=\"problemDesc\" required placeholder=\"Enter Problem Description\"\n   [(ngModel)]=\"newProblem.desc\"></textarea>\n  </div>\n\n  <div class=\"form-group\">\n   <label for=\"difficulty\">\n     Difficulty\n   </label>\n   <select class=\"form-control\" id=\"difficulty\" name=\"difficulty\" required\n   [(ngModel)]=\"newProblem.difficulty\">\n   <option *ngFor=\"let difficulty of difficulties\" [value]= \"difficulty\">\n      {{difficulty}}\n   </option>\n   </select>\n  </div>\n <div class=\"row\">\n   <div class=\"col-md-12\">\n     <button type=\"submit\" class=\"btn btn-primary pull-right\" (click)=\"addProblem()\">Add Problem</button>\n   </div>\n </div>\n</form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var DEFAULT_PROBLEM = Object.freeze({
    id: 0,
    name: "",
    desc: "",
    difficulty: "Easy"
});
var NewProblemComponent = /** @class */ (function () {
    function NewProblemComponent(data, authGuard) {
        this.data = data;
        this.authGuard = authGuard;
        this.difficulties = ["Easy", "Medium", "Hard", "Super"];
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
    }
    NewProblemComponent.prototype.ngOnInit = function () {
    };
    NewProblemComponent.prototype.addProblem = function () {
        this.data.addProblem(this.newProblem)
            .catch(function (error) { return console.log(error.body); });
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
    };
    NewProblemComponent = __decorate([
        core_1.Component({
            selector: 'app-new-problem',
            template: __webpack_require__("./src/app/components/new-problem/new-problem.component.html"),
            styles: [__webpack_require__("./src/app/components/new-problem/new-problem.component.css")]
        }),
        __param(0, core_1.Inject("data")),
        __param(1, core_1.Inject("authGuard")),
        __metadata("design:paramtypes", [Object, Object])
    ], NewProblemComponent);
    return NewProblemComponent;
}());
exports.NewProblemComponent = NewProblemComponent;


/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"problem\">\n  <div class=\"col-xs-12 col-md-4\">\n       <div>\n         <h2>{{problem.id}},{{problem.name}} </h2>\n         <p>\n           {{problem.desc}}\n         </p><br/>\n       </div>\n  </div>\n  <div class=\"hidden-xs col-sm-12 col-md-8\">\n    <app-editor></app-editor>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ProblemDetailComponent = /** @class */ (function () {
    function ProblemDetailComponent(route, data) {
        this.route = route;
        this.data = data;
    }
    ProblemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // once the url change, then this function is called
        this.route.params.subscribe(function (params) {
            _this.data.getProblem(+params['id'])
                .then(function (problem) { return _this.problem = problem; });
        });
    };
    ProblemDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-problem-detail',
            template: __webpack_require__("./src/app/components/problem-detail/problem-detail.component.html"),
            styles: [__webpack_require__("./src/app/components/problem-detail/problem-detail.component.css")]
        }),
        __param(1, core_1.Inject('data')),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, Object])
    ], ProblemDetailComponent);
    return ProblemDetailComponent;
}());
exports.ProblemDetailComponent = ProblemDetailComponent;


/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.css":
/***/ (function(module, exports) {

module.exports = ".difficulty {\n  min-width: 65px;\n  margin-right: 10px;\n}\n\n.label.difficulty {\n  padding-top: 0.6em;\n  color: #fbfdfa;\n  font-size: 12px;\n}\n\n.title {\n  font-size: 1.2em;\n}\n\n.diff-easy {\n  background-color: #42ebf4;\n}\n\n.diff-medium {\n  background-color: #92cf5c;\n}\n\n.diff-hard {\n  background-color: #dd0d1e;\n}\n\n.diff-super {\n  background-color: #8d16e2;\n}\n"

/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <app-new-problem></app-new-problem>\n  <div> My birthday is {{birthday | date:'fullDate' |uppercase }}</div>\n  <div> My account balance is {{ money | currency}}</div>\n  <div> My credit card {{ Apr | percent }}</div>\n\n  <div class=\"list-group\">\n    <a class=\"list-group-item\" *ngFor=\"let problem of problems |search: searchTerm\" [routerLink]=\"['/problems',problem.id]\"\n    >\n      <span class=\"{{'pull-left label difficulty diff-'+problem.difficulty.toLowerCase()}}\">{{problem.difficulty | uppercase}}</span>\n      <strong class=\"title\">{{problem.id}}. {{problem.name}}</strong>\n\n    </a>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ProblemListComponent = /** @class */ (function () {
    function ProblemListComponent(data, input) {
        this.data = data;
        this.input = input;
        this.problems = [];
        this.birthday = new Date();
        this.money = 25;
        this.Apr = 0.21;
        this.searchTerm = '';
    }
    ProblemListComponent.prototype.ngOnInit = function () {
        this.getProblems();
        this.getSearchTerm();
    };
    ProblemListComponent.prototype.getProblems = function () {
        var _this = this;
        //need be destroyed after ngdestory to prevent memory leak
        this.subscriptionProblems = this.data.getProblems()
            .subscribe(function (problems) { return _this.problems = problems; });
    };
    ProblemListComponent.prototype.getSearchTerm = function () {
        var _this = this;
        this.subscriptionInput = this.input.getInput()
            .subscribe(function (inputTerm) { return _this.searchTerm = inputTerm; });
    };
    ProblemListComponent = __decorate([
        core_1.Component({
            selector: 'app-problem-list',
            template: __webpack_require__("./src/app/components/problem-list/problem-list.component.html"),
            styles: [__webpack_require__("./src/app/components/problem-list/problem-list.component.css")]
        }),
        __param(0, core_1.Inject('data')),
        __param(1, core_1.Inject("input")),
        __metadata("design:paramtypes", [Object, Object])
    ], ProblemListComponent);
    return ProblemListComponent;
}());
exports.ProblemListComponent = ProblemListComponent;


/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Nav pills -->\n<div class=\"container\">\n<ul class=\"nav nav-pills\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link active\" data-toggle=\"pill\" href=\"#profile\">Personal Information</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" data-toggle=\"pill\" href=\"#password\">Change Password</a>\n  </li>\n</ul>\n\n<!-- Tab panes -->\n<div class=\"tab-content\">\n  <div class=\"tab-pane container active\" id=\"profile\">\n    <div class=\"form-group\">\n      <label for=\"email\">\n        Email\n      </label>\n      <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\"\n            value=\"{{email}}\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"nickname\">\n        Nickname\n      </label>\n      <input type=\"text\" class=\"form-control\" id=\"nickname\" name=\"nickname\"\n             value=\"{{nickname}}\"/>\n    </div>\n  </div>\n  <div class=\"tab-pane container fade\" id=\"password\">\n    <form class=\"navbar-form\">\n      <button type=\"button\" class = \"btn btn-large btn-success\" (click)=\"resetPassword()\">Reset pass word via email</button>\n    </form>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth) {
        this.auth = auth;
        this.email = '';
        this.nickname = '';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var profile = this.auth.getProfile();
        this.email = profile.email;
        console.log("email:" + this.email);
        this.nickname = profile.nickname;
        console.log("username:" + this.nickname);
    };
    ProfileComponent.prototype.resetPassword = function () {
        this.auth.resetPassword();
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
        }),
        __param(0, core_1.Inject('auth')),
        __metadata("design:paramtypes", [Object])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ "./src/app/pipes/search.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (problems, term) {
        console.log(problems);
        return problems.filter(function (problem) { return problem.name.toLowerCase().includes(term); });
    };
    SearchPipe = __decorate([
        core_1.Pipe({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());
exports.SearchPipe = SearchPipe;


/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this.auth.isAuthenticated()) {
            return true;
        }
        else {
            //redirect to home page if not logged in
            this.router.navigate(['/problems']);
            return false;
        }
    };
    AuthGuardService.prototype.isAdmin = function () {
        if (this.auth.isAuthenticated() && this.auth.admin()) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthGuardService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject('auth')),
        __metadata("design:paramtypes", [Object, router_1.Router])
    ], AuthGuardService);
    return AuthGuardService;
}());
exports.AuthGuardService = AuthGuardService;


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
//import { filter } from 'rxjs/operators';
var auth0 = __webpack_require__("./node_modules/auth0-js/src/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/*
@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: '12OL6KExe4Rjoa6yBtiDum0ur6JbVKQ1',
    domain: 'liuchanglilian2.auth0.com',
    responseType: 'token id_token',
    audience: 'https://liuchanglilian2.auth0.com/userinfo',
    redirectUri: 'http://localhost:3000/callback',
    scope: 'openid'
  });

  constructor(public router: Router) {}

  public login(): void {
    console.log("I am doing login");
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken &&authResult.profile) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/home']);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    console.log("I am now printing");
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('profile',JSON.stringify(authResult.profile));
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    console.log("is logged");
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    console.log(new Date().getTime() < expiresAt);
    return new Date().getTime() < expiresAt;
  }
  public getProfile(): Object {
    return JSON.parse(localStorage.getItem("profile"));
  }*/
var AuthService = /** @class */ (function () {
    function AuthService(router, http) {
        var _this = this;
        this.router = router;
        this.http = http;
        // Create Auth0 web auth instance
        this.auth0 = new auth0.WebAuth({
            clientID: '12OL6KExe4Rjoa6yBtiDum0ur6JbVKQ1',
            domain: 'liuchanglilian2.auth0.com',
            responseType: 'token id_token',
            audience: 'https://liuchanglilian2.auth0.com/userinfo',
            redirectUri: 'http://localhost:3000/callback',
            scope: 'openid profile nickname email user_metadata app_metadatas'
        });
        // Check session to restore login if not expired
        if (Date.now() < JSON.parse(localStorage.getItem('expires_at'))) {
            this.getAccessToken();
        }
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken) {
                console.log(authResult);
                window.location.hash = '';
                _this.getUserInfo(authResult);
            }
            else if (err) {
                console.error("Error: " + err.error);
            }
            _this.router.navigate(['/']);
        });
    }
    AuthService.prototype.login = function () {
        // Auth0 authorize request
        this.auth0.authorize();
    };
    AuthService.prototype.getAccessToken = function () {
        // this.auth0.checkSession({}, (err, authResult) => {
        //   if (authResult && authResult.accessToken) {
        //     this.getUserInfo(authResult);
        //   } else if (err) {
        //     console.log(err);
        //     this.logout();
        //     this.authenticated = false;
        //   }
        // });
    };
    AuthService.prototype.getUserInfo = function (authResult) {
        var _this = this;
        // Use access token to retrieve user's profile and set session
        this.auth0.client.userInfo(authResult.accessToken, function (err, profile) {
            if (profile) {
                _this._setSession(authResult, profile);
            }
        });
    };
    AuthService.prototype._setSession = function (authResult, profile) {
        var expTime = authResult.expiresIn * 1000 + Date.now();
        var idTokenPayload = authResult.idTokenPayload;
        // const app_metadata = authResult.idTokenPayload.;
        // Save authentication data and update login status subject
        localStorage.setItem('expires_at', JSON.stringify(expTime));
        localStorage.setItem('profile', JSON.stringify(profile));
        localStorage.setItem('role', JSON.stringify(idTokenPayload["https://foo/bar/roles"][0]));
        console.log("hihihi,I am here");
        var url = 'https://foo/bar/roles';
        // console.log(idTokenPayload);
        // localStorage.setItem('meta-data',JSON.stringify(app_metadata));
        //localStorage.setItem('id_token', id_token);
        this.accessToken = authResult.accessToken;
        this.userProfile = profile;
        this.authenticated = true;
    };
    AuthService.prototype.logout = function () {
        // Remove auth data and update login status
        localStorage.removeItem('expires_at');
        localStorage.removeItem('profile');
        localStorage.removeItem('role');
        this.userProfile = undefined;
        this.accessToken = undefined;
        this.authenticated = false;
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            // Check if current date is before token
            // expiration and user is signed in locally
            var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
            return Date.now() < expiresAt && this.authenticated;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // Access Token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    AuthService.prototype.admin = function () {
        var role = localStorage.getItem('role');
        if (role != '') {
            var roleName = JSON.parse(role);
            console.log("checking in auth for the role" + roleName);
            return roleName === 'Admin';
        }
    };
    AuthService.prototype.getProfile = function () {
        return JSON.parse(localStorage.getItem("profile"));
        //return this.userProfile;
    };
    AuthService.prototype.resetPassword = function () {
        var profile = this.getProfile();
        //   let url: string ='https://liuchanglilian2.auth0.com/dbconnections/change_password';
        //   let headers = new Headers();
        //   headers.append('Accept', 'application/json');
        //   let options = new RequestOptions({headers:headers});
        //   let body = {
        //       client_id: 'kntUt0uiU47somIW28yVrQM1KWRejyU5',
        //    // this.auth.getProfile().nickname
        //     email: this.userProfile.email,
        //     connection: 'Username-Password-Authentication',
        //     json:true
        //
        // }
        //  this.http.post(url,body,options)
        //        .toPromise()
        //     .then((res:Response) =>{
        //       console.log(res.json());
        //     })
        //     .catch(this.handleError);
        this.auth0.changePassword({
            connection: 'Username-Password-Authentication',
            email: this.getProfile().email
        }, function (err, resp) {
            if (err) {
                console.log(err.message);
            }
            else {
                console.log(resp);
            }
        });
    };
    AuthService.prototype.handleError = function (error) {
        console.error('error occur', error);
        return Promise.reject(error.message || error);
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router, http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/app/services/collaboration.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var colors_1 = __webpack_require__("./src/assets/colors.ts");
var CollaborationService = /** @class */ (function () {
    function CollaborationService() {
        this.clientInfo = {};
        this.clientNum = 0;
    }
    CollaborationService.prototype.init = function (editor, sessionId) {
        var _this = this;
        this.collaborationSocket = io(window.location.origin, { query: 'sessionId=' + sessionId });
        this.collaborationSocket.on("change", function (delta) {
            //console.log('collaboration: editor changes by'+delta);
            //editor.lastApplideChange = delta;
            console.group('type of e in collaboration');
            console.log(typeof delta);
            console.groupEnd();
            delta = JSON.parse(delta);
            editor.shouldIgnore = true;
            editor.getSession().getDocument().applyDeltas([delta]);
            editor.shouldIgnore = false;
        });
        this.collaborationSocket.on("cursorMove", function (cursor) {
            console.log("Here I got the cursorMove");
            console.log("cursor move:" + cursor);
            var session = editor.getSession();
            cursor = JSON.parse(cursor);
            var x = cursor['row'];
            var y = cursor['column'];
            var changeClientId = cursor['socketId'];
            console.log(x + ',' + y + ',' + changeClientId);
            if (changeClientId in _this.clientInfo) {
                session.removeMarker(_this.clientInfo[changeClientId]['marker']);
            }
            else {
                _this.clientInfo[changeClientId] = {};
                var css = document.createElement("style");
                css.type = "text/css";
                css.innerHTML = ".editor_cursor_" + changeClientId +
                    " { position:absolute; background:" + colors_1.COLORS[_this.clientNum] + ";"
                    + " z-index: 100; width:3px !important;";
                document.body.appendChild(css);
                _this.clientNum++;
            }
            var Range = ace.require('ace/range').Range;
            session.addMarker();
            var newMarker = session.addMarker(new Range(x, y, x, y + 1), 'editor_cursor_' + changeClientId, "line", true);
            _this.clientInfo[changeClientId]['marker'] = newMarker;
        });
        //Test
        this.collaborationSocket.on("message", function (message) {
            // console.log("received:"+message);
        });
    };
    CollaborationService.prototype.change = function (delta) {
        this.collaborationSocket.emit("change", delta);
        // console.log("I am at collaboration service"+ delta);
    };
    CollaborationService.prototype.cursorMove = function (cursor) {
        this.collaborationSocket.emit("cursorMove", cursor);
    };
    CollaborationService.prototype.restoreBuffer = function () {
        this.collaborationSocket.emit("restoreBuffer");
    };
    CollaborationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CollaborationService);
    return CollaborationService;
}());
exports.CollaborationService = CollaborationService;


/***/ }),

/***/ "./src/app/services/data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var BehaviorSubject_1 = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this._problemSource = new BehaviorSubject_1.BehaviorSubject([]);
    }
    //the difference between observable and promise: the value of promise cannot be changed after
    //resolved regardless of what may be got from the request afterwards.
    //Observable: a serious of values, the value can change consistently.
    DataService.prototype.getProblems = function () {
        var _this = this;
        this.http.get("api/v1/problems")
            .toPromise()
            .then(function (res) {
            _this._problemSource.next(res.json());
        })
            .catch(this.handleError);
        return this._problemSource.asObservable();
    };
    DataService.prototype.getProblem = function (id) {
        return this.http.get("api/v1/problems/" + id)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.addProblem = function (problem) {
        var _this = this;
        var headers = new http_1.Headers();
        //add the header to make the server know that the data will be in type of json
        headers.append('Accept', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('/api/v1/problems', problem, options)
            .toPromise()
            .then(function (res) {
            _this.getProblems();
            //After adding new problem, the page will change
            return res.json();
        })
            .catch(this.handleError);
    };
    DataService.prototype.buildAndRun = function (data) {
        var headers = new http_1.Headers();
        //localStorage.setItem('data',JSON.stringify (data));
        //console.log("printing in data"+data);
        //add the header to make the server know that the data will be in type of json
        headers.append('Accept', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('/api/v1/build_and_run', data, options)
            .toPromise()
            .then(function (res) {
            //  console.log(JSON.stringify(res.json()));
            //After adding new problem, the page will change
            return res.json();
        })
            .catch(this.handleError);
    };
    //error handler
    DataService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.body || error);
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;


/***/ }),

/***/ "./src/app/services/input.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var BehaviorSubject_1 = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var InputService = /** @class */ (function () {
    // public inputSubject$ = new Observable<string>('');
    // avoid passing variable by reference, make an instance
    function InputService() {
        this.inputSubject$ = new BehaviorSubject_1.BehaviorSubject('');
    }
    //setter
    InputService.prototype.changeInput = function (term) {
        this.inputSubject$.next(term);
    };
    //getter
    // BehaviorSubject
    InputService.prototype.getInput = function () {
        //return a new Observable instead of returning the reference
        return this.inputSubject$.asObservable();
        // this.inputSubject$ = new Observable();
        // return this.inputSubject$.asObservable();
    };
    InputService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], InputService);
    return InputService;
}());
exports.InputService = InputService;


/***/ }),

/***/ "./src/assets/colors.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.COLORS = [
    "#0000ff",
    "#a52a2a",
    "#00ffff",
    "#00008b",
    "#008b8b",
    "#a9a9a9",
    "#006400",
    "#bdb76b",
    "#8b008b",
    "#556b2f",
    "#ff8c00",
    "#9932cc",
    "#8b0000",
    "#e9967a",
    "#9400d3",
    "#ff00ff",
    "#ffd700",
    "#008000",
    "#4b0082",
    "#f0e68c",
    "#add8e6",
    "#e0ffff",
    "#90ee90",
    "#d3d3d3",
    "#ffb6c1",
    "#ffffe0",
    "#00ff00",
    "#ff00ff",
    "#800000",
    "#000080",
    "#808000",
    "#ffa500",
    "#ffc0cb",
    "#800080",
    "#800080",
    "#ff0000",
    "#c0c0c0",
    "#ffffff",
    "#ffff00"
];


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map