"use strict";
(self["webpackChunkvendor"] = self["webpackChunkvendor"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/guards/auth.guard */ 27574);
/* harmony import */ var _layouts_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/layout.component */ 76774);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [
    { path: 'account', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_account_account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account/account.module */ 63879)).then(m => m.AccountModule) },
    // tslint:disable-next-line: max-line-length
    { path: '', component: _layouts_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent, loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 18950)).then(m => m.PagesModule), canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' }), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


// import { UserService} from 'venue-lib';
class AppComponent {
    constructor() {
    }
    // private userService : UserService
    ngOnInit() {
        // console.log( this.userService.anotherFunction('wizgle'))
        // document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
    }
    test() {
        // console.log( this.userService.anotherFunction('wizgle'))
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-owl-carousel-o */ 37297);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 37059);
/* harmony import */ var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/layouts.module */ 52372);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _authUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authUtils */ 69453);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ 32202);
/* harmony import */ var _core_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/helpers/error.interceptor */ 44681);
/* harmony import */ var _core_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/helpers/jwt.interceptor */ 61943);
/* harmony import */ var _core_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/helpers/fake-backend */ 14797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);



















if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.defaultauth === 'firebase') {
    (0,_authUtils__WEBPACK_IMPORTED_MODULE_4__.initFirebaseBackend)(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.firebaseConfig);
}
else {
    // tslint:disable-next-line: no-unused-expression
    _core_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_7__.FakeBackendInterceptor;
}
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__.TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS, useClass: _core_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_6__.JwtInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS, useClass: _core_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_5__.ErrorInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS, useClass: _core_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_7__.FakeBackendInterceptor, multi: true },
        // LoaderService,
        // { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true },
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule.forRoot({
            loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
            }
        }),
        _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_1__.LayoutsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_14__.CarouselModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbAccordionModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbNavModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbTooltipModule,
        _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_16__.ScrollToModule.forRoot(),
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_1__.LayoutsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_14__.CarouselModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbAccordionModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbNavModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbTooltipModule, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_16__.ScrollToModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule] }); })();


/***/ }),

/***/ 69453:
/*!******************************!*\
  !*** ./src/app/authUtils.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFirebaseBackend": () => (/* binding */ getFirebaseBackend),
/* harmony export */   "initFirebaseBackend": () => (/* binding */ initFirebaseBackend)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ 66369);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ 23628);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ 31866);

// Add the Firebase products that you want to use


class FirebaseAuthBackend {
    constructor(firebaseConfig) {
        /**
         * Registers the user with given details
         */
        this.registerUser = (email, password) => {
            return new Promise((resolve, reject) => {
                firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().createUserWithEmailAndPassword(email, password).then((user) => {
                    var user = firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().currentUser;
                    resolve(user);
                }, (error) => {
                    reject(this._handleError(error));
                });
            });
        };
        /**
         * Login user with given details
         */
        this.loginUser = (email, password) => {
            return new Promise((resolve, reject) => {
                firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().signInWithEmailAndPassword(email, password).then((user) => {
                    // eslint-disable-next-line no-redeclare
                    var user = firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().currentUser;
                    resolve(user);
                }, (error) => {
                    reject(this._handleError(error));
                });
            });
        };
        /**
         * forget Password user with given details
         */
        this.forgetPassword = (email) => {
            return new Promise((resolve, reject) => {
                // tslint:disable-next-line: max-line-length
                firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().sendPasswordResetEmail(email, { url: window.location.protocol + '//' + window.location.host + '/login' }).then(() => {
                    resolve(true);
                }).catch((error) => {
                    reject(this._handleError(error));
                });
            });
        };
        /**
         * Logout the user
         */
        this.logout = () => {
            return new Promise((resolve, reject) => {
                firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().signOut().then(() => {
                    resolve(true);
                }).catch((error) => {
                    reject(this._handleError(error));
                });
            });
        };
        this.setLoggeedInUser = (user) => {
            sessionStorage.setItem('authUser', JSON.stringify(user));
        };
        /**
         * Returns the authenticated user
         */
        this.getAuthenticatedUser = () => {
            if (!sessionStorage.getItem('authUser')) {
                return null;
            }
            return JSON.parse(sessionStorage.getItem('authUser'));
        };
        if (firebaseConfig) {
            // Initialize Firebase
            firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(firebaseConfig);
            firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().onAuthStateChanged((user) => {
                if (user) {
                    sessionStorage.setItem('authUser', JSON.stringify(user));
                }
                else {
                    sessionStorage.removeItem('authUser');
                }
            });
        }
    }
    /**
     * Handle the error
     * @param {*} error
     */
    _handleError(error) {
        // tslint:disable-next-line: prefer-const
        var errorMessage = error.message;
        return errorMessage;
    }
}
// tslint:disable-next-line: variable-name
let _fireBaseBackend = null;
/**
 * Initilize the backend
 * @param {*} config
 */
const initFirebaseBackend = (config) => {
    if (!_fireBaseBackend) {
        _fireBaseBackend = new FirebaseAuthBackend(config);
    }
    return _fireBaseBackend;
};
/**
 * Returns the firebase backend
 */
const getFirebaseBackend = () => {
    return _fireBaseBackend;
};



/***/ }),

/***/ 27574:
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 90263);
/* harmony import */ var _services_authfake_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authfake.service */ 92293);






class AuthGuard {
    constructor(router, authenticationService, authFackservice) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.authFackservice = authFackservice;
    }
    canActivate(route, state) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.defaultauth === 'firebase') {
            const currentUser = this.authenticationService.currentUser();
            if (currentUser) {
                // logged in so return true
                return true;
            }
        }
        else {
            const currentUser = this.authFackservice.currentUserValue;
            if (currentUser) {
                // logged in so return true
                return true;
            }
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_authfake_service__WEBPACK_IMPORTED_MODULE_2__.AuthfakeauthenticationService)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 44681:
/*!***************************************************!*\
  !*** ./src/app/core/helpers/error.interceptor.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 90263);





class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload();
            }
            const error = err.error.message || err.statusText;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService)); };
ErrorInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });


/***/ }),

/***/ 14797:
/*!**********************************************!*\
  !*** ./src/app/core/helpers/fake-backend.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FakeBackendInterceptor": () => (/* binding */ FakeBackendInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 80522);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 35189);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 25843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 60887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);




class FakeBackendInterceptor {
    constructor() { }
    intercept(request, next) {
        // array in local storage for registered users
        // tslint:disable-next-line: max-line-length
        const users = JSON.parse(localStorage.getItem('users')) || [{ username: 'admin', email: 'pratiksha.borkar@radisson.com', password: '123456' }];
        // wrap in delayed observable to simulate server api call
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(() => {
            // authenticate
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                const filteredUsers = users.filter(user => {
                    return user.email === request.body.email && user.password === request.body.password;
                });
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    const user = filteredUsers[0];
                    const body = {
                        id: user.id,
                        email: user.email,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({ status: 200, body }));
                }
                else {
                    // else return 400 bad request
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({ error: { message: 'Username or password is incorrect' } });
                }
            }
            // get users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                // tslint:disable-next-line: max-line-length
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({ status: 200, body: users }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // get user by id
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                // tslint:disable-next-line: max-line-length
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    const urlParts = request.url.split('/');
                    // tslint:disable-next-line: radix
                    const id = parseInt(urlParts[urlParts.length - 1]);
                    // tslint:disable-next-line: no-shadowed-variable
                    const matchedUsers = users.filter(user => user.id === id);
                    const user = matchedUsers.length ? matchedUsers[0] : null;
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({ status: 200, body: user }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // register user
            if (request.url.endsWith('/users/register') && request.method === 'POST') {
                // get new user object from post body
                const newUser = request.body;
                // validation
                const duplicateUser = users.filter(user => user.username === newUser.username).length;
                if (duplicateUser) {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({ error: { message: 'Username "' + newUser.username + '" is already taken' } });
                }
                // save new user
                newUser.id = users.length + 1;
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({ status: 200 }));
            }
            // delete user
            if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                // tslint:disable-next-line: max-line-length
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    const urlParts = request.url.split('/');
                    // tslint:disable-next-line: radix
                    const id = parseInt(urlParts[urlParts.length - 1]);
                    for (let i = 0; i < users.length; i++) {
                        const user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
                    // respond 200 OK
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({ status: 200 }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // pass through any requests not handled above
            return next.handle(request);
        }))
            // tslint:disable-next-line: max-line-length
            // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.materialize)())
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.delay)(500))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.dematerialize)());
    }
}
FakeBackendInterceptor.ɵfac = function FakeBackendInterceptor_Factory(t) { return new (t || FakeBackendInterceptor)(); };
FakeBackendInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: FakeBackendInterceptor, factory: FakeBackendInterceptor.ɵfac });


/***/ }),

/***/ 61943:
/*!*************************************************!*\
  !*** ./src/app/core/helpers/jwt.interceptor.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 90263);
/* harmony import */ var _services_authfake_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authfake.service */ 92293);





class JwtInterceptor {
    constructor(authenticationService, authfackservice) {
        this.authenticationService = authenticationService;
        this.authfackservice = authfackservice;
    }
    intercept(request, next) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.defaultauth === 'firebase') {
            const currentUser = this.authenticationService.currentUser();
            if (currentUser && currentUser.token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${currentUser.token}`
                    }
                });
            }
        }
        else {
            // add authorization header with jwt token if available
            const currentUser = this.authfackservice.currentUserValue;
            if (currentUser && currentUser.token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${currentUser.token}`
                    }
                });
            }
        }
        return next.handle(request);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_authfake_service__WEBPACK_IMPORTED_MODULE_2__.AuthfakeauthenticationService)); };
JwtInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });


/***/ }),

/***/ 90263:
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var _authUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../authUtils */ 69453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class AuthenticationService {
    constructor() {
    }
    /**
     * Returns the current user
     */
    currentUser() {
        return (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().getAuthenticatedUser();
    }
    /**
     * Performs the auth
     * @param email email of user
     * @param password password of user
     */
    login(email, password) {
        return (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().loginUser(email, password).then((response) => {
            const user = response;
            return user;
        });
    }
    /**
     * Performs the register
     * @param email email
     * @param password password
     */
    register(email, password) {
        return (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().registerUser(email, password).then((response) => {
            const user = response;
            return user;
        });
    }
    /**
     * Reset password
     * @param email email
     */
    resetPassword(email) {
        return (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().forgetPassword(email).then((response) => {
            const message = response.data;
            return message;
        });
    }
    /**
     * Logout the user
     */
    logout() {
        // logout the user
        (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().logout();
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(); };
AuthenticationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 92293:
/*!***************************************************!*\
  !*** ./src/app/core/services/authfake.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthfakeauthenticationService": () => (/* binding */ AuthfakeauthenticationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);




class AuthfakeauthenticationService {
    constructor(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(email, password) {
        return this.http.post(`/users/authenticate`, { email, password })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
            }
            return user;
        }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
AuthfakeauthenticationService.ɵfac = function AuthfakeauthenticationService_Factory(t) { return new (t || AuthfakeauthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
AuthfakeauthenticationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthfakeauthenticationService, factory: AuthfakeauthenticationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 13117:
/*!************************************************!*\
  !*** ./src/app/core/services/event.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventService": () => (/* binding */ EventService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);



class EventService {
    constructor() {
        this.handler = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    /**
     * Broadcast the event
     * @param type type of event
     * @param payload payload
     */
    broadcast(type, payload = {}) {
        this.handler.next({ type, payload });
    }
    /**
     * Subscribe to event
     * @param type type of event
     * @param callback call back function
     */
    subscribe(type, callback) {
        return this.handler.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(event => event.type === type)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(event => event.payload))
            .subscribe(callback);
    }
}
EventService.ɵfac = function EventService_Factory(t) { return new (t || EventService)(); };
EventService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: EventService, factory: EventService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 77524:
/*!***************************************************!*\
  !*** ./src/app/core/services/language.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageService": () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ 30185);



class LanguageService {
    constructor(translate, cookieService) {
        this.translate = translate;
        this.cookieService = cookieService;
        this.languages = ['en', 'es', 'de', 'it', 'ru'];
        let browserLang;
        this.translate.addLangs(this.languages);
        if (this.cookieService.check('lang')) {
            browserLang = this.cookieService.get('lang');
        }
        else {
            this.setLanguage('en');
            browserLang = translate.getBrowserLang();
        }
        translate.use(browserLang.match(/en|es|de|it|ru/) ? browserLang : 'en');
    }
    setLanguage(lang) {
        this.translate.use(lang);
        this.cookieService.set('lang', lang);
    }
}
LanguageService.ɵfac = function LanguageService_Factory(t) { return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__.CookieService)); };
LanguageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LanguageService, factory: LanguageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 34487:
/*!*************************************************!*\
  !*** ./src/app/core/services/loader.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderService": () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class LoaderService {
    constructor() {
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    }
}
LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
LoaderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoaderService, factory: LoaderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 84158:
/*!****************************************************!*\
  !*** ./src/app/layouts/footer/footer.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

/**
 * Footer component
 */
class FooterComponent {
    constructor() {
        // set the currenr year
        this.year = new Date().getFullYear();
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 8, vars: 1, consts: [[1, "footer"], [1, "container-fluid"], [1, "row"], [1, "col-sm-6"], [1, "text-sm-end", "d-none", "d-sm-block"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Design & Develop by Wizgle Technology Consulting Private Limited ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.year, " \u00A9 WTFares Venue Booking Engine. ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 18807:
/*!************************************************************!*\
  !*** ./src/app/layouts/horizontal/horizontal.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalComponent": () => (/* binding */ HorizontalComponent)
/* harmony export */ });
/* harmony import */ var _layouts_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts.model */ 66091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/event.service */ 13117);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ 84158);
/* harmony import */ var _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rightsidebar/rightsidebar.component */ 56034);
/* harmony import */ var _horizontaltopbar_horizontaltopbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../horizontaltopbar/horizontaltopbar.component */ 45566);







/**
 * Horizontal-layout component
 */
class HorizontalComponent {
    constructor(eventService) {
        this.eventService = eventService;
    }
    ngOnInit() {
        this.topbar = _layouts_model__WEBPACK_IMPORTED_MODULE_0__.TOPBAR;
        this.eventService.subscribe('changeTopbar', (topbar) => {
            this.topbar = topbar;
            this.changeTopbar(this.topbar);
        });
        document.body.setAttribute('data-layout', 'horizontal');
        document.body.removeAttribute('data-sidebar');
        document.body.removeAttribute('data-layout-size');
        document.body.removeAttribute('data-keep-enlarged');
        document.body.removeAttribute('data-sidebar-small');
        this.changeTopbar(this.topbar);
    }
    ngAfterViewInit() {
    }
    /**
     * on settings button clicked from topbar
     */
    onSettingsButtonClicked() {
        document.body.classList.toggle('right-bar-enabled');
    }
    changeTopbar(topbar) {
        switch (topbar) {
            case "light":
                document.body.setAttribute("data-topbar", "light");
                break;
            case "dark":
                document.body.setAttribute("data-topbar", "dark");
                break;
            case "colored":
                document.body.setAttribute("data-topbar", "colored");
                break;
            default:
                document.body.setAttribute("data-topbar", "dark");
                break;
        }
    }
}
HorizontalComponent.ɵfac = function HorizontalComponent_Factory(t) { return new (t || HorizontalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_1__.EventService)); };
HorizontalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HorizontalComponent, selectors: [["app-horizontal"]], decls: 7, vars: 0, consts: [["id", "layout-wrapper"], [1, "main-content"], [1, "page-content"]], template: function HorizontalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-horizontaltopbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "app-footer")(6, "app-rightsidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_3__.RightsidebarComponent, _horizontaltopbar_horizontaltopbar_component__WEBPACK_IMPORTED_MODULE_4__.HorizontaltopbarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3Jpem9udGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 45566:
/*!************************************************************************!*\
  !*** ./src/app/layouts/horizontaltopbar/horizontaltopbar.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontaltopbarComponent": () => (/* binding */ HorizontaltopbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ 43161);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/event.service */ 13117);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/auth.service */ 90263);
/* harmony import */ var _core_services_authfake_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/authfake.service */ 92293);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/language.service */ 77524);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cookie-service */ 30185);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! simplebar-angular */ 62014);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 33935);















function HorizontaltopbarComponent_ng_container_151_a_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 74);
} }
function HorizontaltopbarComponent_ng_container_151_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, HorizontaltopbarComponent_ng_container_151_a_2_div_4_Template, 1, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", item_r2.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("bx ", item_r2.icon, " me-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 6, item_r2.label), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.hasItems(item_r2));
} }
function HorizontaltopbarComponent_ng_container_151_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HorizontaltopbarComponent_ng_container_151_a_3_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.onMenuClick($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("bx ", item_r2.icon, " me-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 4, item_r2.label), " ");
} }
const _c0 = function () { return { exact: true }; };
function HorizontaltopbarComponent_ng_container_151_div_4_ng_template_1_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", subitem_r13.link)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 3, subitem_r13.label), " ");
} }
function HorizontaltopbarComponent_ng_container_151_div_4_ng_template_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 83)(1, "div", 84)(2, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 84)(6, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 84)(10, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    const subitem_r13 = ctx_r19.$implicit;
    const i_r12 = ctx_r19.index;
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", subitem_r13.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 6, item_r2.subItems[i_r12].label));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", item_r2.subItems[i_r12 + 1] == null ? null : item_r2.subItems[i_r12 + 1].link);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 8, item_r2.subItems[i_r12 + 1] == null ? null : item_r2.subItems[i_r12 + 1].label));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", item_r2.subItems[i_r12 + 2] == null ? null : item_r2.subItems[i_r12 + 2].link);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 10, item_r2.subItems[i_r12 + 2] == null ? null : item_r2.subItems[i_r12 + 2].label));
} }
function HorizontaltopbarComponent_ng_container_151_div_4_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HorizontaltopbarComponent_ng_container_151_div_4_ng_template_1_div_1_div_1_Template, 13, 12, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r12 % 3 == 0);
} }
function HorizontaltopbarComponent_ng_container_151_div_4_ng_template_1_div_2_ng_template_6_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subSubitem_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", subSubitem_r23.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, subSubitem_r23.label));
} }
function HorizontaltopbarComponent_ng_container_151_div_4_ng_template_1_div_2_ng_template_6_div_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subSubSubitem_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", subSubSubitem_r28.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, subSubSubitem_r28.label));
} }
function HorizontaltopbarComponent_ng_container_151_div_4_ng_template_1_div_2_ng_template_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 86)(1, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HorizontaltopbarComponent_ng_container_151_div_4_ng_template_1_div_2_ng_template_6_div_1_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](6); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r29.onMenuClick($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, HorizontaltopbarComponent_ng_container_151_div_4_ng_template_1_div_2_ng_template_6_div_1_ng_template_6_Template, 3, 4, "ng-template", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const subSubitem_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, subSubitem_r23.label), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", subSubitem_r23.subItems);
} }
function HorizontaltopbarComponent_ng_container_151_div_4_ng_template_1_div_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, HorizontaltopbarComponent_ng_container_151_div_4_ng_template_1_div_2_ng_template_6_a_0_Template, 3, 4, "a", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HorizontaltopbarComponent_ng_container_151_div_4_ng_template_1_div_2_ng_template_6_div_1_Template, 7, 4, "div", 80);
} if (rf & 2) {
    const subSubitem_r23 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r22.hasItems(subSubitem_r23));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r22.hasItems(subSubitem_r23));
} }
function HorizontaltopbarComponent_ng_container_151_div_4_ng_template_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 86)(1, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HorizontaltopbarComponent_ng_container_151_div_4_ng_template_1_div_2_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r32.onMenuClick($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, HorizontaltopbarComponent_ng_container_151_div_4_ng_template_1_div_2_ng_template_6_Template, 2, 2, "ng-template", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const subitem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, subitem_r13.label), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", subitem_r13.subItems);
} }
function HorizontaltopbarComponent_ng_container_151_div_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, HorizontaltopbarComponent_ng_container_151_div_4_ng_template_1_a_0_Template, 3, 6, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HorizontaltopbarComponent_ng_container_151_div_4_ng_template_1_div_1_Template, 2, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, HorizontaltopbarComponent_ng_container_151_div_4_ng_template_1_div_2_Template, 7, 4, "div", 80);
} if (rf & 2) {
    const subitem_r13 = ctx.$implicit;
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r2.subItems.length < 11 && !ctx_r11.hasItems(subitem_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r2.subItems.length > 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r11.hasItems(subitem_r13));
} }
const _c1 = function (a0) { return { "dropdown-mega-menu-xl px-2": a0 }; };
function HorizontaltopbarComponent_ng_container_151_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HorizontaltopbarComponent_ng_container_151_div_4_ng_template_1_Template, 3, 3, "ng-template", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c1, item_r2.subItems.length > 11));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", item_r2.subItems);
} }
function HorizontaltopbarComponent_ng_container_151_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "li", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, HorizontaltopbarComponent_ng_container_151_a_2_Template, 5, 8, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, HorizontaltopbarComponent_ng_container_151_a_3_Template, 5, 6, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, HorizontaltopbarComponent_ng_container_151_div_4_Template, 2, 4, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !item_r2.subItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r2.subItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.hasItems(item_r2));
} }
function HorizontaltopbarComponent_ng_container_153_a_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 74);
} }
function HorizontaltopbarComponent_ng_container_153_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, HorizontaltopbarComponent_ng_container_153_a_2_div_4_Template, 1, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", item_r37.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("bx ", item_r37.icon, " me-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 6, item_r37.label), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r38.hasItems(item_r37));
} }
function HorizontaltopbarComponent_ng_container_153_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HorizontaltopbarComponent_ng_container_153_a_3_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r43.onMenuClick($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("bx ", item_r37.icon, " me-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 4, item_r37.label), " ");
} }
function HorizontaltopbarComponent_ng_container_153_div_4_ng_template_1_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", subitem_r48.link)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 3, subitem_r48.label), " ");
} }
function HorizontaltopbarComponent_ng_container_153_div_4_ng_template_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 83)(1, "div", 84)(2, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 84)(6, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 84)(10, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    const subitem_r48 = ctx_r54.$implicit;
    const i_r47 = ctx_r54.index;
    const item_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", subitem_r48.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 6, item_r37.subItems[i_r47].label));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", item_r37.subItems[i_r47 + 1] == null ? null : item_r37.subItems[i_r47 + 1].link);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 8, item_r37.subItems[i_r47 + 1] == null ? null : item_r37.subItems[i_r47 + 1].label));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", item_r37.subItems[i_r47 + 2] == null ? null : item_r37.subItems[i_r47 + 2].link);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 10, item_r37.subItems[i_r47 + 2] == null ? null : item_r37.subItems[i_r47 + 2].label));
} }
function HorizontaltopbarComponent_ng_container_153_div_4_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HorizontaltopbarComponent_ng_container_153_div_4_ng_template_1_div_1_div_1_Template, 13, 12, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r47 % 3 == 0);
} }
function HorizontaltopbarComponent_ng_container_153_div_4_ng_template_1_div_2_ng_template_6_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subSubitem_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", subSubitem_r58.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, subSubitem_r58.label));
} }
function HorizontaltopbarComponent_ng_container_153_div_4_ng_template_1_div_2_ng_template_6_div_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subSubSubitem_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", subSubSubitem_r63.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, subSubSubitem_r63.label));
} }
function HorizontaltopbarComponent_ng_container_153_div_4_ng_template_1_div_2_ng_template_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 86)(1, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HorizontaltopbarComponent_ng_container_153_div_4_ng_template_1_div_2_ng_template_6_div_1_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](6); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r64.onMenuClick($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, HorizontaltopbarComponent_ng_container_153_div_4_ng_template_1_div_2_ng_template_6_div_1_ng_template_6_Template, 3, 4, "ng-template", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const subSubitem_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, subSubitem_r58.label), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", subSubitem_r58.subItems);
} }
function HorizontaltopbarComponent_ng_container_153_div_4_ng_template_1_div_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, HorizontaltopbarComponent_ng_container_153_div_4_ng_template_1_div_2_ng_template_6_a_0_Template, 3, 4, "a", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HorizontaltopbarComponent_ng_container_153_div_4_ng_template_1_div_2_ng_template_6_div_1_Template, 7, 4, "div", 80);
} if (rf & 2) {
    const subSubitem_r58 = ctx.$implicit;
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r57.hasItems(subSubitem_r58));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r57.hasItems(subSubitem_r58));
} }
function HorizontaltopbarComponent_ng_container_153_div_4_ng_template_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 86)(1, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HorizontaltopbarComponent_ng_container_153_div_4_ng_template_1_div_2_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r67.onMenuClick($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, HorizontaltopbarComponent_ng_container_153_div_4_ng_template_1_div_2_ng_template_6_Template, 2, 2, "ng-template", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const subitem_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, subitem_r48.label), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", subitem_r48.subItems);
} }
function HorizontaltopbarComponent_ng_container_153_div_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, HorizontaltopbarComponent_ng_container_153_div_4_ng_template_1_a_0_Template, 3, 6, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HorizontaltopbarComponent_ng_container_153_div_4_ng_template_1_div_1_Template, 2, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, HorizontaltopbarComponent_ng_container_153_div_4_ng_template_1_div_2_Template, 7, 4, "div", 80);
} if (rf & 2) {
    const subitem_r48 = ctx.$implicit;
    const item_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r37.subItems.length < 11 && !ctx_r46.hasItems(subitem_r48));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r37.subItems.length > 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r46.hasItems(subitem_r48));
} }
function HorizontaltopbarComponent_ng_container_153_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HorizontaltopbarComponent_ng_container_153_div_4_ng_template_1_Template, 3, 3, "ng-template", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c1, item_r37.subItems.length > 11));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", item_r37.subItems);
} }
function HorizontaltopbarComponent_ng_container_153_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "li", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, HorizontaltopbarComponent_ng_container_153_a_2_Template, 5, 8, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, HorizontaltopbarComponent_ng_container_153_a_3_Template, 5, 6, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, HorizontaltopbarComponent_ng_container_153_div_4_Template, 2, 4, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r37 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !item_r37.subItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r37.subItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.hasItems(item_r37));
} }
/**
 * Horizontal Topbar and navbar specified
 */
class HorizontaltopbarComponent {
    // tslint:disable-next-line: max-line-length
    constructor(document, router, eventService, authService, authFackservice, languageService, 
    // tslint:disable-next-line: variable-name
    _cookiesService) {
        this.document = document;
        this.router = router;
        this.eventService = eventService;
        this.authService = authService;
        this.authFackservice = authFackservice;
        this.languageService = languageService;
        this._cookiesService = _cookiesService;
        this.menuItems = [];
        this.listLang = [
            { text: 'English', flag: 'assets/images/flags/us.jpg', lang: 'en' },
            { text: 'Spanish', flag: 'assets/images/flags/spain.jpg', lang: 'es' },
            { text: 'German', flag: 'assets/images/flags/germany.jpg', lang: 'de' },
            { text: 'Italian', flag: 'assets/images/flags/italy.jpg', lang: 'it' },
            { text: 'Russian', flag: 'assets/images/flags/russia.jpg', lang: 'ru' },
        ];
        router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd) {
                this.activateMenu();
            }
        });
    }
    ngOnInit() {
        this.element = document.documentElement;
        this.initialize();
        this.cookieValue = this._cookiesService.get('lang');
        const val = this.listLang.filter(x => x.lang === this.cookieValue);
        this.countryName = val.map(element => element.text);
        if (val.length === 0) {
            if (this.flagvalue === undefined) {
                this.valueset = 'assets/images/flags/us.jpg';
            }
        }
        else {
            this.flagvalue = val.map(element => element.flag);
        }
    }
    setLanguage(text, lang, flag) {
        this.countryName = text;
        this.flagvalue = flag;
        this.cookieValue = lang;
        this.languageService.setLanguage(lang);
    }
    /**
     * Logout the user
     */
    logout() {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.defaultauth === 'firebase') {
            this.authService.logout();
        }
        else {
            this.authFackservice.logout();
        }
        this.router.navigate(['/account/login']);
    }
    /**
     * On menu click
     */
    onMenuClick(event) {
        const nextEl = event.target.nextElementSibling;
        if (nextEl) {
            const parentEl = event.target.parentNode;
            if (parentEl) {
                parentEl.classList.remove("show");
            }
            nextEl.classList.toggle("show");
        }
        return false;
    }
    ngAfterViewInit() {
        this.activateMenu();
    }
    /**
     * remove active and mm-active class
     */
    _removeAllClass(className) {
        const els = document.getElementsByClassName(className);
        while (els[0]) {
            els[0].classList.remove(className);
        }
    }
    /**
     * Togglemenu bar
     */
    toggleMenubar() {
        const element = document.getElementById('topnav-menu-content');
        element.classList.toggle('show');
    }
    /**
     * Activates the menu
     */
    activateMenu() {
        const resetParent = (el) => {
            const parent = el.parentElement;
            if (parent) {
                parent.classList.remove('active');
                const parent2 = parent.parentElement;
                this._removeAllClass('mm-active');
                this._removeAllClass('mm-show');
                if (parent2) {
                    parent2.classList.remove('active');
                    const parent3 = parent2.parentElement;
                    if (parent3) {
                        parent3.classList.remove('active');
                        const parent4 = parent3.parentElement;
                        if (parent4) {
                            parent4.classList.remove('active');
                            const parent5 = parent4.parentElement;
                            if (parent5) {
                                parent5.classList.remove('active');
                                const menuelement = document.getElementById("topnav-menu-content");
                                if (menuelement !== null) {
                                    if (menuelement.classList.contains('show'))
                                        document
                                            .getElementById("topnav-menu-content")
                                            .classList.remove("show");
                                }
                            }
                        }
                    }
                }
            }
        };
        // activate menu item based on location
        const links = document.getElementsByClassName('side-nav-link-ref');
        let matchingMenuItem = null;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < links.length; i++) {
            // reset menu
            resetParent(links[i]);
        }
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < links.length; i++) {
            // tslint:disable-next-line: no-string-literal
            if (location.pathname === links[i]['pathname']) {
                matchingMenuItem = links[i];
                break;
            }
        }
        if (matchingMenuItem) {
            const parent = matchingMenuItem.parentElement;
            /**
             * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
             * We should come up with non hard coded approach
             */
            if (parent) {
                parent.classList.add('active');
                const parent2 = parent.parentElement;
                if (parent2) {
                    parent2.classList.add('active');
                    const parent3 = parent2.parentElement;
                    if (parent3) {
                        parent3.classList.add('active');
                        const parent4 = parent3.parentElement;
                        if (parent4) {
                            parent4.classList.add('active');
                            const parent5 = parent4.parentElement;
                            if (parent5) {
                                parent5.classList.add('active');
                                const parent6 = parent5.parentElement;
                                if (parent6) {
                                    parent6.classList.add('active');
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    /**
     * on settings button clicked from topbar
     */
    onSettingsButtonClicked() {
        document.body.classList.toggle('right-bar-enabled');
    }
    /**
     * Fullscreen method
     */
    fullscreen() {
        document.body.classList.toggle('fullscreen-enable');
        if (!document.fullscreenElement && !this.element.mozFullScreenElement &&
            !this.element.webkitFullscreenElement) {
            if (this.element.requestFullscreen) {
                this.element.requestFullscreen();
            }
            else if (this.element.mozRequestFullScreen) {
                /* Firefox */
                this.element.mozRequestFullScreen();
            }
            else if (this.element.webkitRequestFullscreen) {
                /* Chrome, Safari and Opera */
                this.element.webkitRequestFullscreen();
            }
            else if (this.element.msRequestFullscreen) {
                /* IE/Edge */
                this.element.msRequestFullscreen();
            }
        }
        else {
            if (this.document.exitFullscreen) {
                this.document.exitFullscreen();
            }
            else if (this.document.mozCancelFullScreen) {
                /* Firefox */
                this.document.mozCancelFullScreen();
            }
            else if (this.document.webkitExitFullscreen) {
                /* Chrome, Safari and Opera */
                this.document.webkitExitFullscreen();
            }
            else if (this.document.msExitFullscreen) {
                /* IE/Edge */
                this.document.msExitFullscreen();
            }
        }
    }
    /**
     * Initialize
     */
    initialize() {
        this.menuItems = _menu__WEBPACK_IMPORTED_MODULE_0__.MENU;
        this.menuItems_Static = _menu__WEBPACK_IMPORTED_MODULE_0__.MENU_STATIC;
    }
    /**
     * Returns true or false if given menu item has child or not
     * @param item menuItem
     */
    hasItems(item) {
        return item.subItems !== undefined ? item.subItems.length > 0 : false;
    }
    profile() {
        this.router.navigate(["profile-page"]);
    }
}
HorizontaltopbarComponent.ɵfac = function HorizontaltopbarComponent_Factory(t) { return new (t || HorizontaltopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_authfake_service__WEBPACK_IMPORTED_MODULE_4__.AuthfakeauthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__.CookieService)); };
HorizontaltopbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: HorizontaltopbarComponent, selectors: [["app-horizontaltopbar"]], decls: 154, vars: 44, consts: [["id", "page-topbar"], [1, "navbar-header"], [1, "d-flex"], [1, "navbar-brand-box"], ["routerLink", "/", 1, "logo", "logo-dark"], [1, "logo-sm"], ["src", "assets/images/logo-dark.png", "alt", "", 2, "max-width", "90px", "margin-left", "-10px"], [1, "logo-lg"], ["routerLink", "/", 1, "logo", "logo-light"], ["src", "assets/images/logo-light.png", "alt", "", 2, "max-width", "90px", "margin-left", "-10px"], ["type", "button", 1, "btn", "btn-sm", "px-3", "font-size-16", "d-lg-none", "header-item", 3, "click"], [1, "fa", "fa-fw", "fa-bars"], ["ngbDropdown", "", 1, "dropdown", "d-none", "d-lg-inline-block", "me-1"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "header-item", "noti-icon"], [1, "bx", "bx-customize"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-end"], [1, "px-lg-2"], [1, "row", "no-gutters"], [1, "col"], ["href", "javascript: void(0);", 1, "dropdown-icon-item"], ["src", "assets/images/brands/github.png", "alt", "Github"], ["src", "assets/images/brands/bitbucket.png", "alt", "bitbucket"], ["src", "assets/images/brands/dribbble.png", "alt", "dribbble"], ["src", "assets/images/brands/dropbox.png", "alt", "dropbox"], ["src", "assets/images/brands/mail_chimp.png", "alt", "mail_chimp"], ["src", "assets/images/brands/slack.png", "alt", "slack"], [1, "dropdown", "d-none", "d-lg-inline-block", "me-1"], ["type", "button", "data-toggle", "fullscreen", 1, "btn", "header-item", "noti-icon", 3, "click"], [1, "bx", "bx-fullscreen"], ["ngbDropdown", "", 1, "dropdown", "d-inline-block"], ["type", "button", "id", "page-header-notifications-dropdown", "ngbDropdownToggle", "", 1, "btn", "header-item", "noti-icon"], [1, "bx", "bx-bell", "bx-tada"], [1, "badge", "bg-danger", "rounded-pill"], ["ngbDropdownMenu", "", "aria-labelledby", "page-header-notifications-dropdown", 1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-end", "p-0"], [1, "p-3"], [1, "row", "align-items-center"], [1, "m-0"], [2, "position", "relative", "height", "230px"], ["href", "javascript: void(0);", 1, "text-reset", "notification-item"], [1, "media", "d-flex", "pl-3", "pt-3"], [1, "avatar-xs", "me-3"], [1, "avatar-title", "bg-primary", "rounded-circle", "font-size-16"], [1, "bx", "bx-cart"], [1, "media-body"], [1, "mt-0", "mb-1"], [1, "font-size-12", "text-muted"], [1, "mb-1"], [1, "mb-0"], [1, "mdi", "mdi-clock-outline"], ["src", "assets/images/users/avatar-3.jpg", "alt", "user-pic", 1, "me-3", "rounded-circle", "avatar-xs"], [1, "avatar-title", "bg-success", "rounded-circle", "font-size-16"], [1, "bx", "bx-badge-check"], ["src", "assets/images/users/avatar-4.jpg", "alt", "user-pic", 1, "me-3", "rounded-circle", "avatar-xs"], [1, "p-2", "border-top", "d-grid"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-link", "font-size-12", "text-center", "text-uppercase"], ["ngbDropdown", "", 1, "dropdown", "d-inline-block", 2, "margin-right", "15px"], ["type", "button", "id", "page-header-user-dropdown", "routerLink", "/profile-page", 1, "btn", "header-item"], ["src", "assets/images/users/avatar-1.jpg", "alt", "Header Avatar", 1, "rounded-circle", "header-profile-user", 3, "click"], [1, "d-none", "d-xl-inline-block", "ms-1"], [1, "dropdown", "d-none", "d-lg-inline-block", 2, "padding-left", "15px", "border-left", "1px solid #f8f8fb"], [1, "bx", "bx-power-off"], [1, "topnav"], [1, "container-fluid"], [1, "navbar", "navbar-light", "navbar-expand-lg", "topnav-menu", "active"], ["id", "topnav-menu-content", 1, "collapse", "navbar-collapse", "d-flex", "justify-content-between", "active"], [1, "navbar-nav", "d-flex"], [4, "ngFor", "ngForOf"], [1, "navbar-nav", "d-flex", "justify-content-between"], [1, "nav-item", "dropdown"], ["class", "nav-link dropdown-toggle arrow-none", "href", "javascript: void(0);", "id", "topnav-components", "role", "button", 3, "routerLink", 4, "ngIf"], ["class", "nav-link dropdown-toggle arrow-none", "href", "javascript: void(0);", "id", "topnav-components", "role", "button", 3, "click", 4, "ngIf"], ["class", "dropdown-menu", "aria-labelledby", "topnav-dashboard", 3, "ngClass", 4, "ngIf"], ["href", "javascript: void(0);", "id", "topnav-components", "role", "button", 1, "nav-link", "dropdown-toggle", "arrow-none", 3, "routerLink"], ["class", "arrow-down", 4, "ngIf"], [1, "arrow-down"], ["href", "javascript: void(0);", "id", "topnav-components", "role", "button", 1, "nav-link", "dropdown-toggle", "arrow-none", 3, "click"], ["aria-labelledby", "topnav-dashboard", 1, "dropdown-menu", 3, "ngClass"], ["ngFor", "", 3, "ngForOf"], ["class", "col dropdown-item side-nav-link-ref", "routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngIf"], [4, "ngIf"], ["class", "dropdown", 4, "ngIf"], ["routerLinkActive", "active", 1, "col", "dropdown-item", "side-nav-link-ref", 3, "routerLink", "routerLinkActiveOptions"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-lg-4"], ["routerLinkActive", "active", 1, "dropdown-item", "side-nav-link-ref", 3, "routerLink"], [1, "dropdown"], ["href", "javascript: void(0);", 1, "dropdown-item", "dropdown-toggle", 3, "click"], [1, "dropdown-menu"], ["class", "dropdown-item side-nav-link-ref", "href", "javascript: void(0);", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["href", "javascript: void(0);", "routerLinkActive", "active", 1, "dropdown-item", "side-nav-link-ref", 3, "routerLink"]], template: function HorizontaltopbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "a", 8)(10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_button_click_14_listener() { return ctx.toggleMenubar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 2)(17, "div", 12)(18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 15)(21, "div", 16)(22, "div", 17)(23, "div", 18)(24, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 18)(29, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Bitbucket");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 18)(34, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Dribbble");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 17)(39, "div", 18)(40, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Dropbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 18)(45, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](46, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "Mail Chimp");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 18)(50, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](51, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "Slack");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 26)(55, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_button_click_55_listener() { return ctx.fullscreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](56, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 29)(58, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](59, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "div", 33)(63, "div", 34)(64, "div", 35)(65, "div", 18)(66, "h6", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](68, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "ngx-simplebar", 37)(70, "a", 38)(71, "div", 39)(72, "div", 40)(73, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](74, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "div", 43)(76, "h6", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "div", 45)(80, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](82, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](84, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](86, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "a", 38)(88, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](89, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "div", 43)(91, "h6", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "div", 45)(95, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](97, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](99, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](101, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "a", 38)(103, "div", 39)(104, "div", 40)(105, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](106, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](107, "div", 43)(108, "h6", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](110, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](111, "div", 45)(112, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](114, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](115, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](116, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](118, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](119, "a", 38)(120, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](121, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "div", 43)(123, "h6", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](125, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](126, "div", 45)(127, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](128);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](129, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](130, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](131, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](132);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](133, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](134, "div", 53)(135, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](136);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](137, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](138, "div", 55)(139, "button", 56)(140, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_img_click_140_listener() { return ctx.profile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](141, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](142, "Pratiksha Borkar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](143, "div", 59)(144, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_button_click_144_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](145, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](146, "div", 61)(147, "div", 62)(148, "nav", 63)(149, "div", 64)(150, "ul", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](151, HorizontaltopbarComponent_ng_container_151_Template, 5, 3, "ng-container", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](152, "ul", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](153, HorizontaltopbarComponent_ng_container_153_Template, 5, 3, "ng-container", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](68, 16, "HEADER.NOTIFICATIONS.TITLE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](78, 18, "HEADER.NOTIFICATIONS.FIRST.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](82, 20, "HEADER.NOTIFICATIONS.FIRST.TEXT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](86, 22, "HEADER.NOTIFICATIONS.FIRST.TIME"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](93, 24, "HEADER.NOTIFICATIONS.SECOND.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](97, 26, "HEADER.NOTIFICATIONS.SECOND.TEXT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](101, 28, "HEADER.NOTIFICATIONS.SECOND.TIME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](110, 30, "HEADER.NOTIFICATIONS.THIRD.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](114, 32, "HEADER.NOTIFICATIONS.THIRD.TEXT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](118, 34, "HEADER.NOTIFICATIONS.THIRD.TIME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](125, 36, "HEADER.NOTIFICATIONS.FOUR.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](129, 38, "HEADER.NOTIFICATIONS.FOUR.TEXT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](133, 40, "HEADER.NOTIFICATIONS.FOUR.TIME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](137, 42, "HEADER.NOTIFICATIONS.VIEW_ALL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.menuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.menuItems_Static);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkActive, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavbar, simplebar_angular__WEBPACK_IMPORTED_MODULE_11__.SimplebarAngularComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3Jpem9udGFsdG9wYmFyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 43161:
/*!**************************************************!*\
  !*** ./src/app/layouts/horizontaltopbar/menu.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MENU": () => (/* binding */ MENU),
/* harmony export */   "MENU_STATIC": () => (/* binding */ MENU_STATIC)
/* harmony export */ });
const MENU = [
    {
        id: 1,
        label: 'Dashboard',
        icon: 'bx bx-home',
        link: '/dashboard'
    },
    {
        id: 1,
        label: 'Venues',
        icon: 'bx bx-building-house',
        link: '/venues'
    },
    {
        id: 1,
        label: 'Enquiries',
        icon: 'bx bx-bookmarks',
        link: '/enquiries'
    },
    {
        id: 1,
        label: 'Messages',
        icon: 'bx bx-chat',
        link: '/messages'
    },
];
const MENU_STATIC = [
    {
        id: 1,
        label: 'Terms & Conditions',
        icon: 'bx bx-receipt',
        link: '/Terms & Conditions '
    },
    {
        id: 1,
        label: 'Privacy Policy',
        icon: 'bx bx-check-shield',
        link: '/Privacy Policy '
    },
    {
        id: 1,
        label: 'Help & Support',
        icon: 'bx bx-support',
        link: '/Help & Support'
    }
];


/***/ }),

/***/ 76774:
/*!*********************************************!*\
  !*** ./src/app/layouts/layout.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _layouts_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts.model */ 66091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/event.service */ 13117);
/* harmony import */ var _horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./horizontal/horizontal.component */ 18807);




class LayoutComponent {
    constructor(eventService) {
        this.eventService = eventService;
    }
    ngOnInit() {
        // default settings
        this.layoutType = _layouts_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_VERTICAL;
        this.layoutwidth = _layouts_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_WIDTH;
        this.topbar = _layouts_model__WEBPACK_IMPORTED_MODULE_0__.TOPBAR;
        // listen to event and change the layout, theme, etc
        this.eventService.subscribe('changeLayout', (layout) => {
            this.layoutType = layout;
        });
        this.LayoutWidth(this.layoutwidth);
        this.eventService.subscribe('changeWidth', (width) => {
            this.layoutwidth = width;
            this.LayoutWidth(this.layoutwidth);
        });
    }
    ngAfterViewInit() {
    }
    LayoutWidth(width) {
        switch (width) {
            case "fluid":
                document.body.setAttribute("data-layout-size", "fluid");
                document.body.classList.remove("vertical-collpsed");
                document.body.removeAttribute("data-layout-scrollable");
                break;
            case "boxed":
                document.body.setAttribute("data-layout-size", "boxed");
                document.body.classList.add("vertical-collpsed");
                document.body.removeAttribute("data-layout-scrollable");
                break;
            case "scrollable":
                document.body.removeAttribute("data-layout-size");
                document.body.setAttribute("data-layout-scrollable", "true");
                document.body.setAttribute("data-layout-size", "fluid");
                document.body.classList.remove("right-bar-enabled", "vertical-collpsed");
            default:
                document.body.setAttribute("data-layout-size", "fluid");
                break;
        }
    }
    /**
     * Check if the vertical layout is requested
     */
    isVerticalLayoutRequested() {
        return this.layoutType === _layouts_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_VERTICAL;
    }
    /**
     * Check if the horizontal layout is requested
     */
    isHorizontalLayoutRequested() {
        return this.layoutType === _layouts_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_HORIZONTAL;
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_1__.EventService)); };
LayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 1, vars: 0, template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-horizontal");
    } }, dependencies: [_horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_2__.HorizontalComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 66091:
/*!******************************************!*\
  !*** ./src/app/layouts/layouts.model.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LAYOUT_HORIZONTAL": () => (/* binding */ LAYOUT_HORIZONTAL),
/* harmony export */   "LAYOUT_VERTICAL": () => (/* binding */ LAYOUT_VERTICAL),
/* harmony export */   "LAYOUT_WIDTH": () => (/* binding */ LAYOUT_WIDTH),
/* harmony export */   "SIDEBAR_TYPE": () => (/* binding */ SIDEBAR_TYPE),
/* harmony export */   "TOPBAR": () => (/* binding */ TOPBAR)
/* harmony export */ });
// export layout related constants
const LAYOUT_VERTICAL = 'vertical';
const LAYOUT_HORIZONTAL = 'horizontal';
const LAYOUT_WIDTH = 'fluid';
const SIDEBAR_TYPE = 'dark';
const TOPBAR = 'dark';


/***/ }),

/***/ 52372:
/*!*******************************************!*\
  !*** ./src/app/layouts/layouts.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutsModule": () => (/* binding */ LayoutsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! simplebar-angular */ 62014);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-click-outside */ 70128);
/* harmony import */ var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/ui/ui.module */ 19668);
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ 76774);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 79504);
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./topbar/topbar.component */ 24016);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ 84158);
/* harmony import */ var _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rightsidebar/rightsidebar.component */ 56034);
/* harmony import */ var _horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./horizontal/horizontal.component */ 18807);
/* harmony import */ var _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vertical/vertical.component */ 27198);
/* harmony import */ var _horizontaltopbar_horizontaltopbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./horizontaltopbar/horizontaltopbar.component */ 45566);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/services/language.service */ 77524);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);

















class LayoutsModule {
}
LayoutsModule.ɵfac = function LayoutsModule_Factory(t) { return new (t || LayoutsModule)(); };
LayoutsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: LayoutsModule });
LayoutsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [_core_services_language_service__WEBPACK_IMPORTED_MODULE_10__.LanguageService, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbDropdown], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbDropdownModule,
        ng_click_outside__WEBPACK_IMPORTED_MODULE_0__.ClickOutsideModule,
        _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_1__.UIModule,
        simplebar_angular__WEBPACK_IMPORTED_MODULE_16__.SimplebarAngularModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](LayoutsModule, { declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent, _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_4__.TopbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent, _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_6__.RightsidebarComponent, _horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_7__.HorizontalComponent, _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_8__.VerticalComponent, _horizontaltopbar_horizontaltopbar_component__WEBPACK_IMPORTED_MODULE_9__.HorizontaltopbarComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbDropdownModule,
        ng_click_outside__WEBPACK_IMPORTED_MODULE_0__.ClickOutsideModule,
        _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_1__.UIModule,
        simplebar_angular__WEBPACK_IMPORTED_MODULE_16__.SimplebarAngularModule] }); })();


/***/ }),

/***/ 56034:
/*!****************************************************************!*\
  !*** ./src/app/layouts/rightsidebar/rightsidebar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RightsidebarComponent": () => (/* binding */ RightsidebarComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _layouts_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts.model */ 66091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/event.service */ 13117);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/auth.service */ 90263);
/* harmony import */ var src_app_core_services_authfake_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/authfake.service */ 92293);







/**
 * Rightsidebar component
 */
class RightsidebarComponent {
    constructor(eventService, router, authService, authFackservice) {
        this.eventService = eventService;
        this.router = router;
        this.authService = authService;
        this.authFackservice = authFackservice;
    }
    ngOnInit() {
        this.width = _layouts_model__WEBPACK_IMPORTED_MODULE_1__.LAYOUT_WIDTH;
        this.sidebartype = _layouts_model__WEBPACK_IMPORTED_MODULE_1__.SIDEBAR_TYPE;
        this.topbar = _layouts_model__WEBPACK_IMPORTED_MODULE_1__.TOPBAR;
        /**
         * horizontal-vertical layput set
         */
        this.attribute = document.body.getAttribute('data-layout');
        const vertical = document.getElementById('is-layout');
        if (vertical != null) {
            vertical.setAttribute('checked', 'true');
        }
        if (this.attribute == 'horizontal') {
            vertical?.removeAttribute('checked');
        }
    }
    /**
     * Hide the sidebar
     */
    hide() {
        document.body.classList.remove('right-bar-enabled');
    }
    /**
     * Change Topbar
     */
    changeTopbar(topbar) {
        this.topbar = topbar;
        this.eventService.broadcast('changeTopbar', topbar);
    }
    /**
     * Change the layout onclick
     * @param layout Change the layout
     */
    changeLayout(layout) {
        if (layout.target.checked == true)
            this.eventService.broadcast('changeLayout', 'vertical');
        else
            this.eventService.broadcast('changeLayout', 'horizontal');
    }
    changeWidth(width) {
        this.width = width;
        this.eventService.broadcast('changeWidth', width);
    }
    changeSidebartype(sidebar) {
        this.sidebartype = sidebar;
        this.eventService.broadcast('changeSidebartype', sidebar);
    }
    logout() {
        debugger;
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.defaultauth === 'firebase') {
            this.authService.logout();
        }
        else {
            this.authFackservice.logout();
        }
        this.router.navigate(['/account/login']);
    }
}
RightsidebarComponent.ɵfac = function RightsidebarComponent_Factory(t) { return new (t || RightsidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_authfake_service__WEBPACK_IMPORTED_MODULE_4__.AuthfakeauthenticationService)); };
RightsidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: RightsidebarComponent, selectors: [["app-rightsidebar"]], decls: 0, vars: 0, template: function RightsidebarComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaWdodHNpZGViYXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1121:
/*!*****************************************!*\
  !*** ./src/app/layouts/sidebar/menu.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MENU": () => (/* binding */ MENU)
/* harmony export */ });
const MENU = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'bx-home-circle',
        subItems: [
            {
                id: 3,
                label: 'MENUITEMS.DASHBOARDS.LIST.DEFAULT',
                link: '/dashboard',
                parentId: 2
            },
            {
                id: 4,
                label: 'MENUITEMS.DASHBOARDS.LIST.SAAS',
                link: '/dashboard',
                parentId: 2
            },
            {
                id: 5,
                label: 'MENUITEMS.DASHBOARDS.LIST.CRYPTO',
                link: '/dashboard',
                parentId: 2
            },
            {
                id: 6,
                label: 'MENUITEMS.DASHBOARDS.LIST.BLOG',
                link: '/dashboard',
                parentId: 2
            },
            {
                id: 7,
                label: 'MENUITEMS.DASHBOARDS.LIST.JOBS',
                link: '/dashboard',
                parentId: 2,
                badge: {
                    variant: 'success',
                    text: 'MENUITEMS.FILEMANAGER.BADGE',
                },
            },
        ]
    },
    {
        id: 8,
        isLayout: true
    },
    {
        id: 9,
        label: 'MENUITEMS.APPS.TEXT',
        isTitle: true
    },
    {
        id: 10,
        label: 'MENUITEMS.CALENDAR.TEXT',
        icon: 'bx-calendar',
        link: '/dashboard',
    },
    {
        id: 11,
        label: 'MENUITEMS.CHAT.TEXT',
        icon: 'bx-chat',
        link: '/dashboard',
    },
    {
        id: 12,
        label: 'MENUITEMS.FILEMANAGER.TEXT',
        icon: 'bx-file',
        link: '/dashboard',
    },
    {
        id: 13,
        label: 'MENUITEMS.ECOMMERCE.TEXT',
        icon: 'bx-store',
        subItems: [
            {
                id: 14,
                label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTS',
                link: '/dashboard',
                parentId: 13
            },
            {
                id: 15,
                label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTDETAIL',
                link: '/dashboard',
                parentId: 13
            },
            {
                id: 16,
                label: 'MENUITEMS.ECOMMERCE.LIST.ORDERS',
                link: '/dashboard',
                parentId: 13
            },
            {
                id: 17,
                label: 'MENUITEMS.ECOMMERCE.LIST.CUSTOMERS',
                link: '/dashboard',
                parentId: 13
            },
            {
                id: 18,
                label: 'MENUITEMS.ECOMMERCE.LIST.CART',
                link: '/dashboard',
                parentId: 13
            },
            {
                id: 19,
                label: 'MENUITEMS.ECOMMERCE.LIST.CHECKOUT',
                link: '/dashboard',
                parentId: 13
            },
            {
                id: 20,
                label: 'MENUITEMS.ECOMMERCE.LIST.SHOPS',
                link: '/dashboard',
                parentId: 13
            },
            {
                id: 21,
                label: 'MENUITEMS.ECOMMERCE.LIST.ADDPRODUCT',
                link: '/dashboard',
                parentId: 13
            },
        ]
    },
    {
        id: 22,
        label: 'MENUITEMS.CRYPTO.TEXT',
        icon: 'bx-bitcoin',
        subItems: [
            {
                id: 23,
                label: 'MENUITEMS.CRYPTO.LIST.WALLET',
                link: '/dashboard',
                parentId: 22
            },
            {
                id: 24,
                label: 'MENUITEMS.CRYPTO.LIST.BUY/SELL',
                link: '/dashboard',
                parentId: 22
            },
            {
                id: 25,
                label: 'MENUITEMS.CRYPTO.LIST.EXCHANGE',
                link: '/dashboard',
                parentId: 22
            },
            {
                id: 26,
                label: 'MENUITEMS.CRYPTO.LIST.LENDING',
                link: '/dashboard',
                parentId: 22
            },
            {
                id: 27,
                label: 'MENUITEMS.CRYPTO.LIST.ORDERS',
                link: '/dashboard',
                parentId: 22
            },
            {
                id: 28,
                label: 'MENUITEMS.CRYPTO.LIST.KYCAPPLICATION',
                link: '/dashboard',
                parentId: 22
            },
            {
                id: 29,
                label: 'MENUITEMS.CRYPTO.LIST.ICOLANDING',
                link: '/dashboard',
                parentId: 22
            }
        ]
    },
    {
        id: 30,
        label: 'MENUITEMS.EMAIL.TEXT',
        icon: 'bx-envelope',
        subItems: [
            {
                id: 31,
                label: 'MENUITEMS.EMAIL.LIST.INBOX',
                link: '/dashboard',
                parentId: 30
            },
            {
                id: 32,
                label: 'MENUITEMS.EMAIL.LIST.READEMAIL',
                link: '/dashboard',
                parentId: 30
            },
            {
                id: 33,
                label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.TEXT',
                badge: {
                    variant: 'success',
                    text: 'MENUITEMS.EMAIL.LIST.TEMPLATE.BADGE',
                },
                parentId: 30,
                subItems: [
                    {
                        id: 34,
                        label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.BASIC',
                        link: '/dashboard',
                        parentId: 30
                    },
                    {
                        id: 35,
                        label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.ALERT',
                        link: '/dashboard',
                        parentId: 30
                    },
                    {
                        id: 36,
                        label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.BILLING',
                        link: '/dashboard',
                        parentId: 30
                    }
                ]
            }
        ]
    },
    {
        id: 37,
        label: 'MENUITEMS.INVOICES.TEXT',
        icon: 'bx-receipt',
        subItems: [
            {
                id: 38,
                label: 'MENUITEMS.INVOICES.LIST.INVOICELIST',
                link: '/dashboard',
                parentId: 37
            },
            {
                id: 39,
                label: 'MENUITEMS.INVOICES.LIST.INVOICEDETAIL',
                link: '/dashboard',
                parentId: 37
            },
        ]
    },
    {
        id: 40,
        label: 'MENUITEMS.PROJECTS.TEXT',
        icon: 'bx-briefcase-alt-2',
        subItems: [
            {
                id: 41,
                label: 'MENUITEMS.PROJECTS.LIST.GRID',
                link: '/dashboard',
                parentId: 40
            },
            {
                id: 42,
                label: 'MENUITEMS.PROJECTS.LIST.PROJECTLIST',
                link: '/dashboard',
                parentId: 40
            },
            {
                id: 43,
                label: 'MENUITEMS.PROJECTS.LIST.OVERVIEW',
                link: '/dashboard',
                parentId: 40
            },
            {
                id: 44,
                label: 'MENUITEMS.PROJECTS.LIST.CREATE',
                link: '/dashboard',
                parentId: 40
            }
        ]
    },
    {
        id: 45,
        label: 'MENUITEMS.TASKS.TEXT',
        icon: 'bx-task',
        subItems: [
            {
                id: 46,
                label: 'MENUITEMS.TASKS.LIST.TASKLIST',
                link: '/dashboard',
                parentId: 45
            },
            {
                id: 47,
                label: 'MENUITEMS.TASKS.LIST.KANBAN',
                link: '/dashboard',
                parentId: 45
            },
            {
                id: 48,
                label: 'MENUITEMS.TASKS.LIST.CREATETASK',
                link: '/dashboard',
                parentId: 45
            }
        ]
    },
    {
        id: 49,
        label: 'MENUITEMS.CONTACTS.TEXT',
        icon: 'bxs-user-detail',
        subItems: [
            {
                id: 50,
                label: 'MENUITEMS.CONTACTS.LIST.USERGRID',
                link: '/dashboard',
                parentId: 49
            },
            {
                id: 51,
                label: 'MENUITEMS.CONTACTS.LIST.USERLIST',
                link: '/dashboard',
                parentId: 49
            },
            {
                id: 52,
                label: 'MENUITEMS.CONTACTS.LIST.PROFILE',
                link: '/dashboard',
                parentId: 49
            }
        ]
    },
    {
        id: 53,
        label: 'MENUITEMS.BLOG.TEXT',
        icon: 'bx-file',
        subItems: [
            {
                id: 54,
                label: 'MENUITEMS.BLOG.LIST.BLOGLIST',
                link: '/dashboard',
                parentId: 53
            },
            {
                id: 55,
                label: 'MENUITEMS.BLOG.LIST.BLOGGRID',
                link: '/dashboard',
                parentId: 53
            },
            {
                id: 56,
                label: 'MENUITEMS.BLOG.LIST.DETAIL',
                link: '/dashboard',
                parentId: 53
            },
        ]
    },
    {
        id: 57,
        label: 'MENUITEMS.JOBS.TEXT',
        icon: 'bx-briefcase-alt',
        subItems: [
            {
                id: 58,
                label: 'MENUITEMS.JOBS.LIST.JOBLIST',
                link: '/dashboard',
                parentId: 57
            },
            {
                id: 59,
                label: 'MENUITEMS.JOBS.LIST.JOBGRID',
                link: '/dashboard',
                parentId: 57
            },
            {
                id: 60,
                label: 'MENUITEMS.JOBS.LIST.APPLYJOB',
                link: '/dashboard',
                parentId: 57
            },
            {
                id: 61,
                label: 'MENUITEMS.JOBS.LIST.JOBDETAILS',
                link: '/dashboard',
                parentId: 57
            },
            {
                id: 62,
                label: 'MENUITEMS.JOBS.LIST.JOBCATEGORIES',
                link: '/dashboard',
                parentId: 57
            },
            {
                id: 63,
                label: 'MENUITEMS.JOBS.LIST.CANDIDATE.TEXT',
                badge: {
                    variant: 'success',
                    text: 'MENUITEMS.EMAIL.LIST.TEMPLATE.BADGE',
                },
                parentId: 57,
                subItems: [
                    {
                        id: 64,
                        label: 'MENUITEMS.JOBS.LIST.CANDIDATE.LIST.LIST',
                        link: '/dashboard',
                        parentId: 57
                    },
                    {
                        id: 65,
                        label: 'MENUITEMS.JOBS.LIST.CANDIDATE.LIST.OVERVIEW',
                        link: '/dashboard',
                        parentId: 57
                    }
                ]
            }
        ]
    },
    {
        id: 66,
        label: 'MENUITEMS.PAGES.TEXT',
        isTitle: true
    },
    {
        id: 67,
        label: 'MENUITEMS.AUTHENTICATION.TEXT',
        icon: 'bx-user-circle',
        subItems: [
            {
                id: 68,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN',
                link: '/dashboard',
                parentId: 67
            },
            {
                id: 69,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN2',
                link: '/dashboard',
                parentId: 67
            },
            {
                id: 70,
                label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER',
                link: '/dashboard',
                parentId: 67
            },
            {
                id: 71,
                label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER2',
                link: '/dashboard',
                parentId: 67
            },
            {
                id: 72,
                label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD',
                link: '/dashboard',
                parentId: 67
            },
            {
                id: 73,
                label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD2',
                link: '/dashboard',
                parentId: 67
            },
            {
                id: 74,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
                link: '/dashboard',
                parentId: 67
            },
            {
                id: 75,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN2',
                link: '/dashboard',
                parentId: 67
            },
            {
                id: 76,
                label: 'MENUITEMS.AUTHENTICATION.LIST.CONFIRMMAIL',
                link: '/dashboard',
                parentId: 67
            },
            {
                id: 77,
                label: 'MENUITEMS.AUTHENTICATION.LIST.CONFIRMMAIL2',
                link: '/dashboard',
                parentId: 67
            },
            {
                id: 78,
                label: 'MENUITEMS.AUTHENTICATION.LIST.EMAILVERIFICATION',
                link: '/dashboard',
                parentId: 67
            },
            {
                id: 79,
                label: 'MENUITEMS.AUTHENTICATION.LIST.EMAILVERIFICATION2',
                link: '/dashboard',
                parentId: 67
            },
            {
                id: 80,
                label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION',
                link: '/dashboard',
                parentId: 67
            },
            {
                id: 81,
                label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION2',
                link: '/dashboard',
                parentId: 67
            }
        ]
    },
    {
        id: 82,
        label: 'MENUITEMS.UTILITY.TEXT',
        icon: 'bx-file',
        subItems: [
            {
                id: 83,
                label: 'MENUITEMS.UTILITY.LIST.STARTER',
                link: '/dashboard',
                parentId: 82
            },
            {
                id: 84,
                label: 'MENUITEMS.UTILITY.LIST.MAINTENANCE',
                link: '/dashboard',
                parentId: 82
            },
            {
                id: 85,
                label: 'Coming Soon',
                link: '/dashboard',
                parentId: 82
            },
            {
                id: 86,
                label: 'MENUITEMS.UTILITY.LIST.TIMELINE',
                link: '/dashboard',
                parentId: 82
            },
            {
                id: 87,
                label: 'MENUITEMS.UTILITY.LIST.FAQS',
                link: '/dashboard',
                parentId: 82
            },
            {
                id: 88,
                label: 'MENUITEMS.UTILITY.LIST.PRICING',
                link: '/dashboard',
                parentId: 82
            },
            {
                id: 89,
                label: 'MENUITEMS.UTILITY.LIST.ERROR404',
                link: '/dashboard',
                parentId: 82
            },
            {
                id: 90,
                label: 'MENUITEMS.UTILITY.LIST.ERROR500',
                link: '/dashboard',
                parentId: 82
            },
        ]
    },
    {
        id: 91,
        label: 'MENUITEMS.COMPONENTS.TEXT',
        isTitle: true
    },
    {
        id: 92,
        label: 'MENUITEMS.UIELEMENTS.TEXT',
        icon: 'bx-tone',
        subItems: [
            {
                id: 93,
                label: 'MENUITEMS.UIELEMENTS.LIST.ALERTS',
                link: '/dashboard',
                parentId: 92
            },
            {
                id: 94,
                label: 'MENUITEMS.UIELEMENTS.LIST.BUTTONS',
                link: '/dashboard',
                parentId: 92
            },
            {
                id: 95,
                label: 'MENUITEMS.UIELEMENTS.LIST.CARDS',
                link: '/dashboard',
                parentId: 92
            },
            {
                id: 96,
                label: 'MENUITEMS.UIELEMENTS.LIST.CAROUSEL',
                link: '/dashboard',
                parentId: 92
            },
            {
                id: 97,
                label: 'MENUITEMS.UIELEMENTS.LIST.DROPDOWNS',
                link: '/dashboard',
                parentId: 92
            },
            {
                id: 98,
                label: 'MENUITEMS.UIELEMENTS.LIST.GRID',
                link: '/dashboard',
                parentId: 92
            },
            {
                id: 99,
                label: 'MENUITEMS.UIELEMENTS.LIST.IMAGES',
                link: '/dashboard',
                parentId: 92
            },
            {
                id: 100,
                label: 'MENUITEMS.UIELEMENTS.LIST.LIGHTBOX',
                link: '/dashboard',
                parentId: 92
            },
            {
                id: 101,
                label: 'MENUITEMS.UIELEMENTS.LIST.MODALS',
                link: '/dashboard',
                parentId: 92
            },
            {
                id: 102,
                label: 'MENUITEMS.UIELEMENTS.LIST.RANGESLIDER',
                link: '/dashboard',
                parentId: 92
            },
            {
                id: 103,
                label: 'MENUITEMS.UIELEMENTS.LIST.PROGRESSBAR',
                link: '/dashboard',
                parentId: 92
            },
            {
                id: 104,
                label: 'MENUITEMS.UIELEMENTS.LIST.PLACEHOLDER',
                link: '/dashboard',
                parentId: 92
            },
            {
                id: 105,
                label: 'MENUITEMS.UIELEMENTS.LIST.SWEETALERT',
                link: '/dashboard',
                parentId: 92
            },
            {
                id: 106,
                label: 'MENUITEMS.UIELEMENTS.LIST.TABS',
                link: '/dashboard',
                parentId: 92
            },
            {
                id: 107,
                label: 'MENUITEMS.UIELEMENTS.LIST.TYPOGRAPHY',
                link: '/dashboard',
                parentId: 92
            },
            {
                id: 108,
                label: 'MENUITEMS.UIELEMENTS.LIST.TOASTS',
                link: '/dashboard',
                parentId: 92
            },
            {
                id: 109,
                label: 'MENUITEMS.UIELEMENTS.LIST.VIDEO',
                link: '/dashboard',
                parentId: 92
            },
            {
                id: 110,
                label: 'MENUITEMS.UIELEMENTS.LIST.GENERAL',
                link: '/dashboard',
                parentId: 92
            },
            {
                id: 111,
                label: 'MENUITEMS.UIELEMENTS.LIST.COLORS',
                link: '/dashboard',
                parentId: 92
            },
            {
                id: 112,
                label: 'MENUITEMS.UIELEMENTS.LIST.RATING',
                link: '/dashboard',
                parentId: 92
            },
            {
                id: 113,
                label: 'MENUITEMS.UIELEMENTS.LIST.NOTIFICATION',
                link: '/dashboard',
                parentId: 92
            },
            {
                id: 114,
                label: 'MENUITEMS.UIELEMENTS.LIST.UTILITIES',
                link: '/dashboard',
                parentId: 92
            },
            {
                id: 115,
                label: 'MENUITEMS.UIELEMENTS.LIST.CROPPER',
                link: '/dashboard',
                parentId: 92
            },
        ]
    },
    {
        id: 116,
        label: 'MENUITEMS.FORMS.TEXT',
        icon: 'bxs-eraser',
        badge: {
            variant: 'danger',
            text: 'MENUITEMS.FORMS.BADGE',
        },
        subItems: [
            {
                id: 117,
                label: 'MENUITEMS.FORMS.LIST.ELEMENTS',
                link: '/dashboard',
                parentId: 116
            },
            {
                id: 118,
                label: 'MENUITEMS.FORMS.LIST.LAYOUTS',
                link: '/dashboard',
                parentId: 116
            },
            {
                id: 119,
                label: 'MENUITEMS.FORMS.LIST.VALIDATION',
                link: '/dashboard',
                parentId: 116
            },
            {
                id: 120,
                label: 'MENUITEMS.FORMS.LIST.ADVANCED',
                link: '/dashboard',
                parentId: 116
            },
            {
                id: 121,
                label: 'MENUITEMS.FORMS.LIST.EDITOR',
                link: '/dashboard',
                parentId: 116
            },
            {
                id: 122,
                label: 'MENUITEMS.FORMS.LIST.FILEUPLOAD',
                link: '/dashboard',
                parentId: 116
            },
            {
                id: 123,
                label: 'MENUITEMS.FORMS.LIST.REPEATER',
                link: '/dashboard',
                parentId: 116
            },
            {
                id: 124,
                label: 'MENUITEMS.FORMS.LIST.WIZARD',
                link: '/dashboard',
                parentId: 116
            },
            {
                id: 125,
                label: 'MENUITEMS.FORMS.LIST.MASK',
                link: '/dashboard',
                parentId: 116
            }
        ]
    },
    {
        id: 126,
        icon: 'bx-list-ul',
        label: 'MENUITEMS.TABLES.TEXT',
        subItems: [
            {
                id: 127,
                label: 'MENUITEMS.TABLES.LIST.BASIC',
                link: '/dashboard',
                parentId: 126
            },
            {
                id: 128,
                label: 'MENUITEMS.TABLES.LIST.DataTables',
                link: '/dashboard',
                parentId: 126
            },
            {
                id: 129,
                label: 'MENUITEMS.TABLES.LIST.EditTableTables',
                link: '/dashboard',
                parentId: 126
            }
        ]
    },
    {
        id: 130,
        icon: 'bxs-bar-chart-alt-2',
        label: 'MENUITEMS.CHARTS.TEXT',
        subItems: [
            {
                id: 131,
                label: 'MENUITEMS.CHARTS.LIST.APEX',
                link: '/dashboard',
                parentId: 130
            },
            {
                id: 132,
                label: 'MENUITEMS.CHARTS.LIST.CHARTJS',
                link: '/dashboard',
                parentId: 131
            },
            {
                id: 133,
                label: 'MENUITEMS.CHARTS.LIST.CHARTIST',
                link: '/dashboard',
                parentId: 131
            },
            {
                id: 134,
                label: 'MENUITEMS.CHARTS.LIST.ECHART',
                link: '/dashboard',
                parentId: 131
            }
        ]
    },
    {
        id: 135,
        label: 'MENUITEMS.ICONS.TEXT',
        icon: 'bx-aperture',
        subItems: [
            {
                id: 136,
                label: 'MENUITEMS.ICONS.LIST.BOXICONS',
                link: '/dashboard',
                parentId: 135
            },
            {
                id: 137,
                label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
                link: '/dashboard',
                parentId: 135
            },
            {
                id: 138,
                label: 'MENUITEMS.ICONS.LIST.DRIPICONS',
                link: '/dashboard',
                parentId: 135
            },
            {
                id: 139,
                label: 'MENUITEMS.ICONS.LIST.FONTAWESOME',
                link: '/dashboard',
                parentId: 135
            },
        ]
    },
    {
        id: 140,
        label: 'MENUITEMS.MAPS.TEXT',
        icon: 'bx-map',
        subItems: [
            {
                id: 141,
                label: 'MENUITEMS.MAPS.LIST.GOOGLEMAP',
                link: '/dashboard',
                parentId: 140
            },
            {
                id: 142,
                label: 'MENUITEMS.MAPS.LIST.LEAFLETMAP',
                link: '/dashboard',
                parentId: 140
            }
        ]
    },
    {
        id: 143,
        label: 'MENUITEMS.MULTILEVEL.TEXT',
        icon: 'bx-share-alt',
        subItems: [
            {
                id: 144,
                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.1',
                link: '/dashboard',
                parentId: 143
            },
            {
                id: 145,
                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.2',
                parentId: 143,
                subItems: [
                    {
                        id: 146,
                        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.1',
                        parentId: 145,
                    },
                    {
                        id: 147,
                        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.2',
                        parentId: 145,
                    }
                ]
            },
        ]
    }
];


/***/ }),

/***/ 79504:
/*!******************************************************!*\
  !*** ./src/app/layouts/sidebar/sidebar.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! metismenujs/dist/metismenujs */ 94138);
/* harmony import */ var metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ 1121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/event.service */ 13117);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! simplebar-angular */ 62014);











const _c0 = ["componentRef"];
const _c1 = ["sideMenu"];
function SidebarComponent_ng_template_0_ng_container_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, item_r7.label));
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_a_1_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("bx ", item_r7.icon, "");
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_a_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("badge rounded-pill float-end bg-", item_r7.badge.variant, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 4, item_r7.badge.text));
} }
const _c2 = function (a0, a1) { return { "has-arrow": a0, "has-dropdown": a1 }; };
function SidebarComponent_ng_template_0_ng_container_3_li_2_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_ng_template_0_ng_container_3_li_2_a_1_i_1_Template, 1, 3, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SidebarComponent_ng_template_0_ng_container_3_li_2_a_1_span_5_Template, 3, 6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](6, _c2, !item_r7.badge, item_r7.badge));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r7.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 4, item_r7.label), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r7.badge);
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_a_2_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("bx ", item_r7.icon, "");
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_a_2_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("badge rounded-pill bg-", item_r7.badge.variant, " float-end");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 4, item_r7.badge.text));
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_ng_template_0_ng_container_3_li_2_a_2_i_1_Template, 1, 3, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SidebarComponent_ng_template_0_ng_container_3_li_2_a_2_span_5_Template, 3, 6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", item_r7.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r7.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 4, item_r7.label), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r7.badge);
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_a_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("badge rounded-pill bg-", subitem_r25.badge.variant, " float-end");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 4, subitem_r25.badge.text));
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_a_1_span_3_Template, 3, 6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", subitem_r25.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-parent", subitem_r25.parentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 4, subitem_r25.label), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", subitem_r25.badge);
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-parent", subitem_r25.parentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, subitem_r25.label), " ");
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li")(1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const subSubitem_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", subSubitem_r34.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-parent", subSubitem_r34.parentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, subSubitem_r34.label), " ");
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_ul_3_li_1_Template, 4, 5, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", subitem_r25.subItems);
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_a_1_Template, 4, 6, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_a_2_Template, 3, 4, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_ul_3_Template, 2, 1, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r25 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r24.hasItems(subitem_r25));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r24.hasItems(subitem_r25));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r24.hasItems(subitem_r25));
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_Template, 4, 3, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r7.subItems);
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_ng_template_0_ng_container_3_li_2_a_1_Template, 6, 9, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SidebarComponent_ng_template_0_ng_container_3_li_2_a_2_Template, 6, 6, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_Template, 2, 1, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.hasItems(item_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r9.hasItems(item_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.hasItems(item_r7));
} }
function SidebarComponent_ng_template_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_ng_template_0_ng_container_3_li_1_Template, 3, 3, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SidebarComponent_ng_template_0_ng_container_3_li_2_Template, 4, 3, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r7.isTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !item_r7.isTitle && !item_r7.isLayout);
} }
function SidebarComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5)(1, "ul", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SidebarComponent_ng_template_0_ng_container_3_Template, 3, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.menuItems);
} }
function SidebarComponent_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
} }
function SidebarComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_div_5_ng_container_1_Template, 1, 0, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r0);
} }
function SidebarComponent_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
} }
function SidebarComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_div_6_ng_container_1_Template, 1, 0, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r0);
} }
/**
 * Sidebar component
 */
class SidebarComponent {
    constructor(eventService, router, translate, http) {
        this.eventService = eventService;
        this.router = router;
        this.translate = translate;
        this.http = http;
        this.isCondensed = false;
        this.menuItems = [];
        router.events.forEach((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
                this._activateMenuDropdown();
                this._scrollElement();
            }
        });
    }
    ngOnInit() {
        this.initialize();
        this._scrollElement();
    }
    ngAfterViewInit() {
        this.menu = new (metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_0___default())(this.sideMenu.nativeElement);
        this._activateMenuDropdown();
    }
    toggleMenu(event) {
        event.currentTarget.nextElementSibling.classList.toggle('mm-show');
    }
    ngOnChanges() {
        if (!this.isCondensed && this.sideMenu || this.isCondensed) {
            setTimeout(() => {
                this.menu = new (metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_0___default())(this.sideMenu.nativeElement);
            });
        }
        else if (this.menu) {
            this.menu.dispose();
        }
    }
    _scrollElement() {
        setTimeout(() => {
            if (document.getElementsByClassName("mm-active").length > 0) {
                const currentPosition = document.getElementsByClassName("mm-active")[0]['offsetTop'];
                if (currentPosition > 500)
                    if (this.scrollRef.SimpleBar !== null)
                        this.scrollRef.SimpleBar.getScrollElement().scrollTop =
                            currentPosition + 300;
            }
        }, 300);
    }
    /**
     * remove active and mm-active class
     */
    _removeAllClass(className) {
        const els = document.getElementsByClassName(className);
        while (els[0]) {
            els[0].classList.remove(className);
        }
    }
    /**
     * Activate the parent dropdown
     */
    _activateMenuDropdown() {
        this._removeAllClass('mm-active');
        this._removeAllClass('mm-show');
        const links = document.getElementsByClassName('side-nav-link-ref');
        let menuItemEl = null;
        // tslint:disable-next-line: prefer-for-of
        const paths = [];
        for (let i = 0; i < links.length; i++) {
            paths.push(links[i]['pathname']);
        }
        var itemIndex = paths.indexOf(window.location.pathname);
        if (itemIndex === -1) {
            const strIndex = window.location.pathname.lastIndexOf('/');
            const item = window.location.pathname.substr(0, strIndex).toString();
            menuItemEl = links[paths.indexOf(item)];
        }
        else {
            menuItemEl = links[itemIndex];
        }
        if (menuItemEl) {
            menuItemEl.classList.add('active');
            const parentEl = menuItemEl.parentElement;
            if (parentEl) {
                parentEl.classList.add('mm-active');
                const parent2El = parentEl.parentElement.closest('ul');
                if (parent2El && parent2El.id !== 'side-menu') {
                    parent2El.classList.add('mm-show');
                    const parent3El = parent2El.parentElement;
                    if (parent3El && parent3El.id !== 'side-menu') {
                        parent3El.classList.add('mm-active');
                        const childAnchor = parent3El.querySelector('.has-arrow');
                        const childDropdown = parent3El.querySelector('.has-dropdown');
                        if (childAnchor) {
                            childAnchor.classList.add('mm-active');
                        }
                        if (childDropdown) {
                            childDropdown.classList.add('mm-active');
                        }
                        const parent4El = parent3El.parentElement;
                        if (parent4El && parent4El.id !== 'side-menu') {
                            parent4El.classList.add('mm-show');
                            const parent5El = parent4El.parentElement;
                            if (parent5El && parent5El.id !== 'side-menu') {
                                parent5El.classList.add('mm-active');
                                const childanchor = parent5El.querySelector('.is-parent');
                                if (childanchor && parent5El.id !== 'side-menu') {
                                    childanchor.classList.add('mm-active');
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    /**
     * Initialize
     */
    initialize() {
        this.menuItems = _menu__WEBPACK_IMPORTED_MODULE_1__.MENU;
    }
    /**
     * Returns true or false if given menu item has child or not
     * @param item menuItem
     */
    hasItems(item) {
        return item.subItems !== undefined ? item.subItems.length > 0 : false;
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient)); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], viewQuery: function SidebarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.scrollRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sideMenu = _t.first);
    } }, inputs: { isCondensed: "isCondensed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 2, consts: [["contentTemplate", ""], [1, "vertical-menu"], [1, "h-100"], ["componentRef", ""], [4, "ngIf"], ["id", "sidebar-menu"], ["id", "side-menu", 1, "metismenu", "list-unstyled"], ["sideMenu", ""], [4, "ngFor", "ngForOf"], ["class", "menu-title", 4, "ngIf"], [1, "menu-title"], ["href", "javascript:void(0);", "class", "is-parent", 3, "ngClass", 4, "ngIf"], ["class", "side-nav-link-ref", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["class", "sub-menu", "aria-expanded", "false", 4, "ngIf"], ["href", "javascript:void(0);", 1, "is-parent", 3, "ngClass"], [3, "class", 4, "ngIf"], ["routerLinkActive", "active", 1, "side-nav-link-ref", 3, "routerLink"], ["aria-expanded", "false", 1, "sub-menu"], ["class", "side-nav-link-a-ref has-arrow", "href", "javascript:void(0);", 4, "ngIf"], ["class", "sub-menu mm-collapse", "aria-expanded", "false", 4, "ngIf"], ["href", "javascript:void(0);", 1, "side-nav-link-a-ref", "has-arrow"], ["aria-expanded", "false", 1, "sub-menu", "mm-collapse"], [4, "ngTemplateOutlet"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SidebarComponent_ng_template_0_Template, 4, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1)(3, "ngx-simplebar", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SidebarComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SidebarComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isCondensed);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isCondensed);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, simplebar_angular__WEBPACK_IMPORTED_MODULE_8__.SimplebarAngularComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 24016:
/*!****************************************************!*\
  !*** ./src/app/layouts/topbar/topbar.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopbarComponent": () => (/* binding */ TopbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/auth.service */ 90263);
/* harmony import */ var _core_services_authfake_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/authfake.service */ 92293);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/language.service */ 77524);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ 30185);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! simplebar-angular */ 62014);













const _c0 = function (a0) { return { active: a0 }; };
function TopbarComponent_a_28_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopbarComponent_a_28_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const item_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.setLanguage(item_r1.text, item_r1.lang, item_r1.flag)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c0, ctx_r0.cookieValue === item_r1.lang));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", item_r1.flag, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1.text);
} }
/**
 * Topbar component
 */
class TopbarComponent {
    constructor(document, router, authService, authFackservice, languageService, translate, _cookiesService) {
        this.document = document;
        this.router = router;
        this.authService = authService;
        this.authFackservice = authFackservice;
        this.languageService = languageService;
        this.translate = translate;
        this._cookiesService = _cookiesService;
        this.listLang = [
            { text: 'English', flag: 'assets/images/flags/us.jpg', lang: 'en' },
            { text: 'Spanish', flag: 'assets/images/flags/spain.jpg', lang: 'es' },
            { text: 'German', flag: 'assets/images/flags/germany.jpg', lang: 'de' },
            { text: 'Italian', flag: 'assets/images/flags/italy.jpg', lang: 'it' },
            { text: 'Russian', flag: 'assets/images/flags/russia.jpg', lang: 'ru' },
        ];
        this.settingsButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.mobileMenuButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    ngOnInit() {
        this.openMobileMenu = false;
        this.element = document.documentElement;
        this.cookieValue = this._cookiesService.get('lang');
        const val = this.listLang.filter(x => x.lang === this.cookieValue);
        this.countryName = val.map(element => element.text);
        if (val.length === 0) {
            if (this.flagvalue === undefined) {
                this.valueset = 'assets/images/flags/us.jpg';
            }
        }
        else {
            this.flagvalue = val.map(element => element.flag);
        }
    }
    setLanguage(text, lang, flag) {
        this.countryName = text;
        this.flagvalue = flag;
        this.cookieValue = lang;
        this.languageService.setLanguage(lang);
    }
    /**
     * Toggles the right sidebar
     */
    toggleRightSidebar() {
        this.settingsButtonClicked.emit();
    }
    /**
     * Toggle the menu bar when having mobile screen
     */
    toggleMobileMenu(event) {
        event.preventDefault();
        this.mobileMenuButtonClicked.emit();
    }
    /**
     * Logout the user
     */
    logout() {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.defaultauth === 'firebase') {
            this.authService.logout();
        }
        else {
            this.authFackservice.logout();
        }
        this.router.navigate(['account/login']);
    }
    /**
     * Fullscreen method
     */
    fullscreen() {
        document.body.classList.toggle('fullscreen-enable');
        if (!document.fullscreenElement && !this.element.mozFullScreenElement &&
            !this.element.webkitFullscreenElement) {
            if (this.element.requestFullscreen) {
                this.element.requestFullscreen();
            }
            else if (this.element.mozRequestFullScreen) {
                /* Firefox */
                this.element.mozRequestFullScreen();
            }
            else if (this.element.webkitRequestFullscreen) {
                /* Chrome, Safari and Opera */
                this.element.webkitRequestFullscreen();
            }
            else if (this.element.msRequestFullscreen) {
                /* IE/Edge */
                this.element.msRequestFullscreen();
            }
        }
        else {
            if (this.document.exitFullscreen) {
                this.document.exitFullscreen();
            }
            else if (this.document.mozCancelFullScreen) {
                /* Firefox */
                this.document.mozCancelFullScreen();
            }
            else if (this.document.webkitExitFullscreen) {
                /* Chrome, Safari and Opera */
                this.document.webkitExitFullscreen();
            }
            else if (this.document.msExitFullscreen) {
                /* IE/Edge */
                this.document.msExitFullscreen();
            }
        }
    }
}
TopbarComponent.ɵfac = function TopbarComponent_Factory(t) { return new (t || TopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_authfake_service__WEBPACK_IMPORTED_MODULE_2__.AuthfakeauthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__.CookieService)); };
TopbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TopbarComponent, selectors: [["app-topbar"]], outputs: { settingsButtonClicked: "settingsButtonClicked", mobileMenuButtonClicked: "mobileMenuButtonClicked" }, decls: 130, vars: 49, consts: [["id", "page-topbar"], [1, "navbar-header"], [1, "d-flex"], [1, "navbar-brand-box"], ["routerLink", "/", 1, "logo", "logo-dark"], [1, "logo-sm"], ["src", "assets/images/logo.svg", "alt", "", "height", "22"], [1, "logo-lg"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "17"], ["routerLink", "/", 1, "logo", "logo-light"], ["src", "assets/images/logo-light.svg", "alt", "", "height", "22"], ["src", "assets/images/logo-light.png", "alt", "", "height", "19"], ["ngbDropdown", "", 1, "dropdown", "d-inline-block", "d-lg-none", "ms-2"], ["type", "button", "id", "page-header-search-dropdown", "data-toggle", "dropdown", "aria-haspopup", "true", "ngbDropdownToggle", "", "aria-expanded", "false", 1, "btn", "header-item", "noti-icon"], [1, "mdi", "mdi-magnify"], ["ngbDropdownMenu", "", "aria-labelledby", "page-header-search-dropdown", 1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-end", "p-0"], [1, "p-3"], [1, "m-0"], [1, "input-group"], ["type", "text", "placeholder", "Search ...", "aria-label", "Recipient's username", 1, "form-control"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-primary"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", "class", "dropdown-item notify-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "dropdown", "d-none", "d-lg-inline-block", "ms-1"], ["type", "button", "data-toggle", "fullscreen", 1, "btn", "header-item", "noti-icon", 3, "click"], [1, "bx", "bx-fullscreen"], ["ngbDropdown", "", 1, "dropdown", "d-inline-block"], ["type", "button", "id", "page-header-notifications-dropdown", "ngbDropdownToggle", "", 1, "btn", "header-item", "noti-icon"], [1, "bx", "bx-bell", "bx-tada"], [1, "badge", "bg-danger", "rounded-pill"], ["aria-labelledby", "page-header-notifications-dropdown", "ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-end", "p-0"], [1, "row", "align-items-center"], [1, "col"], [1, "col-auto"], ["href", "javascript: void(0);", 1, "small"], [2, "position", "relative", "height", "230px"], ["href", "javascript: void(0);", 1, "text-reset", "notification-item"], [1, "avatar-xs", "me-3"], [1, "avatar-title", "bg-primary", "rounded-circle", "font-size-16"], [1, "bx", "bx-cart"], [1, "flex-grow-1"], [1, "mb-1"], [1, "font-size-12", "text-muted"], [1, "mb-0"], [1, "mdi", "mdi-clock-outline"], ["src", "assets/images/users/avatar-3.jpg", "alt", "user-pic", 1, "me-3", "rounded-circle", "avatar-xs"], [1, "avatar-title", "bg-success", "rounded-circle", "font-size-16"], [1, "bx", "bx-badge-check"], ["src", "assets/images/users/avatar-4.jpg", "alt", "user-pic", 1, "me-3", "rounded-circle", "avatar-xs"], [1, "p-2", "border-top", "d-grid"], ["href", "javascript: void(0);", 1, "dropdown-item", "text-danger", 3, "click"], [1, "bx", "bx-power-off", "font-size-16", "align-middle", "me-1", "text-danger"], ["type", "button", "ngbDropdownToggle", "", "id", "page-header-user-dropdown", 1, "btn", "header-item", "noti-icon", "right-bar-toggle"], [1, "bx", "bx-cog", "font-size-25", "align-middle", "me-1", "text-black"], [1, "mdi", "mdi-chevron-down", "d-none", "d-xl-inline-block"], ["href", "javascript:void(0);", 1, "dropdown-item", "notify-item", 3, "ngClass", "click"], ["alt", "user-image", "height", "12", 1, "me-1", 3, "src"], [1, "align-middle"]], template: function TopbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 9)(10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 2)(15, "div", 12)(16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 15)(19, "form", 16)(20, "div", 17)(21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 20)(24, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, TopbarComponent_a_28_Template, 4, 5, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, " --> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 24)(32, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopbarComponent_Template_button_click_32_listener() { return ctx.fullscreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 27)(35, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 31)(40, "div", 16)(41, "div", 32)(42, "div", 33)(43, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 34)(47, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "ngx-simplebar", 36)(51, "a", 37)(52, "div", 2)(53, "div", 38)(54, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 41)(57, "h6", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 43)(61, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](65, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](67, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "a", 37)(69, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](70, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 41)(72, "h6", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 43)(76, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](80, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](82, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "a", 37)(84, "div", 2)(85, "div", 38)(86, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](87, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "div", 41)(89, "h6", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](91, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 43)(93, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](95, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](97, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](99, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "a", 37)(101, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](102, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "div", 41)(104, "h6", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](106, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "div", 43)(108, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](110, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](112, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](114, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "div", 50)(116, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopbarComponent_Template_a_click_116_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](117, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](118);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](119, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](120, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "div", 27)(122, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](123, "i", 54)(124, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "div", 22)(126, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopbarComponent_Template_a_click_126_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](127, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](128);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](129, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.listLang);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](45, 17, "HEADER.NOTIFICATIONS.TITLE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](49, 19, "HEADER.NOTIFICATIONS.VIEW_ALL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](59, 21, "HEADER.NOTIFICATIONS.FIRST.TITLE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](63, 23, "HEADER.NOTIFICATIONS.FIRST.TEXT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](67, 25, "HEADER.NOTIFICATIONS.FIRST.TIME"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](74, 27, "HEADER.NOTIFICATIONS.SECOND.TITLE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](78, 29, "HEADER.NOTIFICATIONS.SECOND.TEXT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](82, 31, "HEADER.NOTIFICATIONS.SECOND.TIME"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](91, 33, "HEADER.NOTIFICATIONS.THIRD.TITLE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](95, 35, "HEADER.NOTIFICATIONS.THIRD.TEXT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](99, 37, "HEADER.NOTIFICATIONS.THIRD.TIME"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](106, 39, "HEADER.NOTIFICATIONS.FOUR.TITLE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](110, 41, "HEADER.NOTIFICATIONS.FOUR.TEXT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](114, 43, "HEADER.NOTIFICATIONS.FOUR.TIME"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](119, 45, "HEADER.LOGIN.LOGOUT"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](129, 47, "HEADER.LOGIN.LOGOUT"), "");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownMenu, simplebar_angular__WEBPACK_IMPORTED_MODULE_10__.SimplebarAngularComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: [".bx[_ngcontent-%COMP%] {\n  height: 27px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJ0b3BiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnh7XHJcbiAgaGVpZ2h0OiAyN3B4O1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 27198:
/*!********************************************************!*\
  !*** ./src/app/layouts/vertical/vertical.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalComponent": () => (/* binding */ VerticalComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _layouts_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts.model */ 66091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/event.service */ 13117);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar.component */ 79504);
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../topbar/topbar.component */ 24016);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ 84158);
/* harmony import */ var _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rightsidebar/rightsidebar.component */ 56034);









/**
 * Vertical component
 */
class VerticalComponent {
    constructor(router, eventService) {
        this.router = router;
        this.eventService = eventService;
        this.isCondensed = false;
        this.router.events.forEach((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd) {
                document.body.classList.remove('sidebar-enable');
            }
        });
    }
    ngOnInit() {
        this.sidebartype = _layouts_model__WEBPACK_IMPORTED_MODULE_0__.SIDEBAR_TYPE;
        // listen to event and change the layout, theme, etc
        this.eventService.subscribe('changeSidebartype', (layout) => {
            this.sidebartype = layout;
            this.changeSidebar(this.sidebartype);
        });
        this.changeSidebar(this.sidebartype);
        document.body.setAttribute('data-layout', 'vertical');
        // document.body.setAttribute('data-layout-mode', 'dark');
    }
    isMobile() {
        const ua = navigator.userAgent;
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua);
    }
    ngAfterViewInit() {
    }
    /**
     * on settings button clicked from topbar
     */
    onSettingsButtonClicked() {
        document.body.classList.toggle('right-bar-enabled');
    }
    changeSidebar(value) {
        switch (value) {
            case "light":
                document.body.setAttribute('data-sidebar', 'light');
                document.body.setAttribute('data-topbar', 'dark');
                document.body.removeAttribute('data-sidebar-size');
                document.body.removeAttribute('data-layout-size');
                document.body.removeAttribute('data-keep-enlarged');
                document.body.classList.remove('vertical-collpsed');
                document.body.removeAttribute('data-layout-scrollable');
                break;
            case "compact":
                document.body.setAttribute('data-sidebar-size', 'small');
                document.body.setAttribute('data-sidebar', 'dark');
                document.body.removeAttribute('data-topbar');
                document.body.removeAttribute('data-layout-size');
                document.body.removeAttribute('data-keep-enlarged');
                document.body.classList.remove('sidebar-enable');
                document.body.classList.remove('vertical-collpsed');
                document.body.removeAttribute('data-layout-scrollable');
                break;
            case "dark":
                document.body.setAttribute('data-sidebar', 'dark');
                document.body.removeAttribute('data-topbar');
                document.body.removeAttribute('data-layout-size');
                document.body.removeAttribute('data-keep-enlarged');
                document.body.removeAttribute('data-sidebar-size');
                document.body.classList.remove('sidebar-enable');
                document.body.classList.remove('vertical-collpsed');
                document.body.removeAttribute('data-layout-scrollable');
                break;
            case "icon":
                document.body.classList.add('vertical-collpsed');
                document.body.setAttribute('data-sidebar', 'dark');
                document.body.removeAttribute('data-layout-size');
                document.body.setAttribute('data-keep-enlarged', "true");
                document.body.removeAttribute('data-topbar');
                document.body.removeAttribute('data-layout-scrollable');
                break;
            case "colored":
                document.body.classList.remove('sidebar-enable');
                document.body.classList.remove('vertical-collpsed');
                document.body.setAttribute('data-sidebar', 'colored');
                document.body.removeAttribute('data-layout-size');
                document.body.removeAttribute('data-keep-enlarged');
                document.body.removeAttribute('data-topbar');
                document.body.removeAttribute('data-layout-scrollable');
                document.body.removeAttribute('data-sidebar-size');
                break;
            default:
                document.body.setAttribute('data-sidebar', 'dark');
                break;
        }
    }
    /**
     * On mobile toggle button clicked
     */
    onToggleMobileMenu() {
        this.isCondensed = !this.isCondensed;
        document.body.classList.toggle('sidebar-enable');
        document.body.classList.toggle('vertical-collpsed');
        if (window.screen.width <= 768) {
            document.body.classList.remove('vertical-collpsed');
        }
    }
}
VerticalComponent.ɵfac = function VerticalComponent_Factory(t) { return new (t || VerticalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_1__.EventService)); };
VerticalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: VerticalComponent, selectors: [["app-vertical"]], decls: 8, vars: 1, consts: [["id", "layout-wrapper"], [3, "settingsButtonClicked", "mobileMenuButtonClicked"], [3, "isCondensed"], [1, "main-content"], [1, "page-content"]], template: function VerticalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "app-topbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("settingsButtonClicked", function VerticalComponent_Template_app_topbar_settingsButtonClicked_1_listener() { return ctx.onSettingsButtonClicked(); })("mobileMenuButtonClicked", function VerticalComponent_Template_app_topbar_mobileMenuButtonClicked_1_listener() { return ctx.onToggleMobileMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-sidebar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "app-rightsidebar");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isCondensed", ctx.isCondensed);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent, _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_3__.TopbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_5__.RightsidebarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJ0aWNhbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 16886:
/*!******************************************************!*\
  !*** ./src/app/shared/ui/loader/loader.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderComponent": () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_services_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/loader.service */ 34487);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);



function LoaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 4)(4, "div", 4)(5, "div", 4)(6, "div", 4)(7, "div", 4)(8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} }
class LoaderComponent {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.loading = true;
        this.loaderService.isLoading.subscribe((v) => {
            setTimeout(() => {
                this.loading = v;
            }, 1500);
        });
    }
    ngOnInit() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService)); };
LoaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 1, vars: 1, consts: [["id", "preloader", 4, "ngIf"], ["id", "preloader"], ["id", "status"], [1, "spinner-chase"], [1, "chase-dot"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoaderComponent_div_0_Template, 9, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 29234:
/*!************************************************************!*\
  !*** ./src/app/shared/ui/pagetitle/pagetitle.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagetitleComponent": () => (/* binding */ PagetitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);


function PagetitleComponent_ng_container_7_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9)(1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.label);
} }
function PagetitleComponent_ng_container_7_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.label, " ");
} }
function PagetitleComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PagetitleComponent_ng_container_7_li_1_Template, 3, 1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PagetitleComponent_ng_container_7_li_2_Template, 2, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.active);
} }
class PagetitleComponent {
    constructor() { }
    ngOnInit() {
    }
}
PagetitleComponent.ɵfac = function PagetitleComponent_Factory(t) { return new (t || PagetitleComponent)(); };
PagetitleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagetitleComponent, selectors: [["app-page-title"]], inputs: { breadcrumbItems: "breadcrumbItems", title: "title" }, decls: 8, vars: 2, consts: [[1, "row"], [1, "col-12"], [1, "page-title-box", "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0", "font-size-18"], [1, "page-title-right"], [1, "breadcrumb", "m-0"], [4, "ngFor", "ngForOf"], ["class", "breadcrumb-item", 4, "ngIf"], ["class", "breadcrumb-item active", 4, "ngIf"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"]], template: function PagetitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PagetitleComponent_ng_container_7_Template, 3, 2, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.breadcrumbItems);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdldGl0bGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 19668:
/*!****************************************!*\
  !*** ./src/app/shared/ui/ui.module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UIModule": () => (/* binding */ UIModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagetitle/pagetitle.component */ 29234);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader/loader.component */ 16886);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);






class UIModule {
}
UIModule.ɵfac = function UIModule_Factory(t) { return new (t || UIModule)(); };
UIModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: UIModule });
UIModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdown], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbCollapseModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDatepickerModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTimepickerModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UIModule, { declarations: [_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__.PagetitleComponent, _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__.LoaderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbCollapseModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDatepickerModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTimepickerModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownModule], exports: [_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__.PagetitleComponent, _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__.LoaderComponent] }); })();


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    defaultauth: 'fackbackend',
    firebaseConfig: {
        apiKey: '',
        authDomain: '',
        databaseURL: '',
        projectId: '',
        storageBucket: '',
        messagingSenderId: '',
        appId: '',
        measurementId: ''
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map