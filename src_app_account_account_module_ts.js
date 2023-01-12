"use strict";
(self["webpackChunkvendor"] = self["webpackChunkvendor"] || []).push([["src_app_account_account_module_ts"],{

/***/ 34742:
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountRoutingModule": () => (/* binding */ AccountRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [
    { path: 'auth', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth.module */ 55758)).then(m => m.AuthModule) },
];
class AccountRoutingModule {
}
AccountRoutingModule.ɵfac = function AccountRoutingModule_Factory(t) { return new (t || AccountRoutingModule)(); };
AccountRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AccountRoutingModule });
AccountRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccountRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 63879:
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountModule": () => (/* binding */ AccountModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-routing.module */ 34742);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.module */ 55758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




class AccountModule {
}
AccountModule.ɵfac = function AccountModule_Factory(t) { return new (t || AccountModule)(); };
AccountModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AccountModule });
AccountModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountRoutingModule,
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_1__.AuthModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AccountModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountRoutingModule,
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_1__.AuthModule] }); })();


/***/ }),

/***/ 60521:
/*!**********************************************!*\
  !*** ./src/app/account/auth/auth-routing.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 8462);
/* harmony import */ var _login2_login2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login2/login2.component */ 69202);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup/signup.component */ 74076);
/* harmony import */ var _passwordreset_passwordreset_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./passwordreset/passwordreset.component */ 53209);
/* harmony import */ var _register2_register2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register2/register2.component */ 83534);
/* harmony import */ var _recoverpwd2_recoverpwd2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recoverpwd2/recoverpwd2.component */ 81654);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);









const routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__.SignupComponent
    },
    {
        path: 'signup-2',
        component: _register2_register2_component__WEBPACK_IMPORTED_MODULE_4__.Register2Component
    },
    {
        path: 'reset-password',
        component: _passwordreset_passwordreset_component__WEBPACK_IMPORTED_MODULE_3__.PasswordresetComponent
    },
    {
        path: 'recoverpwd-2',
        component: _recoverpwd2_recoverpwd2_component__WEBPACK_IMPORTED_MODULE_5__.Recoverpwd2Component
    },
    {
        path: 'login-2',
        component: _login2_login2_component__WEBPACK_IMPORTED_MODULE_1__.Login2Component
    },
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); };
AuthRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 55758:
/*!*********************************************!*\
  !*** ./src/app/account/auth/auth.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-owl-carousel-o */ 37297);
/* harmony import */ var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/ui/ui.module */ 19668);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 8462);
/* harmony import */ var _login2_login2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login2/login2.component */ 69202);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ 74076);
/* harmony import */ var _register2_register2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register2/register2.component */ 83534);
/* harmony import */ var _recoverpwd2_recoverpwd2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recoverpwd2/recoverpwd2.component */ 81654);
/* harmony import */ var _auth_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-routing */ 60521);
/* harmony import */ var _passwordreset_passwordreset_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./passwordreset/passwordreset.component */ 53209);
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-archwizard */ 38531);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-otp-input */ 2981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);















class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbAlertModule,
        _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule,
        _auth_routing__WEBPACK_IMPORTED_MODULE_6__.AuthRoutingModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselModule,
        angular_archwizard__WEBPACK_IMPORTED_MODULE_13__.ArchwizardModule,
        ng_otp_input__WEBPACK_IMPORTED_MODULE_14__.NgOtpInputModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, _login2_login2_component__WEBPACK_IMPORTED_MODULE_2__.Login2Component, _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__.SignupComponent, _passwordreset_passwordreset_component__WEBPACK_IMPORTED_MODULE_7__.PasswordresetComponent, _register2_register2_component__WEBPACK_IMPORTED_MODULE_4__.Register2Component, _recoverpwd2_recoverpwd2_component__WEBPACK_IMPORTED_MODULE_5__.Recoverpwd2Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbAlertModule,
        _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule,
        _auth_routing__WEBPACK_IMPORTED_MODULE_6__.AuthRoutingModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselModule,
        angular_archwizard__WEBPACK_IMPORTED_MODULE_13__.ArchwizardModule,
        ng_otp_input__WEBPACK_IMPORTED_MODULE_14__.NgOtpInputModule] }); })();


/***/ }),

/***/ 69202:
/*!*********************************************************!*\
  !*** ./src/app/account/auth/login2/login2.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Login2Component": () => (/* binding */ Login2Component)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 25670);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/auth.service */ 90263);
/* harmony import */ var _core_services_authfake_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/authfake.service */ 92293);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-owl-carousel-o */ 37297);










function Login2Component_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 56)(1, "div", 57)(2, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\" Booked a package and got really good service from them. Special thanks to Ankit for giving us complete information related to my trip. They are always available to help you if needed. Had a really smooth trip. Will definitely recommend for a foreign trip. Thanks\" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div")(5, "h4", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "kumar kundan");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Local Guide");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} }
function Login2Component_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 56)(1, "div", 57)(2, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\" We have booked package through WTfares recently in May 2022 and we really got good service from them. Special thanks to Neha for giving us complete clarity on how to plan Tadoba trip, how many Safari\u2019s to take, which gates are having better sighting currently. Commercially also we got very good offer from them and multiple options for resort stay. Thanks WTFARES. \"");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div")(5, "h4", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Vaibhab Ghadge");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Social Traveller");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} }
function Login2Component_div_41_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function Login2Component_div_41_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email must be a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function Login2Component_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, Login2Component_div_41_div_1_Template, 2, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, Login2Component_div_41_div_2_Template, 2, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.f.email.errors.email);
} }
function Login2Component_div_52_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function Login2Component_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, Login2Component_div_52_span_1_Template, 2, 0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.f.password.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
/**
 * Login-2 component
 */
class Login2Component {
    constructor(formBuilder, route, router, authenticationService, authFackservice) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.authFackservice = authFackservice;
        this.submitted = false;
        this.error = '';
        // set the currenr year
        this.year = new Date().getFullYear();
        this.carouselOption = {
            items: 1,
            loop: false,
            margin: 0,
            nav: false,
            dots: true,
            responsive: {
                680: {
                    items: 1
                },
            }
        };
    }
    ngOnInit() {
        document.body.classList.add('auth-body-bg');
        this.loginForm = this.formBuilder.group({
            email: ['admin@themesbrand.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
            password: ['123456', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        });
        // reset login status
        // this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        // tslint:disable-next-line: no-string-literal
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    /**
     * Form submit
     */
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        else {
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.defaultauth === 'firebase') {
                this.authenticationService.login(this.f.email.value, this.f.password.value).then((res) => {
                    this.router.navigate(['/dashboard']);
                })
                    .catch(error => {
                    this.error = error ? error : '';
                });
            }
            else {
                this.authFackservice.login(this.f.email.value, this.f.password.value)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.first)())
                    .subscribe(data => {
                    this.router.navigate(['/dashboard']);
                }, error => {
                    this.error = error ? error : '';
                });
            }
        }
    }
}
Login2Component.ɵfac = function Login2Component_Factory(t) { return new (t || Login2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_authfake_service__WEBPACK_IMPORTED_MODULE_2__.AuthfakeauthenticationService)); };
Login2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: Login2Component, selectors: [["app-login2"]], decls: 78, vars: 10, consts: [[1, "container-fluid", "p-0"], [1, "row", "g-0"], [1, "col-xl-8"], [1, "auth-full-bg", "pt-lg-5", "p-4"], [1, "w-100"], [1, "bg-overlay"], [1, "d-flex", "h-100", "flex-column"], [1, "p-4", "mt-auto"], [1, "row", "justify-content-center"], [1, "col-lg-7"], [1, "text-center", "text-white"], [1, "mb-3"], [1, "bx", "bxs-quote-alt-left", "text-primary", "h1", "align-middle", "me-3"], [1, "text-primary"], ["dir", "ltr"], [1, "owl-theme", "auth-review-carousel", 3, "options"], ["carouselSlide", ""], [1, "col-xl-4"], [1, "auth-full-page-content", "p-md-5", "p-4"], [1, "d-flex", "flex-column", "h-100"], [1, "mb-4", "mb-md-5"], ["routerLink", "/", 1, "auth-logo"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "18", 1, "auth-logo-dark"], ["src", "assets/images/logo-light.png", "alt", "", "height", "18", 1, "auth-logo-light"], [1, "my-auto"], [1, "text-center"], [1, "text-muted"], [1, "col-xl-9"], [3, "formGroup", "ngSubmit"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Enter email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "float-end"], ["routerLink", "/account/recoverpwd-2", 1, "text-muted"], ["for", "userpassword"], [1, "input-group", "auth-pass-inputgroup"], ["type", "password", "formControlName", "password", "placeholder", "Enter password", "aria-label", "Password", "aria-describedby", "password-addon", 1, "form-control", 3, "ngClass"], ["type", "button", "id", "password-addon", 1, "btn", "btn-light"], [1, "mdi", "mdi-eye-outline"], [1, "form-check"], ["type", "checkbox", "id", "remember-check", 1, "form-check-input"], ["for", "remember-check", 1, "form-check-label"], [1, "mt-3", "d-grid"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], [1, "mt-4", "text-center"], [1, "font-size-14", "mb-3"], [1, "list-inline"], [1, "list-inline-item"], ["href", "javascript::void()", 1, "social-list-item", "bg-primary", "text-white", "border-primary"], [1, "mdi", "mdi-facebook"], ["href", "javascript::void()", 1, "social-list-item", "bg-info", "text-white", "border-info"], [1, "mdi", "mdi-twitter"], ["href", "javascript::void()", 1, "social-list-item", "bg-danger", "text-white", "border-danger"], [1, "mdi", "mdi-google"], [1, "mt-5", "text-center"], ["routerLink", "/account/signup-2", 1, "fw-medium", "text-primary"], [1, "item"], [1, "py-3"], [1, "font-size-16", "mb-4"], [1, "font-size-16", "text-primary"], [1, "font-size-14", "mb-0"], [1, "invalid-feedback"], [4, "ngIf"]], template: function Login2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "500");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "+ Satisfied Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 14)(17, "owl-carousel-o", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, Login2Component_ng_template_18_Template, 9, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, Login2Component_ng_template_19_Template, 9, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 17)(21, "div", 18)(22, "div", 4)(23, "div", 19)(24, "div", 20)(25, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "img", 22)(27, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 24)(29, "div", 25)(30, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Welcome Back !");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Manage enquiries and edit your listings. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 8)(35, "div", 27)(36, "form", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function Login2Component_Template_form_ngSubmit_36_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 11)(38, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, Login2Component_div_41_Template, 3, 2, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 11)(43, "div", 32)(44, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, Login2Component_div_52_Template, 2, 1, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, " Remember me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 42)(58, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 44)(61, "h5", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Sign in with");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "ul", 46)(64, "li", 47)(65, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "li", 47)(68, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "li", 47)(71, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 54)(74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "Don't have an account ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, " Signup now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.carouselOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__.CarouselSlideDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbjIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8462:
/*!*******************************************************!*\
  !*** ./src/app/account/auth/login/login.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 25670);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/auth.service */ 90263);
/* harmony import */ var _core_services_authfake_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/authfake.service */ 92293);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-owl-carousel-o */ 37297);










function LoginComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 56)(1, "div", 57)(2, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\" Booked a package and got really good service from them. Special thanks to Ankit for giving us complete information related to my trip. They are always available to help you if needed. Had a really smooth trip. Will definitely recommend for a foreign trip. Thanks\" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div")(5, "h4", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "kumar kundan");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Local Guide");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} }
function LoginComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 56)(1, "div", 57)(2, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\" We have booked package through WTfares recently in May 2022 and we really got good service from them. Special thanks to Neha for giving us complete clarity on how to plan Tadoba trip, how many Safari\u2019s to take, which gates are having better sighting currently. Commercially also we got very good offer from them and multiple options for resort stay. Thanks WTFARES. \" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div")(5, "h4", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Vaibhab Ghadge");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Social Traveller");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} }
function LoginComponent_div_41_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginComponent_div_41_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email must be a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LoginComponent_div_41_div_1_Template, 2, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LoginComponent_div_41_div_2_Template, 2, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.f.email.errors.email);
} }
function LoginComponent_div_52_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LoginComponent_div_52_span_1_Template, 2, 0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.f.password.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
/**
 * Login component
 */
class LoginComponent {
    // tslint:disable-next-line: max-line-length
    constructor(formBuilder, route, router, authenticationService, authFackservice) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.authFackservice = authFackservice;
        this.submitted = false;
        this.error = '';
        // set the currenr year
        this.year = new Date().getFullYear();
        this.carouselOption = {
            items: 1,
            loop: false,
            margin: 0,
            nav: false,
            dots: true,
            responsive: {
                680: {
                    items: 1
                },
            }
        };
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['pratiksha.borkar@radisson.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
            password: ['123456', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        });
        // reset login status
        // this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        // tslint:disable-next-line: no-string-literal
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    /**
     * Form submit
     */
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        else {
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.defaultauth === 'firebase') {
                this.authenticationService.login(this.f.email.value, this.f.password.value).then((res) => {
                    this.router.navigate(['/dashboard']);
                })
                    .catch(error => {
                    this.error = error ? error : '';
                });
            }
            else {
                this.authFackservice.login(this.f.email.value, this.f.password.value)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.first)())
                    .subscribe(data => {
                    this.router.navigate(['/dashboard']);
                }, error => {
                    this.error = error ? error : '';
                });
            }
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_authfake_service__WEBPACK_IMPORTED_MODULE_2__.AuthfakeauthenticationService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 78, vars: 10, consts: [[1, "container-fluid", "p-0"], [1, "row", "g-0"], [1, "col-xl-8"], [1, "auth-full-bg", "pt-lg-5", "p-4"], [1, "w-100"], [1, "bg-overlay"], [1, "d-flex", "h-100", "flex-column"], [1, "p-4", "mt-auto"], [1, "row", "justify-content-center"], [1, "col-lg-7"], [1, "text-center", "text-white"], [1, "mb-3"], [1, "bx", "bxs-quote-alt-left", "text-primary", "h1", "align-middle", "me-3"], [1, "text-primary"], ["dir", "ltr"], [1, "owl-theme", "auth-review-carousel", 3, "options"], ["carouselSlide", ""], [1, "col-xl-4"], [1, "auth-full-page-content", "p-md-5", "p-4"], [1, "d-flex", "flex-column", "h-100"], [1, "mb-4", "mb-md-5"], ["routerLink", "/", 1, "auth-logo"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "18", 1, "auth-logo-dark"], ["src", "assets/images/logo-light.png", "alt", "", "height", "18", 1, "auth-logo-light"], [1, "my-auto"], [1, "text-center"], [1, "text-muted"], [1, "col-xl-9"], [3, "formGroup", "ngSubmit"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Enter email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "float-end"], ["routerLink", "/account/recoverpwd-2", 1, "text-muted"], ["for", "userpassword"], [1, "input-group", "auth-pass-inputgroup"], ["type", "password", "formControlName", "password", "placeholder", "Enter password", "aria-label", "Password", "aria-describedby", "password-addon", 1, "form-control", 3, "ngClass"], ["type", "button", "id", "password-addon", 1, "btn", "btn-light"], [1, "mdi", "mdi-eye-outline"], [1, "form-check"], ["type", "checkbox", "id", "remember-check", 1, "form-check-input"], ["for", "remember-check", 1, "form-check-label"], [1, "mt-3", "d-grid"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], [1, "mt-4", "text-center"], [1, "font-size-14", "mb-3"], [1, "list-inline"], [1, "list-inline-item"], ["href", "javascript::void()", 1, "social-list-item", "bg-primary", "text-white", "border-primary"], [1, "mdi", "mdi-facebook"], ["href", "javascript::void()", 1, "social-list-item", "bg-info", "text-white", "border-info"], [1, "mdi", "mdi-twitter"], ["href", "javascript::void()", 1, "social-list-item", "bg-danger", "text-white", "border-danger"], [1, "mdi", "mdi-google"], [1, "mt-5", "text-center"], ["routerLink", "/account/signup-2", 1, "fw-medium", "text-primary"], [1, "item"], [1, "py-3"], [1, "font-size-16", "mb-4"], [1, "font-size-16", "text-primary"], [1, "font-size-14", "mb-0"], [1, "invalid-feedback"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "500");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "+ Satisfied Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 14)(17, "owl-carousel-o", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, LoginComponent_ng_template_18_Template, 9, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, LoginComponent_ng_template_19_Template, 9, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 17)(21, "div", 18)(22, "div", 4)(23, "div", 19)(24, "div", 20)(25, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "img", 22)(27, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 24)(29, "div", 25)(30, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Welcome Back !");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Manage your Listing and Enquiries on the go. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 8)(35, "div", 27)(36, "form", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_36_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 11)(38, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, LoginComponent_div_41_Template, 3, 2, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 11)(43, "div", 32)(44, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, LoginComponent_div_52_Template, 2, 1, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, " Remember me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 42)(58, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 44)(61, "h5", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Sign in with");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "ul", 46)(64, "li", 47)(65, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "li", 47)(68, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "li", 47)(71, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 54)(74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "Don't have an account ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, " Signup now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.carouselOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__.CarouselSlideDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 53209:
/*!***********************************************************************!*\
  !*** ./src/app/account/auth/passwordreset/passwordreset.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordresetComponent": () => (/* binding */ PasswordresetComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/auth.service */ 90263);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);








function PasswordresetComponent_ngb_alert_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.error);
} }
function PasswordresetComponent_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PasswordresetComponent_div_27_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PasswordresetComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PasswordresetComponent_div_27_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PasswordresetComponent_div_27_div_2_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.f.email.errors.email);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
/**
 * Reset-password component
 */
class PasswordresetComponent {
    // tslint:disable-next-line: max-line-length
    constructor(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.submitted = false;
        this.error = '';
        this.success = '';
        this.loading = false;
        // set the currenr year
        this.year = new Date().getFullYear();
    }
    ngOnInit() {
        this.resetForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
        });
    }
    ngAfterViewInit() {
    }
    // convenience getter for easy access to form fields
    get f() { return this.resetForm.controls; }
    /**
     * On submit form
     */
    onSubmit() {
        this.success = '';
        this.submitted = true;
        // stop here if form is invalid
        if (this.resetForm.invalid) {
            return;
        }
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.defaultauth === 'firebase') {
            this.authenticationService.resetPassword(this.f.email.value)
                .catch(error => {
                this.error = error ? error : '';
            });
        }
    }
}
PasswordresetComponent.ɵfac = function PasswordresetComponent_Factory(t) { return new (t || PasswordresetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService)); };
PasswordresetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PasswordresetComponent, selectors: [["app-passwordreset"]], decls: 40, vars: 7, consts: [[1, "account-pages", "my-5", "pt-sm-5"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card", "overflow-hidden"], [1, "bg-soft", "bg-primary"], [1, "row"], [1, "col-7"], [1, "text-primary", "p-4"], [1, "text-primary"], [1, "col-5", "align-self-end"], ["src", "assets/images/profile-img.png", "alt", "", 1, "img-fluid"], [1, "card-body", "pt-0"], ["routerLink", "/"], [1, "avatar-md", "profile-user-wid", "mb-4"], [1, "avatar-title", "rounded-circle", "bg-light"], ["src", "assets/images/logo.svg", "alt", "", "height", "34", 1, "rounded-circle"], ["name", "resetForm", "novalidate", "", 1, "needs-validation", 3, "formGroup", "ngSubmit"], ["type", "danger", 3, "dismissible", 4, "ngIf"], [1, "mb-3"], ["for", "email"], ["type", "email", "formControlName", "email", "id", "email", "placeholder", "Email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "text-end"], ["type", "submit", 1, "btn", "btn-primary", "w-md"], [1, "mt-5", "text-center"], ["routerLink", "/account/login", 1, "fw-medium", "text-primary"], [1, "mdi", "mdi-heart", "text-danger"], ["type", "danger", 3, "dismissible"], [1, "invalid-feedback"], [4, "ngIf"]], template: function PasswordresetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Re-Password with Vendor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12)(16, "div")(17, "a", 13)(18, "div", 14)(19, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function PasswordresetComponent_Template_form_ngSubmit_21_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, PasswordresetComponent_ngb_alert_22_Template, 2, 2, "ngb-alert", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 19)(24, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, PasswordresetComponent_div_27_Template, 3, 2, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 23)(29, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 25)(32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Remember It ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Sign In here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " by Wizgle consulting pvt ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.resetForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " Vendor. Crafted with ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbAlert, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXNzd29yZHJlc2V0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 81654:
/*!*******************************************************************!*\
  !*** ./src/app/account/auth/recoverpwd2/recoverpwd2.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Recoverpwd2Component": () => (/* binding */ Recoverpwd2Component)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/auth.service */ 90263);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-owl-carousel-o */ 37297);









function Recoverpwd2Component_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37)(1, "div", 38)(2, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\" Fantastic theme with a ton of options. If you just want the HTML to integrate with your project, then this is the package. You can find the files in the 'dist' folder...no need to install git and all the other stuff the documentation talks about. \" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div")(5, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Abs1981");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "- Vendor User");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} }
function Recoverpwd2Component_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37)(1, "div", 38)(2, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\" If Every Vendor on Envato are as supportive as Themesbrand, Development with be a nice experience. You guys are Wonderful. Keep us the good work. \"");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div")(5, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "nezerious");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "- Vendor User");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} }
function Recoverpwd2Component_ngb_alert_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.error);
} }
function Recoverpwd2Component_div_44_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function Recoverpwd2Component_div_44_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function Recoverpwd2Component_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Recoverpwd2Component_div_44_div_1_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, Recoverpwd2Component_div_44_div_2_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.f.email.errors.email);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class Recoverpwd2Component {
    constructor(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        // set the currenr year
        this.year = new Date().getFullYear();
        this.submitted = false;
        this.error = '';
        this.success = '';
        this.loading = false;
        this.carouselOption = {
            items: 1,
            loop: false,
            margin: 0,
            nav: false,
            dots: true,
            responsive: {
                680: {
                    items: 1
                },
            }
        };
    }
    ngOnInit() {
        this.resetForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.resetForm.controls; }
    /**
     * On submit form
     */
    onSubmit() {
        this.success = '';
        this.submitted = true;
        // stop here if form is invalid
        if (this.resetForm.invalid) {
            return;
        }
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.defaultauth === 'firebase') {
            this.authenticationService.resetPassword(this.f.email.value)
                .catch(error => {
                this.error = error ? error : '';
            });
        }
    }
}
Recoverpwd2Component.ɵfac = function Recoverpwd2Component_Factory(t) { return new (t || Recoverpwd2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService)); };
Recoverpwd2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Recoverpwd2Component, selectors: [["app-recoverpwd2"]], decls: 53, vars: 7, consts: [[1, "container-fluid", "p-0"], [1, "row", "g-0"], [1, "col-xl-9"], [1, "auth-full-bg", "pt-lg-5", "p-4"], [1, "w-100"], [1, "bg-overlay"], [1, "d-flex", "h-100", "flex-column"], [1, "p-4", "mt-auto"], [1, "row", "justify-content-center"], [1, "col-lg-7"], [1, "text-center"], [1, "mb-3"], [1, "bx", "bxs-quote-alt-left", "text-primary", "h1", "align-middle", "me-3"], [1, "text-primary"], ["dir", "ltr"], [1, "owl-theme", "auth-review-carousel", 3, "options"], ["carouselSlide", ""], [1, "col-xl-3"], [1, "auth-full-page-content", "p-md-5", "p-4"], [1, "d-flex", "flex-column", "h-100"], [1, "mb-4", "mb-md-5"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "18", 1, "auth-logo-dark"], ["src", "assets/images/logo-light.png", "alt", "", "height", "18", 1, "auth-logo-light"], [1, "my-auto"], [1, "text-muted"], [1, "mt-4"], ["role", "alert", 1, "alert", "alert-success", "text-center", "mb-4"], [3, "formGroup", "ngSubmit"], ["type", "danger", 3, "dismissible", 4, "ngIf"], ["for", "useremail"], ["type", "email", "formControlName", "email", "id", "useremail", "placeholder", "Enter email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "text-end"], ["type", "submit", 1, "btn", "btn-primary", "w-md"], [1, "mt-5", "text-center"], ["routerLink", "/account/login", 1, "fw-medium", "text-primary"], [1, "item"], [1, "py-3"], [1, "font-size-16", "mb-4"], [1, "font-size-16", "text-primary"], [1, "font-size-14", "mb-0"], ["type", "danger", 3, "dismissible"], [1, "invalid-feedback"], [4, "ngIf"]], template: function Recoverpwd2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "5k");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "+ Satisfied clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 14)(18, "owl-carousel-o", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, Recoverpwd2Component_ng_template_19_Template, 9, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, Recoverpwd2Component_ng_template_20_Template, 9, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 17)(22, "div", 18)(23, "div", 4)(24, "div", 19)(25, "div", 20)(26, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "img", 22)(28, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 24)(30, "div")(31, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Don't worry we are there for you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 26)(36, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " Enter your Email and instructions will be sent to you! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "form", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function Recoverpwd2Component_Template_form_ngSubmit_38_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, Recoverpwd2Component_ngb_alert_39_Template, 2, 2, "ngb-alert", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 11)(41, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, Recoverpwd2Component_div_44_Template, 3, 2, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 33)(46, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 35)(49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Remember It ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, " Sign In here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.carouselOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.resetForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbAlert, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__.CarouselSlideDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNvdmVycHdkMi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 83534:
/*!***************************************************************!*\
  !*** ./src/app/account/auth/register2/register2.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Register2Component": () => (/* binding */ Register2Component)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 25670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/auth.service */ 90263);
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/user.service */ 88386);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-owl-carousel-o */ 37297);
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-archwizard */ 38531);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-otp-input */ 2981);













function Register2Component_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 78)(1, "div", 79)(2, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\" Booked a package and got really good service from them. Special thanks to Ankit for giving us complete information related to my trip. They are always available to help you if needed. Had a really smooth trip. Will definitely recommend for a foreign trip. Thanks\" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div")(5, "h4", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "kumar kundan");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Local Guide");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} }
function Register2Component_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 78)(1, "div", 79)(2, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\" We have booked package through WTfares recently in May 2022 and we really got good service from them. Special thanks to Neha for giving us complete clarity on how to plan Tadoba trip, how many Safari\u2019s to take, which gates are having better sighting currently. Commercially also we got very good offer from them and multiple options for resort stay. Thanks WTFARES. \" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div")(5, "h4", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Vaibhab Ghadge");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Social Traveller");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} }
function Register2Component_ngb_alert_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngb-alert", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Registeration successfull. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dismissible", false);
} }
function Register2Component_ngb_alert_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngb-alert", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.error);
} }
function Register2Component_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 85);
} }
function Register2Component_div_46_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "First name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function Register2Component_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, Register2Component_div_46_div_1_Template, 2, 0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.f.fname.errors.required);
} }
function Register2Component_div_51_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Address is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function Register2Component_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, Register2Component_div_51_div_1_Template, 2, 0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.f.address.errors.required);
} }
function Register2Component_div_56_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Mobile number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function Register2Component_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, Register2Component_div_56_div_1_Template, 2, 0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.f.number.errors.required);
} }
function Register2Component_div_61_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function Register2Component_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, Register2Component_div_61_div_1_Template, 2, 0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.f.password.errors.required);
} }
function Register2Component_ng_template_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 88);
} }
function Register2Component_div_80_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Company name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function Register2Component_div_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, Register2Component_div_80_div_1_Template, 2, 0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.f.cname.errors.required);
} }
function Register2Component_div_85_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Company name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function Register2Component_div_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, Register2Component_div_85_div_1_Template, 2, 0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.f.cname.errors.required);
} }
function Register2Component_div_90_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function Register2Component_div_90_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email must be a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function Register2Component_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, Register2Component_div_90_div_1_Template, 2, 0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, Register2Component_div_90_div_2_Template, 2, 0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.f.email.errors.email);
} }
function Register2Component_div_95_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Link is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function Register2Component_div_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, Register2Component_div_95_div_1_Template, 2, 0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r13.f.link.errors.required);
} }
function Register2Component_ng_template_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 89);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class Register2Component {
    constructor(formBuilder, route, router, authenticationService, userService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.submitted = false;
        this.error = '';
        this.successmsg = false;
        this.config = {
            allowNumbersOnly: true,
            length: 4,
            isPasswordInput: false,
            disableAutoFocus: false,
            placeholder: '',
            inputStyles: {
                'width': '80px',
                'height': '50px'
            }
        };
        // set the currenr year
        this.year = new Date().getFullYear();
        this.carouselOption = {
            items: 1,
            loop: false,
            margin: 0,
            nav: false,
            dots: true,
            responsive: {
                680: {
                    items: 1
                },
            }
        };
    }
    ngOnInit() {
        document.body.classList.add('auth-body-bg');
        this.signupForm = this.formBuilder.group({
            fname: ['Pratiksha Borkar', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            email: ['pratiksha.borkar@radisson.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
            password: ['123456', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            address: ['Chhatrapati Square, Nagpur', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            cname: ['Radisson Hotel Group', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            number: ['8055844829', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(10)]],
            vname: ['Chhatrapati Square, Nagpur', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            country: ['India', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            link: ['https://www.radissonhotels.com', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.signupForm.controls; }
    /**
     * On submit form
     */
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.signupForm.invalid) {
            return;
        }
        else {
            debugger;
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.defaultauth === 'firebase') {
                this.authenticationService.register(this.f.email.value, this.f.password.value).then((res) => {
                    this.successmsg = true;
                    if (this.successmsg) {
                        this.router.navigate(['/Dashboard']);
                    }
                })
                    .catch(error => {
                    this.error = error ? error : '';
                });
            }
            else {
                this.userService.register(this.signupForm.value)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.first)())
                    .subscribe(data => {
                    this.successmsg = true;
                    if (this.successmsg) {
                        this.router.navigate(['/account/login']);
                    }
                }, error => {
                    this.error = error ? error : '';
                });
            }
        }
    }
}
Register2Component.ɵfac = function Register2Component_Factory(t) { return new (t || Register2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserProfileService)); };
Register2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: Register2Component, selectors: [["app-register2"]], decls: 141, vars: 38, consts: [[1, "container-fluid", "p-0"], [1, "row", "g-0"], [1, "col-xl-8"], [1, "auth-full-bg", "pt-lg-5", "p-4"], [1, "w-100"], [1, "bg-overlay"], [1, "d-flex", "h-100", "flex-column"], [1, "p-4", "mt-auto"], [1, "row", "justify-content-center"], [1, "col-lg-7"], [1, "text-center", "text-white"], [1, "mb-3"], [1, "bx", "bxs-quote-alt-left", "text-primary", "h1", "align-middle", "me-3"], [1, "text-primary"], ["dir", "ltr"], [1, "owl-theme", "auth-review-carousel", 3, "options"], ["carouselSlide", ""], [1, "col-xl-4"], [1, "auth-full-page-content", "p-md-5", "p-4"], [1, "d-flex", "flex-column", "h-100"], [1, "mb-4", "mb-md-5", "text-center"], ["routerLink", "/", 1, "auth-logo"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "18", 1, "auth-logo-dark"], ["src", "assets/images/logo-white.png", "alt", "", "height", "18", 1, "auth-logo-light"], [1, "my-auto"], [1, "text-primary", "text-center"], [1, "text-muted", "text-center"], [3, "navBarLayout"], [2, "width", "100%", 3, "formGroup", "ngSubmit"], ["type", "success", 3, "dismissible", 4, "ngIf"], ["type", "danger", 3, "dismissible", 4, "ngIf"], ["awWizardStepSymbol", ""], [1, "col-9"], ["for", "fname"], ["name", "fname", "type", "text", "placeholder", "Eg. Sikhar Kumar", "formControlName", "fname", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "address"], ["name", "address", "type", "text", "placeholder", "Eg. Rawat", "formControlName", "address", 1, "form-control", 3, "ngClass"], ["for", "number"], ["name", "number", "type", "number", "placeholder", "Eg. 8055844829", "formControlName", "number", 1, "form-control", 3, "ngClass"], ["for", "password"], ["name", "password", "type", "password", "placeholder", "Eg. Goodday@01012023", "formControlName", "password", 1, "form-control", 3, "ngClass"], [1, "form-check"], ["type", "checkbox", "id", "remember-check", 1, "form-check-input"], ["for", "remember-check", 1, "form-check-label"], ["href", "javascript: void(0);", 1, "text-primary"], [1, "list-inline", "wizard", "mb-0"], [1, "next", "list-inline-item", "mt-5", "d-flex", "justify-content-center"], ["awNextStep", "", 1, "btn", "btn-primary", "w-lg"], ["for", "cname"], ["name", "cname", "type", "text", "placeholder", "Eg. Empress Group", "formControlName", "cname", 1, "form-control", 3, "ngClass"], ["name", "vname", "type", "text", "placeholder", "9, Civil Lines, Nagpur", "formControlName", "vname", 1, "form-control", 3, "ngClass"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Eg. empress.group@gmail.com", 1, "form-control", 3, "ngClass"], ["for", "link"], ["name", "link", "type", "text", "placeholder", "Eg. https://empressgroup.com", "formControlName", "link", 1, "form-control", 3, "ngClass"], [1, "list-inline", "wizard", "mb-0", "mt-5"], [1, "previous", "list-inline-item"], ["awPreviousStep", "", 1, "btn", "btn-secondary"], [1, "next", "list-inline-item", "float-end"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "p-2"], [1, "text-center"], [1, "avatar-md", "mx-auto"], [1, "avatar-title", "rounded-circle", "bg-light"], [1, "bx", "bx-check-shield", "h1", "mb-0", "text-primary"], [1, "p-2", "mt-4"], [1, "mb-5"], [1, "fw-semibold"], [3, "config"], [1, "mt-4"], ["routerLink", "/", 1, "btn", "btn-success", "w-md"], ["awNextStep", "", "type", "submit", 1, "btn", "btn-primary", "w-lg", 3, "click"], [1, "mt-5", "text-center"], ["routerLink", "/account/login", 1, "fw-medium", "text-primary"], [1, "item"], [1, "py-3"], [1, "font-size-16", "mb-4"], [1, "font-size-16", "text-primary"], [1, "font-size-14", "mb-0"], ["type", "success", 3, "dismissible"], ["type", "danger", 3, "dismissible"], [1, "fas", "fa-user"], [1, "invalid-feedback"], [4, "ngIf"], [1, "fas", "fa-building"], [1, "fas", "fa-check-circle"]], template: function Register2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "500");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "+ Satisfied Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 14)(17, "owl-carousel-o", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, Register2Component_ng_template_18_Template, 9, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, Register2Component_ng_template_19_Template, 9, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 17)(21, "div", 18)(22, "div", 4)(23, "div", 19)(24, "div", 20)(25, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "img", 22)(27, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 24)(29, "div")(30, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Register Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Get your free account now.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "aw-wizard", 27)(35, "form", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function Register2Component_Template_form_ngSubmit_35_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, Register2Component_ngb_alert_36_Template, 2, 1, "ngb-alert", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, Register2Component_ngb_alert_37_Template, 2, 2, "ngb-alert", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "aw-wizard-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, Register2Component_ng_template_39_Template, 1, 0, "ng-template", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 8)(41, "div", 32)(42, "div", 11)(43, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, Register2Component_div_46_Template, 2, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 11)(48, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, Register2Component_div_51_Template, 2, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 11)(53, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, Register2Component_div_56_Template, 2, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 11)(58, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](61, Register2Component_div_61_Template, 2, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, " I have read, accepted and agreed to the");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Terms and Conditions and Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "ul", 46)(69, "li", 47)(70, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "aw-wizard-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](73, Register2Component_ng_template_73_Template, 1, 0, "ng-template", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 8)(75, "div", 32)(76, "div", 11)(77, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Venue/Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](80, Register2Component_div_80_Template, 2, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 11)(82, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "Venue/Company Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](84, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](85, Register2Component_div_85_Template, 2, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 11)(87, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "Email ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](89, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](90, Register2Component_div_90_Template, 3, 2, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 11)(92, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](94, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](95, Register2Component_div_95_Template, 2, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "ul", 56)(97, "li", 57)(98, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "li", 59)(101, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "aw-wizard-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](104, Register2Component_ng_template_104_Template, 1, 0, "ng-template", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 60)(106, "div", 61)(107, "div", 62)(108, "div", 63)(109, "div", 64)(110, "div", 65)(111, "div", 66)(112, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](113, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "div", 69)(115, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "Verify using your mobile number or email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, "Please enter the 4 digit code sent to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, "+91 8055844829");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "pratiksha.borkar@radisson.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](125, "ng-otp-input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "div", 73)(127, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "ul", 46)(130, "li", 57)(131, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "li", 59)(134, "button", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Register2Component_Template_button_click_134_listener() { return ctx.router.navigate(["account/login"]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "div", 76)(137, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](138, "Already have an account ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140, " Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.carouselOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("navBarLayout", "large-empty-symbols");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.successmsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](22, _c0, ctx.submitted && ctx.f.fname.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.fname.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](24, _c0, ctx.submitted && ctx.f.address.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.address.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](26, _c0, ctx.submitted && ctx.f.number.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.number.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](28, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](30, _c0, ctx.submitted && ctx.f.cname.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.cname.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](32, _c0, ctx.submitted && ctx.f.cname.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.cname.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](34, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](36, _c0, ctx.submitted && ctx.f.link.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.link.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbAlert, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__.CarouselSlideDirective, angular_archwizard__WEBPACK_IMPORTED_MODULE_10__.WizardComponent, angular_archwizard__WEBPACK_IMPORTED_MODULE_10__.WizardStepComponent, angular_archwizard__WEBPACK_IMPORTED_MODULE_10__.NextStepDirective, angular_archwizard__WEBPACK_IMPORTED_MODULE_10__.PreviousStepDirective, angular_archwizard__WEBPACK_IMPORTED_MODULE_10__.WizardStepSymbolDirective, ng_otp_input__WEBPACK_IMPORTED_MODULE_11__.NgOtpInputComponent], styles: [".otp-input[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSiIsImZpbGUiOiJyZWdpc3RlcjIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3RwLWlucHV0e1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 74076:
/*!*********************************************************!*\
  !*** ./src/app/account/auth/signup/signup.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 25670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/auth.service */ 90263);
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/user.service */ 88386);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);










function SignupComponent_ngb_alert_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngb-alert", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Registeration successfull. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dismissible", false);
} }
function SignupComponent_ngb_alert_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngb-alert", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.error);
} }
function SignupComponent_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Userame is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignupComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SignupComponent_div_29_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.f.username.errors.required);
} }
function SignupComponent_div_34_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignupComponent_div_34_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignupComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SignupComponent_div_34_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SignupComponent_div_34_div_2_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.f.email.errors.email);
} }
function SignupComponent_div_39_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignupComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SignupComponent_div_39_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.f.password.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class SignupComponent {
    // tslint:disable-next-line: max-line-length
    constructor(formBuilder, route, router, authenticationService, userService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.submitted = false;
        this.error = '';
        this.successmsg = false;
        // set the currenr year
        this.year = new Date().getFullYear();
    }
    ngOnInit() {
        this.signupForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.signupForm.controls; }
    /**
     * On submit form
     */
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.signupForm.invalid) {
            return;
        }
        else {
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.defaultauth === 'firebase') {
                this.authenticationService.register(this.f.email.value, this.f.password.value).then((res) => {
                    this.successmsg = true;
                    if (this.successmsg) {
                        this.router.navigate(['/dashboard']);
                    }
                })
                    .catch(error => {
                    this.error = error ? error : '';
                });
            }
            else {
                this.userService.register(this.signupForm.value)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.first)())
                    .subscribe(data => {
                    this.successmsg = true;
                    if (this.successmsg) {
                        this.router.navigate(['/account/login']);
                    }
                }, error => {
                    this.error = error ? error : '';
                });
            }
        }
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserProfileService)); };
SignupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 66, vars: 15, consts: [[1, "account-pages", "my-5", "pt-sm-5"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card", "overflow-hidden"], [1, "bg-soft", "bg-primary"], [1, "row"], [1, "col-7"], [1, "p-4"], [1, ""], [1, "col-5", "align-self-end"], ["src", "assets/images/profile-img.png", "alt", "", 1, "img-fluid"], [1, "card-body", "pt-0"], ["routerLink", "/"], [1, "avatar-md", "profile-user-wid", "mb-4"], [1, "avatar-title", "rounded-circle", "bg-light"], ["src", "assets/images/logo.svg", "alt", "", "height", "34", 1, "rounded-circle"], [1, "p-2"], ["name", "signupForm", "novalidate", "", 1, "needs-validation", 3, "formGroup", "ngSubmit"], ["type", "success", 3, "dismissible", 4, "ngIf"], ["type", "danger", 3, "dismissible", 4, "ngIf"], [1, "mb-3"], ["for", "username", 1, "form-label"], ["type", "text", "formControlName", "username", "id", "username", "placeholder", "Enter username", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "email", 1, "form-label"], ["type", "email", "formControlName", "email", "id", "email", "placeholder", "Email", 1, "form-control", 3, "ngClass"], ["for", "password", 1, "form-label"], ["type", "password", "formControlName", "password", "id", "password", "placeholder", "Password", 1, "form-control", 3, "ngClass"], [1, "mt-4", "d-grid"], ["type", "submit", 1, "btn", "btn-primary"], [1, "mt-4", "text-center"], [1, "font-size-14", "mb-3"], [1, "list-inline"], [1, "list-inline-item"], ["href", "javascript::void()", 1, "social-list-item", "bg-primary", "text-white", "border-primary"], [1, "mdi", "mdi-facebook"], ["href", "javascript::void()", 1, "social-list-item", "bg-info", "text-white", "border-info"], [1, "mdi", "mdi-twitter"], ["href", "javascript::void()", 1, "social-list-item", "bg-danger", "text-white", "border-danger"], [1, "mdi", "mdi-google"], [1, "mb-0"], ["href", "javascript: void(0);", 1, "text-primary"], [1, "mt-5", "text-center"], ["routerLink", "/account/login", 1, "fw-medium", "text-primary"], ["type", "success", 3, "dismissible"], ["type", "danger", 3, "dismissible"], [1, "invalid-feedback"], [4, "ngIf"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Free Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Get your free account now.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 12)(16, "div")(17, "a", 13)(18, "div", 14)(19, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 17)(22, "form", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_22_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, SignupComponent_ngb_alert_23_Template, 2, 1, "ngb-alert", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, SignupComponent_ngb_alert_24_Template, 2, 2, "ngb-alert", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 21)(26, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, SignupComponent_div_29_Template, 2, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 21)(31, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, SignupComponent_div_34_Template, 3, 2, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 21)(36, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, SignupComponent_div_39_Template, 2, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 29)(41, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 31)(44, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Sign in with");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "ul", 33)(47, "li", 34)(48, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "li", 34)(51, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "li", 34)(54, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 31)(57, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "By registering you agree to the Vendor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 43)(62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Already have an account ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, " Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.successmsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, ctx.submitted && ctx.f.username.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.username.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbAlert, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 88386:
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfileService": () => (/* binding */ UserProfileService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);


class UserProfileService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get(`/api/login`);
    }
    register(user) {
        return this.http.post(`/users/register`, user);
    }
}
UserProfileService.ɵfac = function UserProfileService_Factory(t) { return new (t || UserProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
UserProfileService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserProfileService, factory: UserProfileService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 38531:
/*!*************************************************************************************!*\
  !*** ./node_modules/angular-archwizard/__ivy_ngcc__/fesm2015/angular-archwizard.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArchwizardModule": () => (/* binding */ ArchwizardModule),
/* harmony export */   "BaseNavigationMode": () => (/* binding */ BaseNavigationMode),
/* harmony export */   "CompletedStepDirective": () => (/* binding */ CompletedStepDirective),
/* harmony export */   "ConfigurableNavigationMode": () => (/* binding */ ConfigurableNavigationMode),
/* harmony export */   "EnableBackLinksDirective": () => (/* binding */ EnableBackLinksDirective),
/* harmony export */   "GoToStepDirective": () => (/* binding */ GoToStepDirective),
/* harmony export */   "MovingDirection": () => (/* binding */ MovingDirection),
/* harmony export */   "NavigationModeDirective": () => (/* binding */ NavigationModeDirective),
/* harmony export */   "NextStepDirective": () => (/* binding */ NextStepDirective),
/* harmony export */   "OptionalStepDirective": () => (/* binding */ OptionalStepDirective),
/* harmony export */   "PreviousStepDirective": () => (/* binding */ PreviousStepDirective),
/* harmony export */   "ResetWizardDirective": () => (/* binding */ ResetWizardDirective),
/* harmony export */   "SelectedStepDirective": () => (/* binding */ SelectedStepDirective),
/* harmony export */   "WizardCompletionStep": () => (/* binding */ WizardCompletionStep),
/* harmony export */   "WizardCompletionStepComponent": () => (/* binding */ WizardCompletionStepComponent),
/* harmony export */   "WizardCompletionStepDirective": () => (/* binding */ WizardCompletionStepDirective),
/* harmony export */   "WizardComponent": () => (/* binding */ WizardComponent),
/* harmony export */   "WizardNavigationBarComponent": () => (/* binding */ WizardNavigationBarComponent),
/* harmony export */   "WizardStep": () => (/* binding */ WizardStep),
/* harmony export */   "WizardStepComponent": () => (/* binding */ WizardStepComponent),
/* harmony export */   "WizardStepDirective": () => (/* binding */ WizardStepDirective),
/* harmony export */   "WizardStepSymbolDirective": () => (/* binding */ WizardStepSymbolDirective),
/* harmony export */   "WizardStepTitleDirective": () => (/* binding */ WizardStepTitleDirective),
/* harmony export */   "isStepId": () => (/* binding */ isStepId),
/* harmony export */   "isStepIndex": () => (/* binding */ isStepIndex),
/* harmony export */   "isStepOffset": () => (/* binding */ isStepOffset)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);



/**
 * The `awWizardStepSymbol` directive can be used as an alternative to the `navigationSymbol` input of a [[WizardStep]]
 * to define the step symbol inside the navigation bar.  This way step symbol may contain arbitrary content.
 *
 * ### Syntax
 *
 * ```html
 * <ng-template awWizardStepSymbol>
 *     ...
 * </ng-template>
 * ```
 */


const _c0 = ["*"];
const _c1 = function (a0, a1, a2, a3, a4, a5, a6) {
  return {
    "vertical": a0,
    "horizontal": a1,
    "small": a2,
    "large-filled": a3,
    "large-filled-symbols": a4,
    "large-empty": a5,
    "large-empty-symbols": a6
  };
};
function WizardComponent_aw_wizard_navigation_bar_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "aw-wizard-navigation-bar", 1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction7"](1, _c1, ctx_r0.navBarLocation == "left", ctx_r0.navBarLocation == "top", ctx_r0.navBarLayout == "small", ctx_r0.navBarLayout == "large-filled", ctx_r0.navBarLayout == "large-filled-symbols", ctx_r0.navBarLayout == "large-empty", ctx_r0.navBarLayout == "large-empty-symbols"));
  }
}
function WizardComponent_aw_wizard_navigation_bar_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "aw-wizard-navigation-bar", 1);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction7"](1, _c1, ctx_r1.navBarLocation == "right", ctx_r1.navBarLocation == "bottom", ctx_r1.navBarLayout == "small", ctx_r1.navBarLayout == "large-filled", ctx_r1.navBarLayout == "large-filled-symbols", ctx_r1.navBarLayout == "large-empty", ctx_r1.navBarLayout == "large-empty-symbols"));
  }
}
const _c2 = function (a1, a2) {
  return {
    "wizard-steps": true,
    "vertical": a1,
    "horizontal": a2
  };
};
const _c3 = function (a0) {
  return {
    wizardStep: a0
  };
};
function WizardNavigationBarComponent_li_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 7);
  }
  if (rf & 2) {
    const step_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", step_r1.stepTitleTemplate.templateRef)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, step_r1));
  }
}
function WizardNavigationBarComponent_li_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const step_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](step_r1.stepTitle);
  }
}
function WizardNavigationBarComponent_li_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 7);
  }
  if (rf & 2) {
    const step_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", step_r1.stepSymbolTemplate.templateRef)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, step_r1));
  }
}
function WizardNavigationBarComponent_li_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const step_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](step_r1.navigationSymbol.symbol);
  }
}
const _c4 = function (a0, a1, a2, a3, a4, a5) {
  return {
    "current": a0,
    "editing": a1,
    "done": a2,
    "optional": a3,
    "completed": a4,
    "navigable": a5
  };
};
const _c5 = function (a0) {
  return {
    "font-family": a0
  };
};
function WizardNavigationBarComponent_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 1)(1, "a", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WizardNavigationBarComponent_li_1_ng_container_3_Template, 1, 4, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WizardNavigationBarComponent_li_1_ng_container_4_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WizardNavigationBarComponent_li_1_ng_container_6_Template, 1, 4, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WizardNavigationBarComponent_li_1_ng_container_7_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](8, _c4, ctx_r0.isCurrent(step_r1), ctx_r0.isEditing(step_r1), ctx_r0.isDone(step_r1), ctx_r0.isOptional(step_r1), ctx_r0.isCompleted(step_r1), ctx_r0.isNavigable(step_r1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", step_r1.stepId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("awGoToStep", step_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", step_r1.stepTitleTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !step_r1.stepTitleTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c5, step_r1.stepSymbolTemplate ? "" : step_r1.navigationSymbol.fontFamily));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", step_r1.stepSymbolTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !step_r1.stepSymbolTemplate);
  }
}
class WizardStepSymbolDirective {
  /**
   * Constructor
   *
   * @param templateRef A reference to the content of the `ng-template` that contains this [[WizardStepSymbolDirective]]
   */
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
}
WizardStepSymbolDirective.ɵfac = function WizardStepSymbolDirective_Factory(t) {
  return new (t || WizardStepSymbolDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
WizardStepSymbolDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: WizardStepSymbolDirective,
  selectors: [["ng-template", "awStepSymbol", ""], ["ng-template", "awWizardStepSymbol", ""]]
});
WizardStepSymbolDirective.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
}];
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WizardStepSymbolDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[awStepSymbol], ng-template[awWizardStepSymbol]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();

/**
 * The `awWizardStepTitle` directive can be used as an alternative to the `stepTitle` input of a [[WizardStep]]
 * to define the content of a step title inside the navigation bar.
 * This step title can be freely created and can contain more than only plain text
 *
 * ### Syntax
 *
 * ```html
 * <ng-template awWizardStepTitle>
 *     ...
 * </ng-template>
 * ```
 *
 * @author Marc Arndt
 */
class WizardStepTitleDirective {
  /**
   * Constructor
   *
   * @param templateRef A reference to the content of the `ng-template` that contains this [[WizardStepTitleDirective]]
   */
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
}
WizardStepTitleDirective.ɵfac = function WizardStepTitleDirective_Factory(t) {
  return new (t || WizardStepTitleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
WizardStepTitleDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: WizardStepTitleDirective,
  selectors: [["ng-template", "awStepTitle", ""], ["ng-template", "awWizardStepTitle", ""]]
});
WizardStepTitleDirective.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
}];
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WizardStepTitleDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[awStepTitle], ng-template[awWizardStepTitle]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();

/**
 * Basic functionality every type of wizard step needs to provide
 *
 * @author Marc Arndt
 */
/* tslint:disable-next-line directive-class-suffix */
class WizardStep {
  constructor() {
    /**
     * A symbol property, which contains an optional symbol for the step inside the navigation bar.
     * Takes effect when `stepSymbolTemplate` is not defined or null.
     */
    this.navigationSymbol = {
      symbol: ''
    };
    /**
     * A boolean describing if the wizard step is currently selected
     */
    this.selected = false;
    /**
     * A boolean describing if the wizard step has been completed
     */
    this.completed = false;
    /**
     * A boolean describing if the wizard step is shown as completed when the wizard is presented to the user
     *
     * Users will typically use `CompletedStepDirective` to set this flag
     */
    this.initiallyCompleted = false;
    /**
     * A boolean describing if the wizard step is being edited after being competed
     *
     * This flag can only be true when `selected` is true.
     */
    this.editing = false;
    /**
     * A boolean describing, if the wizard step should be selected by default, i.e. after the wizard has been initialized as the initial step
     */
    this.defaultSelected = false;
    /**
     * A boolean describing if the wizard step is an optional step
     */
    this.optional = false;
    /**
     * A function or boolean deciding, if this step can be entered
     */
    this.canEnter = true;
    /**
     * A function or boolean deciding, if this step can be exited
     */
    this.canExit = true;
    /**
     * This [[EventEmitter]] is called when the step is entered.
     * The bound method should be used to do initialization work.
     */
    this.stepEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This [[EventEmitter]] is called when the step is exited.
     * The bound method can be used to do cleanup work.
     */
    this.stepExit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  /**
   * Returns true if this wizard step should be visible to the user.
   * If the step should be visible to the user false is returned, otherwise true
   */
  get hidden() {
    return !this.selected;
  }
  /**
   * This method returns true, if this wizard step can be transitioned with a given direction.
   * Transitioned in this case means either entered or exited, depending on the given `condition` parameter.
   *
   * @param condition A condition variable, deciding if the step can be transitioned
   * @param direction The direction in which this step should be transitioned
   * @returns A [[Promise]] containing `true`, if this step can transitioned in the given direction
   * @throws An `Error` is thrown if `condition` is neither a function nor a boolean
   */
  static canTransitionStep(condition, direction) {
    if (typeof condition === typeof true) {
      return Promise.resolve(condition);
    } else if (condition instanceof Function) {
      return Promise.resolve(condition(direction));
    } else {
      return Promise.reject(new Error(`Input value '${condition}' is neither a boolean nor a function`));
    }
  }
  /**
   * A function called when the step is entered
   *
   * @param direction The direction in which the step is entered
   */
  enter(direction) {
    this.stepEnter.emit(direction);
  }
  /**
   * A function called when the step is exited
   *
   * @param direction The direction in which the step is exited
   */
  exit(direction) {
    this.stepExit.emit(direction);
  }
  /**
   * This method returns true, if this wizard step can be entered from the given direction.
   * Because this method depends on the value `canEnter`, it will throw an error, if `canEnter` is neither a boolean
   * nor a function.
   *
   * @param direction The direction in which this step should be entered
   * @returns A [[Promise]] containing `true`, if the step can be entered in the given direction, false otherwise
   * @throws An `Error` is thrown if `anEnter` is neither a function nor a boolean
   */
  canEnterStep(direction) {
    return WizardStep.canTransitionStep(this.canEnter, direction);
  }
  /**
   * This method returns true, if this wizard step can be exited into given direction.
   * Because this method depends on the value `canExit`, it will throw an error, if `canExit` is neither a boolean
   * nor a function.
   *
   * @param direction The direction in which this step should be left
   * @returns A [[Promise]] containing `true`, if the step can be exited in the given direction, false otherwise
   * @throws An `Error` is thrown if `canExit` is neither a function nor a boolean
   */
  canExitStep(direction) {
    return WizardStep.canTransitionStep(this.canExit, direction);
  }
}
WizardStep.ɵfac = function WizardStep_Factory(t) {
  return new (t || WizardStep)();
};
WizardStep.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: WizardStep,
  contentQueries: function WizardStep_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, WizardStepTitleDirective, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, WizardStepSymbolDirective, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepTitleTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepSymbolTemplate = _t.first);
    }
  },
  hostVars: 1,
  hostBindings: function WizardStep_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("hidden", ctx.hidden);
    }
  },
  inputs: {
    navigationSymbol: "navigationSymbol",
    canEnter: "canEnter",
    canExit: "canExit",
    stepId: "stepId",
    stepTitle: "stepTitle"
  },
  outputs: {
    stepEnter: "stepEnter",
    stepExit: "stepExit"
  }
});
WizardStep.propDecorators = {
  stepTitleTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
    args: [WizardStepTitleDirective]
  }],
  stepSymbolTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
    args: [WizardStepSymbolDirective]
  }],
  stepId: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  stepTitle: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  navigationSymbol: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  canEnter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  canExit: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  stepEnter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  stepExit: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  hidden: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
    args: ['hidden']
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WizardStep, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [];
  }, {
    navigationSymbol: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    canEnter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    canExit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    stepEnter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    stepExit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    hidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['hidden']
    }],
    stepTitleTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [WizardStepTitleDirective]
    }],
    stepSymbolTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [WizardStepSymbolDirective]
    }],
    stepId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    stepTitle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/**
 * Basic functionality every wizard completion step needs to provide
 *
 * @author Marc Arndt
 */
/* tslint:disable-next-line directive-class-suffix */
class WizardCompletionStep extends WizardStep {
  constructor() {
    super(...arguments);
    /**
     * @inheritDoc
     */
    this.stepExit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * @inheritDoc
     */
    this.canExit = false;
  }
  /**
   * @inheritDoc
   */
  enter(direction) {
    this.completed = true;
    this.stepEnter.emit(direction);
  }
  /**
   * @inheritDoc
   */
  exit(direction) {
    // set this completion step as incomplete (unless it happens to be initiallyCompleted)
    this.completed = this.initiallyCompleted;
    this.stepExit.emit(direction);
  }
}
WizardCompletionStep.ɵfac = /*@__PURE__*/function () {
  let ɵWizardCompletionStep_BaseFactory;
  return function WizardCompletionStep_Factory(t) {
    return (ɵWizardCompletionStep_BaseFactory || (ɵWizardCompletionStep_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](WizardCompletionStep)))(t || WizardCompletionStep);
  };
}();
WizardCompletionStep.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: WizardCompletionStep,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WizardCompletionStep, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], null, null);
})();

/**
 * The `aw-wizard-completion-step` component can be used to define a completion/success step at the end of your wizard
 * After a `aw-wizard-completion-step` has been entered, it has the characteristic that the user is blocked from
 * leaving it again to a previous step.
 * In addition entering a `aw-wizard-completion-step` automatically sets the `aw-wizard` and all steps inside the `aw-wizard`
 * as completed.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-completion-step [stepTitle]="title of the wizard step"
 *    [navigationSymbol]="{ symbol: 'navigation symbol', fontFamily: 'navigation symbol font family' }"
 *    (stepEnter)="event emitter to be called when the wizard step is entered"
 *    (stepExit)="event emitter to be called when the wizard step is exited">
 *    ...
 * </aw-wizard-completion-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <aw-wizard-completion-step stepTitle="Step 1" [navigationSymbol]="{ symbol: '1' }">
 *    ...
 * </aw-wizard-completion-step>
 * ```
 *
 * With a navigation symbol from the `font-awesome` font:
 *
 * ```html
 * <aw-wizard-completion-step stepTitle="Step 1" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
 *    ...
 * </aw-wizard-completion-step>
 * ```
 *
 * @author Marc Arndt
 */
class WizardCompletionStepComponent extends WizardCompletionStep {}
WizardCompletionStepComponent.ɵfac = /*@__PURE__*/function () {
  let ɵWizardCompletionStepComponent_BaseFactory;
  return function WizardCompletionStepComponent_Factory(t) {
    return (ɵWizardCompletionStepComponent_BaseFactory || (ɵWizardCompletionStepComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](WizardCompletionStepComponent)))(t || WizardCompletionStepComponent);
  };
}();
WizardCompletionStepComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: WizardCompletionStepComponent,
  selectors: [["aw-wizard-completion-step"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: WizardStep,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardCompletionStepComponent)
  }, {
    provide: WizardCompletionStep,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardCompletionStepComponent)
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WizardCompletionStepComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WizardCompletionStepComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'aw-wizard-completion-step',
      template: "<ng-content></ng-content>\n",
      providers: [{
        provide: WizardStep,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardCompletionStepComponent)
      }, {
        provide: WizardCompletionStep,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardCompletionStepComponent)
      }]
    }]
  }], null, null);
})();

/**
 * The direction in which a step transition was made
 *
 * @author Marc Arndt
 */
/**
 * This enum contains the different possible moving directions in which a wizard can be traversed
 *
 * @author Marc Arndt
 */
var MovingDirection;
(function (MovingDirection) {
  /**
   * A forward step transition
   */
  MovingDirection[MovingDirection["Forwards"] = 0] = "Forwards";
  /**
   * A backward step transition
   */
  MovingDirection[MovingDirection["Backwards"] = 1] = "Backwards";
  /**
   * No step transition was done
   */
  MovingDirection[MovingDirection["Stay"] = 2] = "Stay";
})(MovingDirection || (MovingDirection = {}));

/**
 * Base implementation of [[NavigationMode]]
 *
 * Note: Built-in [[NavigationMode]] classes should be stateless, allowing the library user to easily create
 * an instance of a particular [[NavigationMode]] class and pass it to `<aw-wizard [navigationMode]="...">`.
 *
 * @author Marc Arndt
 */
class BaseNavigationMode {
  /**
   * Checks, whether a wizard step, as defined by the given destination index, can be transitioned to.
   *
   * This method controls navigation by [[goToStep]], [[goToPreviousStep]], and [[goToNextStep]] directives.
   * Navigation by navigation bar is governed by [[isNavigable]].
   *
   * In this implementation, a destination wizard step can be entered if:
   * - it exists
   * - the current step can be exited in the direction of the destination step
   * - the destination step can be entered in the direction from the current step
   *
   * Subclasses can impose additional restrictions, see [[canTransitionToStep]].
   *
   * @param wizard The wizard component to operate on
   * @param destinationIndex The index of the destination step
   * @returns A [[Promise]] containing `true`, if the destination step can be transitioned to and `false` otherwise
   */
  canGoToStep(wizard, destinationIndex) {
    const hasStep = wizard.hasStep(destinationIndex);
    const movingDirection = wizard.getMovingDirection(destinationIndex);
    const canExitCurrentStep = previous => {
      return previous && wizard.currentStep.canExitStep(movingDirection);
    };
    const canEnterDestinationStep = previous => {
      return previous && wizard.getStepAtIndex(destinationIndex).canEnterStep(movingDirection);
    };
    const canTransitionToStep = previous => {
      return previous && this.canTransitionToStep(wizard, destinationIndex);
    };
    return Promise.resolve(hasStep).then(canTransitionToStep)
    // Apply user-defined checks at the end.  They can involve user interaction
    // which is better to be avoided if navigation mode does not actually allow the transition
    // (`canTransitionToStep` returns `false`).
    .then(canExitCurrentStep).then(canEnterDestinationStep);
  }
  /**
   * Imposes additional restrictions for `canGoToStep` in current navigation mode.
   *
   * The base implementation allows transition iff the given step is navigable from the navigation bar (see `isNavigable`).
   * However, in some navigation modes `canTransitionToStep` can be more relaxed to allow navigation to certain steps
   * by previous/next buttons, but not using the navigation bar.
   *
   * @param wizard The wizard component to operate on
   * @param destinationIndex The index of the destination step
   * @returns `true`, if the destination step can be transitioned to and `false` otherwise
   */
  canTransitionToStep(wizard, destinationIndex) {
    return this.isNavigable(wizard, destinationIndex);
  }
  /**
   * Tries to transition to the wizard step, as denoted by the given destination index.
   *
   * When entering the destination step, the following actions are done:
   * - the old current step is set as completed
   * - the old current step is set as unselected
   * - the old current step is exited
   * - the destination step is set as selected
   * - the destination step is entered
   *
   * When the destination step couldn't be entered, the following actions are done:
   * - the current step is exited and entered in the direction `MovingDirection.Stay`
   *
   * @param wizard The wizard component to operate on
   * @param destinationIndex The index of the destination wizard step, which should be entered
   * @param preFinalize An event emitter, to be called before the step has been transitioned
   * @param postFinalize An event emitter, to be called after the step has been transitioned
   */
  goToStep(wizard, destinationIndex, preFinalize, postFinalize) {
    this.canGoToStep(wizard, destinationIndex).then(navigationAllowed => {
      if (navigationAllowed) {
        // the current step can be exited in the given direction
        const movingDirection = wizard.getMovingDirection(destinationIndex);
        /* istanbul ignore if */
        if (preFinalize) {
          preFinalize.emit();
        }
        // leave current step
        wizard.currentStep.completed = true;
        wizard.currentStep.exit(movingDirection);
        wizard.currentStep.editing = false;
        wizard.currentStep.selected = false;
        this.transition(wizard, destinationIndex);
        // remember if the next step is already completed before entering it to properly set `editing` flag
        const wasCompleted = wizard.completed || wizard.currentStep.completed;
        // go to next step
        wizard.currentStep.enter(movingDirection);
        wizard.currentStep.selected = true;
        if (wasCompleted) {
          wizard.currentStep.editing = true;
        }
        /* istanbul ignore if */
        if (postFinalize) {
          postFinalize.emit();
        }
      } else {
        // if the current step can't be left, reenter the current step
        wizard.currentStep.exit(MovingDirection.Stay);
        wizard.currentStep.enter(MovingDirection.Stay);
      }
    });
  }
  /**
   * Transitions the wizard to the given step index.
   *
   * Can perform additional actions in particular navigation mode implementations.
   *
   * @param wizard The wizard component to operate on
   * @param destinationIndex The index of the destination wizard step
   */
  transition(wizard, destinationIndex) {
    wizard.currentStepIndex = destinationIndex;
  }
  /**
   * Resets the state of this wizard.
   *
   * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
   * In addition the whole wizard is set as incomplete.
   *
   * @param wizard The wizard component to operate on
   */
  reset(wizard) {
    this.ensureCanReset(wizard);
    // reset the step internal state
    wizard.wizardSteps.forEach(step => {
      step.completed = step.initiallyCompleted;
      step.selected = false;
      step.editing = false;
    });
    // set the first step as the current step
    wizard.currentStepIndex = wizard.defaultStepIndex;
    wizard.currentStep.selected = true;
    wizard.currentStep.enter(MovingDirection.Forwards);
  }
  /**
   * Checks if wizard configuration allows to perform reset.
   *
   * A check failure is indicated by throwing an `Error` with the message discribing the discovered misconfiguration issue.
   *
   * Can include additional checks in particular navigation mode implementations.
   *
   * @param wizard The wizard component to operate on
   * @throws An `Error` is thrown, if a micconfiguration issue is discovered.
   */
  ensureCanReset(wizard) {
    // the wizard doesn't contain a step with the default step index
    if (!wizard.hasStep(wizard.defaultStepIndex)) {
      throw new Error(`The wizard doesn't contain a step with index ${wizard.defaultStepIndex}`);
    }
  }
}

/**
 * The default navigation mode used by [[WizardComponent]] and [[NavigationModeDirective]].
 *
 * It is parameterized with two navigation policies passed to constructor:
 *
 * - [[navigateBackward]] policy controls whether wizard steps before the current step are navigable:
 *
 *   - `"deny"` -- the steps are not navigable
 *   - `"allow"` -- the steps are navigable
 *   - If the corresponding constructor argument is omitted or is `null` or `undefined`,
 *     then the default value is applied which is `"deny"`
 *
 * - [[navigateForward]] policy controls whether wizard steps after the current step are navigable:
 *
 *   - `"deny"` -- the steps are not navigable
 *   - `"allow"` -- the steps are navigable
 *   - `"visited"` -- a step is navigable iff it was already visited before
 *   - If the corresponding constructor argument is omitted or is `null` or `undefined`,
 *     then the default value is applied which is `"allow"`
 */
class ConfigurableNavigationMode extends BaseNavigationMode {
  /**
   * Constructor
   *
   * @param navigateBackward Controls whether wizard steps before the current step are navigable
   * @param navigateForward Controls whether wizard steps before the current step are navigable
   */
  constructor(navigateBackward = null, navigateForward = null) {
    super();
    this.navigateBackward = navigateBackward;
    this.navigateForward = navigateForward;
    this.navigateBackward = this.navigateBackward || 'allow';
    this.navigateForward = this.navigateForward || 'deny';
  }
  /**
   * @inheritDoc
   */
  canTransitionToStep(wizard, destinationIndex) {
    // if the destination step can be navigated to using the navigation bar,
    // it should be accessible with [goToStep] as well
    if (this.isNavigable(wizard, destinationIndex)) {
      return true;
    }
    // navigation with [goToStep] is permitted if all previous steps
    // to the destination step have been completed or are optional
    return wizard.wizardSteps.filter((step, index) => index < destinationIndex && index !== wizard.currentStepIndex).every(step => step.completed || step.optional);
  }
  /**
   * @inheritDoc
   */
  transition(wizard, destinationIndex) {
    if (this.navigateForward === 'deny') {
      // set all steps after the destination step to incomplete
      wizard.wizardSteps.filter((step, index) => wizard.currentStepIndex > destinationIndex && index > destinationIndex).forEach(step => step.completed = false);
    }
    super.transition(wizard, destinationIndex);
  }
  /**
   * @inheritDoc
   */
  isNavigable(wizard, destinationIndex) {
    // Check if the destination step can be navigated to
    const destinationStep = wizard.getStepAtIndex(destinationIndex);
    if (destinationStep instanceof WizardCompletionStep) {
      // A completion step can only be entered, if all previous steps have been completed, are optional, or selected
      const previousStepsCompleted = wizard.wizardSteps.filter((step, index) => index < destinationIndex).every(step => step.completed || step.optional || step.selected);
      if (!previousStepsCompleted) {
        return false;
      }
    }
    // Apply navigation pocicies
    if (destinationIndex < wizard.currentStepIndex) {
      // If the destination step is before current, apply the `navigateBackward` policy
      switch (this.navigateBackward) {
        case 'allow':
          return true;
        case 'deny':
          return false;
        default:
          throw new Error(`Invalid value for navigateBackward: ${this.navigateBackward}`);
      }
    } else if (destinationIndex > wizard.currentStepIndex) {
      // If the destination step is after current, apply the `navigateForward` policy
      switch (this.navigateForward) {
        case 'allow':
          return true;
        case 'deny':
          return false;
        case 'visited':
          return destinationStep.completed;
        default:
          throw new Error(`Invalid value for navigateForward: ${this.navigateForward}`);
      }
    } else {
      // Re-entering the current step is not allowed
      return false;
    }
  }
  /**
   * @inheritDoc
   */
  ensureCanReset(wizard) {
    super.ensureCanReset(wizard);
    // the default step is a completion step and the wizard contains more than one step
    const defaultWizardStep = wizard.getStepAtIndex(wizard.defaultStepIndex);
    const defaultCompletionStep = defaultWizardStep instanceof WizardCompletionStep;
    if (defaultCompletionStep && wizard.wizardSteps.length !== 1) {
      throw new Error(`The default step index ${wizard.defaultStepIndex} references a completion step`);
    }
  }
}

/**
 * The `aw-wizard` component defines the root component of a wizard.
 * Through the setting of input parameters for the `aw-wizard` component it's possible to change the location and size
 * of its navigation bar.
 *
 * ### Syntax
 * ```html
 * <aw-wizard [navBarLocation]="location of navigation bar" [navBarLayout]="layout of navigation bar">
 *     ...
 * </aw-wizard>
 * ```
 *
 * ### Example
 *
 * Without completion step:
 *
 * ```html
 * <aw-wizard navBarLocation="top" navBarLayout="small">
 *     <aw-wizard-step>...</aw-wizard-step>
 *     <aw-wizard-step>...</aw-wizard-step>
 * </aw-wizard>
 * ```
 *
 * With completion step:
 *
 * ```html
 * <aw-wizard navBarLocation="top" navBarLayout="small">
 *     <aw-wizard-step>...</aw-wizard-step>
 *     <aw-wizard-step>...</aw-wizard-step>
 *     <aw-wizard-completion-step>...</aw-wizard-completion-step>
 * </aw-wizard>
 * ```
 *
 * @author Marc Arndt
 */
class WizardComponent {
  /**
   * Constructor
   */
  constructor() {
    /**
     * The location of the navigation bar inside the wizard.
     * This location can be either top, bottom, left or right
     */
    this.navBarLocation = 'top';
    /**
     * The layout of the navigation bar inside the wizard.
     * The layout can be either small, large-filled, large-empty or large-symbols
     */
    this.navBarLayout = 'small';
    /**
     * The direction in which the steps inside the navigation bar should be shown.
     * The direction can be either `left-to-right` or `right-to-left`
     */
    this.navBarDirection = 'left-to-right';
    this._defaultStepIndex = 0;
    /**
     * True, if the navigation bar shouldn't be used for navigating
     */
    this.disableNavigationBar = false;
    /**
     * The navigation mode used to navigate inside the wizard
     *
     * For outside access, use the [[navigation]] getter.
     */
    this._navigation = new ConfigurableNavigationMode();
    /**
     * An array representation of all wizard steps belonging to this model
     *
     * For outside access, use the [[wizardSteps]] getter.
     */
    this._wizardSteps = [];
    /**
     * The index of the currently visible and selected step inside the wizardSteps QueryList.
     * If this wizard contains no steps, currentStepIndex is -1
     *
     * Note: Do not modify this field directly.  Instead, use navigation methods:
     * [[goToStep]], [[goToPreviousStep]], [[goToNextStep]].
     */
    this.currentStepIndex = -1;
  }
  /**
   * The initially selected step, represented by its index
   * Beware: This initial default is only used if no wizard step has been enhanced with the `selected` directive
   */
  get defaultStepIndex() {
    // This value can be either:
    // - the index of a wizard step with a `selected` directive, or
    // - the default step index, set in the [[WizardComponent]]
    const foundDefaultStep = this.wizardSteps.find(step => step.defaultSelected);
    if (foundDefaultStep) {
      return this.getIndexOfStep(foundDefaultStep);
    } else {
      return this._defaultStepIndex;
    }
  }
  set defaultStepIndex(defaultStepIndex) {
    this._defaultStepIndex = defaultStepIndex;
  }
  /**
   * Returns true if this wizard uses a horizontal orientation.
   * The wizard uses a horizontal orientation, iff the navigation bar is shown at the top or bottom of this wizard
   *
   * @returns True if this wizard uses a horizontal orientation
   */
  get horizontalOrientation() {
    return this.navBarLocation === 'top' || this.navBarLocation === 'bottom';
  }
  /**
   * Returns true if this wizard uses a vertical orientation.
   * The wizard uses a vertical orientation, iff the navigation bar is shown at the left or right of this wizard
   *
   * @returns True if this wizard uses a vertical orientation
   */
  get verticalOrientation() {
    return this.navBarLocation === 'left' || this.navBarLocation === 'right';
  }
  /**
   * Initialization work
   */
  ngAfterContentInit() {
    // add a subscriber to the wizard steps QueryList to listen to changes in the DOM
    this.wizardStepsQueryList.changes.subscribe(changedWizardSteps => {
      this.updateWizardSteps(changedWizardSteps.toArray());
    });
    // initialize the model
    this.updateWizardSteps(this.wizardStepsQueryList.toArray());
    // finally reset the whole wizard component
    setTimeout(() => this.reset());
  }
  /**
   * The WizardStep object belonging to the currently visible and selected step.
   * The currentStep is always the currently selected wizard step.
   * The currentStep can be either completed, if it was visited earlier,
   * or not completed, if it is visited for the first time or its state is currently out of date.
   *
   * If this wizard contains no steps, currentStep is null
   */
  get currentStep() {
    if (this.hasStep(this.currentStepIndex)) {
      return this.wizardSteps[this.currentStepIndex];
    } else {
      return null;
    }
  }
  /**
   * The completeness of the wizard.
   * If the wizard has been completed, i.e. all steps are either completed or optional, this value is true, otherwise it is false
   */
  get completed() {
    return this.wizardSteps.every(step => step.completed || step.optional);
  }
  /**
   * An array representation of all wizard steps belonging to this model
   */
  get wizardSteps() {
    return this._wizardSteps;
  }
  /**
   * Updates the wizard steps to the new array
   *
   * @param wizardSteps The updated wizard steps
   */
  updateWizardSteps(wizardSteps) {
    // the wizard is currently not in the initialization phase
    if (this.wizardSteps.length > 0 && this.currentStepIndex > -1) {
      this.currentStepIndex = wizardSteps.indexOf(this.wizardSteps[this.currentStepIndex]);
    }
    this._wizardSteps = wizardSteps;
  }
  /**
   * The navigation mode used to navigate inside the wizard
   */
  get navigation() {
    return this._navigation;
  }
  /**
   * Updates the navigation mode for this wizard component
   *
   * @param navigation The updated navigation mode
   */
  set navigation(navigation) {
    this._navigation = navigation;
  }
  /**
   * Checks if a given index `stepIndex` is inside the range of possible wizard steps inside this wizard
   *
   * @param stepIndex The to be checked index of a step inside this wizard
   * @returns True if the given `stepIndex` is contained inside this wizard, false otherwise
   */
  hasStep(stepIndex) {
    return this.wizardSteps.length > 0 && 0 <= stepIndex && stepIndex < this.wizardSteps.length;
  }
  /**
   * Checks if this wizard has a previous step, compared to the current step
   *
   * @returns True if this wizard has a previous step before the current step
   */
  hasPreviousStep() {
    return this.hasStep(this.currentStepIndex - 1);
  }
  /**
   * Checks if this wizard has a next step, compared to the current step
   *
   * @returns True if this wizard has a next step after the current step
   */
  hasNextStep() {
    return this.hasStep(this.currentStepIndex + 1);
  }
  /**
   * Checks if this wizard is currently inside its last step
   *
   * @returns True if the wizard is currently inside its last step
   */
  isLastStep() {
    return this.wizardSteps.length > 0 && this.currentStepIndex === this.wizardSteps.length - 1;
  }
  /**
   * Finds the [[WizardStep]] at the given index `stepIndex`.
   * If no [[WizardStep]] exists at the given index an Error is thrown
   *
   * @param stepIndex The given index
   * @returns The found [[WizardStep]] at the given index `stepIndex`
   * @throws An `Error` is thrown, if the given index `stepIndex` doesn't exist
   */
  getStepAtIndex(stepIndex) {
    if (!this.hasStep(stepIndex)) {
      throw new Error(`Expected a known step, but got stepIndex: ${stepIndex}.`);
    }
    return this.wizardSteps[stepIndex];
  }
  /**
   * Finds the index of the step with the given `stepId`.
   * If no step with the given `stepId` exists, `-1` is returned
   *
   * @param stepId The given step id
   * @returns The found index of a step with the given step id, or `-1` if no step with the given id is included in the wizard
   */
  getIndexOfStepWithId(stepId) {
    return this.wizardSteps.findIndex(step => step.stepId === stepId);
  }
  /**
   * Finds the index of the given [[WizardStep]] `step`.
   * If the given [[WizardStep]] is not contained inside this wizard, `-1` is returned
   *
   * @param step The given [[WizardStep]]
   * @returns The found index of `step` or `-1` if the step is not included in the wizard
   */
  getIndexOfStep(step) {
    return this.wizardSteps.indexOf(step);
  }
  /**
   * Calculates the correct [[MovingDirection]] value for a given `destinationStep` compared to the `currentStepIndex`.
   *
   * @param destinationStep The given destination step
   * @returns The calculated [[MovingDirection]]
   */
  getMovingDirection(destinationStep) {
    let movingDirection;
    if (destinationStep > this.currentStepIndex) {
      movingDirection = MovingDirection.Forwards;
    } else if (destinationStep < this.currentStepIndex) {
      movingDirection = MovingDirection.Backwards;
    } else {
      movingDirection = MovingDirection.Stay;
    }
    return movingDirection;
  }
  /**
   * Checks, whether a wizard step, as defined by the given destination index, can be transitioned to.
   *
   * This method controls navigation by [[goToStep]], [[goToPreviousStep]], and [[goToNextStep]] directives.
   * Navigation by navigation bar is governed by [[isNavigable]].
   *
   * @param destinationIndex The index of the destination step
   * @returns A [[Promise]] containing `true`, if the destination step can be transitioned to and false otherwise
   */
  canGoToStep(destinationIndex) {
    return this.navigation.canGoToStep(this, destinationIndex);
  }
  /**
   * Tries to transition to the wizard step, as denoted by the given destination index.
   *
   * Note: You do not have to call [[canGoToStep]] before calling [[goToStep]].
   * The [[canGoToStep]] method will be called automatically.
   *
   * @param destinationIndex The index of the destination wizard step, which should be entered
   * @param preFinalize An event emitter, to be called before the step has been transitioned
   * @param postFinalize An event emitter, to be called after the step has been transitioned
   */
  goToStep(destinationIndex, preFinalize, postFinalize) {
    return this.navigation.goToStep(this, destinationIndex, preFinalize, postFinalize);
  }
  /**
   * Tries to transition the wizard to the previous step
   *
   * @param preFinalize An event emitter, to be called before the step has been transitioned
   * @param postFinalize An event emitter, to be called after the step has been transitioned
   */
  goToPreviousStep(preFinalize, postFinalize) {
    return this.navigation.goToStep(this, this.currentStepIndex - 1, preFinalize, postFinalize);
  }
  /**
   * Tries to transition the wizard to the next step
   *
   * @param preFinalize An event emitter, to be called before the step has been transitioned
   * @param postFinalize An event emitter, to be called after the step has been transitioned
   */
  goToNextStep(preFinalize, postFinalize) {
    return this.navigation.goToStep(this, this.currentStepIndex + 1, preFinalize, postFinalize);
  }
  /**
   * Checks, whether the wizard step, located at the given index, can be navigated to using the navigation bar.
   *
   * @param destinationIndex The index of the destination step
   * @returns True if the step can be navigated to, false otherwise
   */
  isNavigable(destinationIndex) {
    return this.navigation.isNavigable(this, destinationIndex);
  }
  /**
   * Resets the state of this wizard.
   */
  reset() {
    this.navigation.reset(this);
  }
}
WizardComponent.ɵfac = function WizardComponent_Factory(t) {
  return new (t || WizardComponent)();
};
WizardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: WizardComponent,
  selectors: [["aw-wizard"]],
  contentQueries: function WizardComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, WizardStep, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wizardStepsQueryList = _t);
    }
  },
  hostVars: 4,
  hostBindings: function WizardComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("horizontal", ctx.horizontalOrientation)("vertical", ctx.verticalOrientation);
    }
  },
  inputs: {
    navBarLocation: "navBarLocation",
    navBarLayout: "navBarLayout",
    navBarDirection: "navBarDirection",
    disableNavigationBar: "disableNavigationBar",
    defaultStepIndex: "defaultStepIndex"
  },
  ngContentSelectors: _c0,
  decls: 4,
  vars: 6,
  consts: [[3, "ngClass", 4, "ngIf"], [3, "ngClass"]],
  template: function WizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardComponent_aw_wizard_navigation_bar_0_Template, 1, 9, "aw-wizard-navigation-bar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WizardComponent_aw_wizard_navigation_bar_3_Template, 1, 9, "aw-wizard-navigation-bar", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navBarLocation == "top" || ctx.navBarLocation == "left");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c2, ctx.navBarLocation == "left" || ctx.navBarLocation == "right", ctx.navBarLocation == "top" || ctx.navBarLocation == "bottom"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navBarLocation == "bottom" || ctx.navBarLocation == "right");
    }
  },
  dependencies: function () {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, WizardNavigationBarComponent];
  },
  encapsulation: 2
});
WizardComponent.ctorParameters = () => [];
WizardComponent.propDecorators = {
  wizardStepsQueryList: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
    args: [WizardStep, {
      descendants: true
    }]
  }],
  navBarLocation: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  navBarLayout: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  navBarDirection: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  defaultStepIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  disableNavigationBar: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  horizontalOrientation: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
    args: ['class.horizontal']
  }],
  verticalOrientation: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
    args: ['class.vertical']
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WizardComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'aw-wizard',
      template: "<aw-wizard-navigation-bar\n  *ngIf=\"navBarLocation == 'top' || navBarLocation == 'left'\"\n  [ngClass]=\"{\n    'vertical': navBarLocation == 'left',\n    'horizontal': navBarLocation == 'top',\n    'small': navBarLayout == 'small',\n    'large-filled': navBarLayout == 'large-filled',\n    'large-filled-symbols': navBarLayout == 'large-filled-symbols',\n    'large-empty': navBarLayout == 'large-empty',\n    'large-empty-symbols': navBarLayout == 'large-empty-symbols'\n  }\">\n</aw-wizard-navigation-bar>\n\n<div [ngClass]=\"{\n  'wizard-steps': true,\n  'vertical': navBarLocation == 'left' || navBarLocation == 'right',\n  'horizontal': navBarLocation == 'top' || navBarLocation == 'bottom'\n}\">\n  <ng-content></ng-content>\n</div>\n\n<aw-wizard-navigation-bar\n  *ngIf=\"navBarLocation == 'bottom' || navBarLocation == 'right'\"\n  [ngClass]=\"{\n    'vertical': navBarLocation == 'right',\n    'horizontal': navBarLocation == 'bottom',\n    'small': navBarLayout == 'small',\n    'large-filled': navBarLayout == 'large-filled',\n    'large-filled-symbols': navBarLayout == 'large-filled-symbols',\n    'large-empty': navBarLayout == 'large-empty',\n    'large-empty-symbols': navBarLayout == 'large-empty-symbols'\n  }\">\n</aw-wizard-navigation-bar>\n"
    }]
  }], function () {
    return [];
  }, {
    navBarLocation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    navBarLayout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    navBarDirection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disableNavigationBar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    defaultStepIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    horizontalOrientation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.horizontal']
    }],
    verticalOrientation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.vertical']
    }],
    wizardStepsQueryList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [WizardStep, {
        descendants: true
      }]
    }]
  });
})();

/**
 * The `aw-wizard-navigation-bar` component contains the navigation bar inside a [[WizardComponent]].
 * To correctly display the navigation bar, it's required to set the right css classes for the navigation bar,
 * otherwise it will look like a normal `ul` component.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-navigation-bar></aw-wizard-navigation-bar>
 * ```
 *
 * @author Marc Arndt
 */
class WizardNavigationBarComponent {
  /**
   * Constructor
   *
   * @param wizard The state the wizard currently resides in
   */
  constructor(wizard) {
    this.wizard = wizard;
  }
  /**
   * Returns all [[WizardStep]]s contained in the wizard
   *
   * @returns An array containing all [[WizardStep]]s
   */
  get wizardSteps() {
    switch (this.wizard.navBarDirection) {
      case 'right-to-left':
        return this.wizard.wizardSteps.slice().reverse();
      case 'left-to-right':
      default:
        return this.wizard.wizardSteps;
    }
  }
  /**
   * Returns the number of wizard steps, that need to be displaced in the navigation bar
   *
   * @returns The number of wizard steps to be displayed
   */
  get numberOfWizardSteps() {
    return this.wizard.wizardSteps.length;
  }
  /**
   * Checks, whether a [[WizardStep]] can be marked as `current` in the navigation bar
   *
   * @param wizardStep The wizard step to be checked
   * @returns True if the step can be marked as `current`
   */
  isCurrent(wizardStep) {
    return wizardStep.selected;
  }
  /**
   * Checks, whether a [[WizardStep]] can be marked as `editing` in the navigation bar
   *
   * @param wizardStep The wizard step to be checked
   * @returns True if the step can be marked as `editing`
   */
  isEditing(wizardStep) {
    return wizardStep.editing;
  }
  /**
   * Checks, whether a [[WizardStep]] can be marked as `done` in the navigation bar
   *
   * @param wizardStep The wizard step to be checked
   * @returns True if the step can be marked as `done`
   */
  isDone(wizardStep) {
    return wizardStep.completed;
  }
  /**
   * Checks, whether a [[WizardStep]] can be marked as `optional` in the navigation bar
   *
   * @param wizardStep The wizard step to be checked
   * @returns True if the step can be marked as `optional`
   */
  isOptional(wizardStep) {
    return wizardStep.optional;
  }
  /**
   * Checks, whether a [[WizardStep]] can be marked as `completed` in the navigation bar.
   *
   * The `completed` class is only applied to completion steps.
   *
   * @param wizardStep The wizard step to be checked
   * @returns True if the step can be marked as `completed`
   */
  isCompleted(wizardStep) {
    return wizardStep instanceof WizardCompletionStep && this.wizard.completed;
  }
  /**
   * Checks, whether a [[WizardStep]] can be marked as `navigable` in the navigation bar.
   * A wizard step can be navigated to if:
   * - the step is currently not selected
   * - the navigation bar isn't disabled
   * - the navigation mode allows navigation to the step
   *
   * @param wizardStep The wizard step to be checked
   * @returns True if the step can be marked as navigable
   */
  isNavigable(wizardStep) {
    return !wizardStep.selected && !this.wizard.disableNavigationBar && this.wizard.isNavigable(this.wizard.getIndexOfStep(wizardStep));
  }
}
WizardNavigationBarComponent.ɵfac = function WizardNavigationBarComponent_Factory(t) {
  return new (t || WizardNavigationBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](WizardComponent));
};
WizardNavigationBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: WizardNavigationBarComponent,
  selectors: [["aw-wizard-navigation-bar"]],
  decls: 2,
  vars: 4,
  consts: [[3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "awGoToStep"], [1, "label"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [4, "ngIf"], [1, "step-indicator", 3, "ngStyle"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function WizardNavigationBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardNavigationBarComponent_li_1_Template, 8, 17, "li", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("steps-indicator steps-", ctx.numberOfWizardSteps, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.wizardSteps);
    }
  },
  dependencies: function () {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, GoToStepDirective];
  },
  encapsulation: 2
});
WizardNavigationBarComponent.ctorParameters = () => [{
  type: WizardComponent
}];
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WizardNavigationBarComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'aw-wizard-navigation-bar',
      template: "<ul class=\"steps-indicator steps-{{numberOfWizardSteps}}\">\n  <li [attr.id]=\"step.stepId\" *ngFor=\"let step of wizardSteps\" [ngClass]=\"{\n        'current': isCurrent(step),\n        'editing': isEditing(step),\n        'done': isDone(step),\n        'optional': isOptional(step),\n        'completed': isCompleted(step),\n        'navigable': isNavigable(step)\n  }\">\n    <a [awGoToStep]=\"step\">\n      <div class=\"label\">\n        <ng-container *ngIf=\"step.stepTitleTemplate\" [ngTemplateOutlet]=\"step.stepTitleTemplate.templateRef\"\n          [ngTemplateOutletContext]=\"{wizardStep: step}\"></ng-container>\n        <ng-container *ngIf=\"!step.stepTitleTemplate\">{{step.stepTitle}}</ng-container>\n      </div>\n      <div class=\"step-indicator\"\n        [ngStyle]=\"{ 'font-family': step.stepSymbolTemplate ? '' : step.navigationSymbol.fontFamily }\">\n        <ng-container *ngIf=\"step.stepSymbolTemplate\" [ngTemplateOutlet]=\"step.stepSymbolTemplate.templateRef\"\n          [ngTemplateOutletContext]=\"{wizardStep: step}\"></ng-container>\n        <ng-container *ngIf=\"!step.stepSymbolTemplate\">{{step.navigationSymbol.symbol}}</ng-container>\n      </div>\n    </a>\n  </li>\n</ul>\n"
    }]
  }], function () {
    return [{
      type: WizardComponent
    }];
  }, null);
})();

/**
 * The `aw-wizard-step` component is used to define a normal step inside a wizard.
 *
 * ### Syntax
 *
 * With `stepTitle` and `navigationSymbol` inputs:
 *
 * ```html
 * <aw-wizard-step [stepTitle]="step title" [navigationSymbol]="{ symbol: 'symbol', fontFamily: 'font-family' }"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    ...
 * </aw-wizard-step>
 * ```
 *
 * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
 *
 * ```html
 * <aw-wizard-step"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    <ng-template awWizardStepTitle>
 *        step title
 *    </ng-template>
 *    <ng-template awWizardStepSymbol>
 *        symbol
 *    </ng-template>
 *    ...
 * </aw-wizard-step>
 * ```
 *
 * ### Example
 *
 * With `stepTitle` and `navigationSymbol` inputs:
 *
 * ```html
 * <aw-wizard-step stepTitle="Address information" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
 *    ...
 * </aw-wizard-step>
 * ```
 *
 * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
 *
 * ```html
 * <aw-wizard-step>
 *    <ng-template awWizardStepTitle>
 *        Address information
 *    </ng-template>
 *    <ng-template awWizardStepSymbol>
 *        <i class="fa fa-taxi"></i>
 *    </ng-template>
 * </aw-wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
class WizardStepComponent extends WizardStep {}
WizardStepComponent.ɵfac = /*@__PURE__*/function () {
  let ɵWizardStepComponent_BaseFactory;
  return function WizardStepComponent_Factory(t) {
    return (ɵWizardStepComponent_BaseFactory || (ɵWizardStepComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](WizardStepComponent)))(t || WizardStepComponent);
  };
}();
WizardStepComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: WizardStepComponent,
  selectors: [["aw-wizard-step"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: WizardStep,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardStepComponent)
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function WizardStepComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WizardStepComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'aw-wizard-step',
      template: "<ng-content></ng-content>\n",
      providers: [{
        provide: WizardStep,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardStepComponent)
      }]
    }]
  }], null, null);
})();

/**
 * The `awEnableBackLinks` directive can be used to allow the user to leave a [[WizardCompletionStep]] after is has been entered.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-completion-step awEnableBackLinks (stepExit)="exit function">
 *     ...
 * </aw-wizard-completion-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <aw-wizard-completion-step stepTitle="Final step" awEnableBackLinks>
 *     ...
 * </aw-wizard-completion-step>
 * ```
 *
 * @author Marc Arndt
 */
class EnableBackLinksDirective {
  /**
   * Constructor
   *
   * @param completionStep The wizard completion step, which should be exitable
   */
  constructor(completionStep) {
    this.completionStep = completionStep;
    /**
     * This EventEmitter is called when the step is exited.
     * The bound method can be used to do cleanup work.
     */
    this.stepExit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  /**
   * Initialization work
   */
  ngOnInit() {
    this.completionStep.canExit = true;
    this.completionStep.stepExit = this.stepExit;
  }
}
EnableBackLinksDirective.ɵfac = function EnableBackLinksDirective_Factory(t) {
  return new (t || EnableBackLinksDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](WizardCompletionStep, 1));
};
EnableBackLinksDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: EnableBackLinksDirective,
  selectors: [["", "awEnableBackLinks", ""]],
  outputs: {
    stepExit: "stepExit"
  }
});
EnableBackLinksDirective.ctorParameters = () => [{
  type: WizardCompletionStep,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
  }]
}];
EnableBackLinksDirective.propDecorators = {
  stepExit: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnableBackLinksDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[awEnableBackLinks]'
    }]
  }], function () {
    return [{
      type: WizardCompletionStep,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
      }]
    }];
  }, {
    stepExit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

/**
 * Checks whether the given `value` implements the interface [[StepId]].
 *
 * @param value The value to be checked
 * @returns True if the given value implements [[StepId]] and false otherwise
 */
function isStepId(value) {
  return value.hasOwnProperty('stepId') && !(value instanceof WizardStep);
}

/**
 * Checks whether the given `value` implements the interface [[StepIndex]].
 *
 * @param value The value to be checked
 * @returns True if the given value implements [[StepIndex]] and false otherwise
 */
function isStepIndex(value) {
  return value.hasOwnProperty('stepIndex');
}

/**
 * Checks whether the given `value` implements the interface [[StepOffset]].
 *
 * @param value The value to be checked
 * @returns True if the given value implements [[StepOffset]] and false otherwise
 */
function isStepOffset(value) {
  return value.hasOwnProperty('stepOffset');
}

/**
 * The `awGoToStep` directive can be used to navigate to a given step.
 * This step can be defined in one of multiple formats
 *
 * ### Syntax
 *
 * With absolute step index:
 *
 * ```html
 * <button [awGoToStep]="{ stepIndex: absolute step index }" (finalize)="finalize method">...</button>
 * ```
 *
 * With unique step id:
 *
 * ```html
 * <button [awGoToStep]="{ stepId: 'step id of destination step' }" (finalize)="finalize method">...</button>
 * ```
 *
 * With a wizard step object:
 *
 * ```html
 * <button [awGoToStep]="wizard step object" (finalize)="finalize method">...</button>
 * ```
 *
 * With an offset to the defining step:
 *
 * ```html
 * <button [awGoToStep]="{ stepOffset: offset }" (finalize)="finalize method">...</button>
 * ```
 *
 * @author Marc Arndt
 */
class GoToStepDirective {
  /**
   * Constructor
   *
   * @param wizard The wizard component
   * @param wizardStep The wizard step, which contains this [[GoToStepDirective]]
   */
  constructor(wizard, wizardStep) {
    this.wizard = wizard;
    this.wizardStep = wizardStep;
    /**
     * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
     */
    this.preFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
     */
    this.postFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  /**
   * A convenience field for `preFinalize`
   */
  get finalize() {
    return this.preFinalize;
  }
  /**
   * A convenience name for `preFinalize`
   *
   * @param emitter The [[EventEmitter]] to be set
   */
  set finalize(emitter) {
    /* istanbul ignore next */
    this.preFinalize = emitter;
  }
  /**
   * Returns the destination step of this directive as an absolute step index inside the wizard
   *
   * @returns The index of the destination step
   * @throws If `targetStep` is of an unknown type an `Error` is thrown
   */
  get destinationStep() {
    let destinationStep;
    if (isStepIndex(this.targetStep)) {
      destinationStep = this.targetStep.stepIndex;
    } else if (isStepId(this.targetStep)) {
      destinationStep = this.wizard.getIndexOfStepWithId(this.targetStep.stepId);
    } else if (isStepOffset(this.targetStep) && this.wizardStep !== null) {
      destinationStep = this.wizard.getIndexOfStep(this.wizardStep) + this.targetStep.stepOffset;
    } else if (this.targetStep instanceof WizardStep) {
      destinationStep = this.wizard.getIndexOfStep(this.targetStep);
    } else {
      throw new Error(`Input 'targetStep' is neither a WizardStep, StepOffset, StepIndex or StepId`);
    }
    return destinationStep;
  }
  /**
   * Listener method for `click` events on the component with this directive.
   * After this method is called the wizard will try to transition to the `destinationStep`
   */
  onClick() {
    this.wizard.goToStep(this.destinationStep, this.preFinalize, this.postFinalize);
  }
}
GoToStepDirective.ɵfac = function GoToStepDirective_Factory(t) {
  return new (t || GoToStepDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](WizardComponent), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](WizardStep, 8));
};
GoToStepDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: GoToStepDirective,
  selectors: [["", "awGoToStep", ""]],
  hostBindings: function GoToStepDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GoToStepDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
  },
  inputs: {
    targetStep: ["awGoToStep", "targetStep"]
  },
  outputs: {
    preFinalize: "preFinalize",
    postFinalize: "postFinalize",
    finalize: "finalize"
  }
});
GoToStepDirective.ctorParameters = () => [{
  type: WizardComponent
}, {
  type: WizardStep,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
  }]
}];
GoToStepDirective.propDecorators = {
  preFinalize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  postFinalize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  targetStep: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
    args: ['awGoToStep']
  }],
  finalize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  onClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
    args: ['click']
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoToStepDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[awGoToStep]'
    }]
  }], function () {
    return [{
      type: WizardComponent
    }, {
      type: WizardStep,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    preFinalize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    postFinalize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    finalize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the `destinationStep`
     */
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click']
    }],
    targetStep: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['awGoToStep']
    }]
  });
})();

/**
 * The `awNextStep` directive can be used to navigate to the next step.
 *
 * ### Syntax
 *
 * ```html
 * <button awNextStep (finalize)="finalize method">...</button>
 * ```
 *
 * @author Marc Arndt
 */
class NextStepDirective {
  /**
   * Constructor
   *
   * @param wizard The state of the wizard
   */
  constructor(wizard) {
    this.wizard = wizard;
    /**
     * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
     */
    this.preFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
     */
    this.postFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  /**
   * A convenience field for `preFinalize`
   */
  get finalize() {
    return this.preFinalize;
  }
  /**
   * A convenience name for `preFinalize`
   *
   * @param emitter The [[EventEmitter]] to be set
   */
  set finalize(emitter) {
    this.preFinalize = emitter;
  }
  /**
   * Listener method for `click` events on the component with this directive.
   * After this method is called the wizard will try to transition to the next step
   */
  onClick() {
    this.wizard.goToNextStep(this.preFinalize, this.postFinalize);
  }
}
NextStepDirective.ɵfac = function NextStepDirective_Factory(t) {
  return new (t || NextStepDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](WizardComponent));
};
NextStepDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NextStepDirective,
  selectors: [["", "awNextStep", ""]],
  hostBindings: function NextStepDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NextStepDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
  },
  outputs: {
    preFinalize: "preFinalize",
    postFinalize: "postFinalize",
    finalize: "finalize"
  }
});
NextStepDirective.ctorParameters = () => [{
  type: WizardComponent
}];
NextStepDirective.propDecorators = {
  preFinalize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  postFinalize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  finalize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  onClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
    args: ['click']
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NextStepDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[awNextStep]'
    }]
  }], function () {
    return [{
      type: WizardComponent
    }];
  }, {
    preFinalize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    postFinalize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    finalize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the next step
     */
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click']
    }]
  });
})();

/**
 * The `awOptionalStep` directive can be used to define an optional `wizard-step`.
 * An optional wizard step is a [[WizardStep]] that doesn't need to be completed to transition to later wizard steps.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-step awOptionalStep>
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <aw-wizard-step stepTitle="Second step" awOptionalStep>
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
class OptionalStepDirective {
  /**
   * Constructor
   *
   * @param wizardStep The wizard step, which contains this [[OptionalStepDirective]]
   */
  constructor(wizardStep) {
    this.wizardStep = wizardStep;
    // tslint:disable-next-line:no-input-rename
    this.optional = true;
  }
  /**
   * Initialization work
   */
  ngOnInit() {
    // The input receives '' when specified in the template without a value.  In this case, apply the default value (`true`).
    this.wizardStep.optional = this.optional || this.optional === '';
  }
}
OptionalStepDirective.ɵfac = function OptionalStepDirective_Factory(t) {
  return new (t || OptionalStepDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](WizardStep, 1));
};
OptionalStepDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: OptionalStepDirective,
  selectors: [["", "awOptionalStep", ""]],
  inputs: {
    optional: ["awOptionalStep", "optional"]
  }
});
OptionalStepDirective.ctorParameters = () => [{
  type: WizardStep,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
  }]
}];
OptionalStepDirective.propDecorators = {
  optional: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
    args: ['awOptionalStep']
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OptionalStepDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[awOptionalStep]'
    }]
  }], function () {
    return [{
      type: WizardStep,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
      }]
    }];
  }, {
    optional: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['awOptionalStep']
    }]
  });
})();

/**
 * The `awPreviousStep` directive can be used to navigate to the previous step.
 * Compared to the [[NextStepDirective]] it's important to note, that this directive doesn't contain a `finalize` output method.
 *
 * ### Syntax
 *
 * ```html
 * <button awPreviousStep>...</button>
 * ```
 *
 * @author Marc Arndt
 */
class PreviousStepDirective {
  /**
   * Constructor
   *
   * @param wizard The state of the wizard
   */
  constructor(wizard) {
    this.wizard = wizard;
    /**
     * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
     */
    this.preFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
     */
    this.postFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  /**
   * A convenience field for `preFinalize`
   */
  get finalize() {
    return this.preFinalize;
  }
  /**
   * A convenience field for `preFinalize`
   *
   * @param emitter The [[EventEmitter]] to be set
   */
  set finalize(emitter) {
    /* istanbul ignore next */
    this.preFinalize = emitter;
  }
  /**
   * Listener method for `click` events on the component with this directive.
   * After this method is called the wizard will try to transition to the previous step
   */
  onClick() {
    this.wizard.goToPreviousStep(this.preFinalize, this.postFinalize);
  }
}
PreviousStepDirective.ɵfac = function PreviousStepDirective_Factory(t) {
  return new (t || PreviousStepDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](WizardComponent));
};
PreviousStepDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: PreviousStepDirective,
  selectors: [["", "awPreviousStep", ""]],
  hostBindings: function PreviousStepDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreviousStepDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
  },
  outputs: {
    preFinalize: "preFinalize",
    postFinalize: "postFinalize",
    finalize: "finalize"
  }
});
PreviousStepDirective.ctorParameters = () => [{
  type: WizardComponent
}];
PreviousStepDirective.propDecorators = {
  preFinalize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  postFinalize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  finalize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  onClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
    args: ['click']
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreviousStepDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[awPreviousStep]'
    }]
  }], function () {
    return [{
      type: WizardComponent
    }];
  }, {
    preFinalize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    postFinalize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    finalize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the previous step
     */
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click']
    }]
  });
})();

/**
 * The `awResetWizard` directive can be used to reset the wizard to its initial state.
 * This directive accepts an output, which can be used to specify some custom cleanup work during the reset process.
 *
 * ### Syntax
 *
 * ```html
 * <button awResetWizard (finalize)="custom reset task">...</button>
 * ```
 *
 * @author Marc Arndt
 */
class ResetWizardDirective {
  /**
   * Constructor
   *
   * @param wizard The wizard component
   */
  constructor(wizard) {
    this.wizard = wizard;
    /**
     * An [[EventEmitter]] containing some tasks to be done, directly before the wizard is being reset
     */
    this.finalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  /**
   * Resets the wizard
   */
  onClick() {
    // do some optional cleanup work
    this.finalize.emit();
    // reset the wizard to its initial state
    this.wizard.reset();
  }
}
ResetWizardDirective.ɵfac = function ResetWizardDirective_Factory(t) {
  return new (t || ResetWizardDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](WizardComponent));
};
ResetWizardDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ResetWizardDirective,
  selectors: [["", "awResetWizard", ""]],
  hostBindings: function ResetWizardDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetWizardDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
  },
  outputs: {
    finalize: "finalize"
  }
});
ResetWizardDirective.ctorParameters = () => [{
  type: WizardComponent
}];
ResetWizardDirective.propDecorators = {
  finalize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  onClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
    args: ['click']
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetWizardDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[awResetWizard]'
    }]
  }], function () {
    return [{
      type: WizardComponent
    }];
  }, {
    finalize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    /**
     * Resets the wizard
     */
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click']
    }]
  });
})();

/**
 * The `awSelectedStep` directive can be used on a [[WizardStep]] to set it as selected after the wizard initialisation or a reset.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-step stepTitle="Step title" awSelectedStep>
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
class SelectedStepDirective {
  /**
   * Constructor
   *
   * @param wizardStep The wizard step, which should be selected by default
   */
  constructor(wizardStep) {
    this.wizardStep = wizardStep;
  }
  /**
   * Initialization work
   */
  ngOnInit() {
    this.wizardStep.defaultSelected = true;
  }
}
SelectedStepDirective.ɵfac = function SelectedStepDirective_Factory(t) {
  return new (t || SelectedStepDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](WizardStep, 1));
};
SelectedStepDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: SelectedStepDirective,
  selectors: [["", "awSelectedStep", ""]]
});
SelectedStepDirective.ctorParameters = () => [{
  type: WizardStep,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
  }]
}];
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectedStepDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[awSelectedStep]'
    }]
  }], function () {
    return [{
      type: WizardStep,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
      }]
    }];
  }, null);
})();

/**
 * The `awWizardCompletionStep` directive can be used to define a completion/success step at the end of your wizard
 * After a [[WizardCompletionStep]] has been entered, it has the characteristic that the user is blocked from
 * leaving it again to a previous step.
 * In addition entering a [[WizardCompletionStep]] automatically sets the `wizard`, and all steps inside the `wizard`,
 * as completed.
 *
 * ### Syntax
 *
 * ```html
 * <div awWizardCompletionStep [stepTitle]="title of the wizard step"
 *    [navigationSymbol]="{ symbol: 'navigation symbol', fontFamily: 'font-family' }"
 *    (stepEnter)="event emitter to be called when the wizard step is entered"
 *    (stepExit)="event emitter to be called when the wizard step is exited">
 *    ...
 * </div>
 * ```
 *
 * ### Example
 *
 * ```html
 * <div awWizardCompletionStep stepTitle="Step 1" [navigationSymbol]="{ symbol: '1' }">
 *    ...
 * </div>
 * ```
 *
 * With a navigation symbol from the `font-awesome` font:
 *
 * ```html
 * <div awWizardCompletionStep stepTitle="Step 1" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
 *    ...
 * </div>
 * ```
 *
 * @author Marc Arndt
 */
class WizardCompletionStepDirective extends WizardCompletionStep {}
WizardCompletionStepDirective.ɵfac = /*@__PURE__*/function () {
  let ɵWizardCompletionStepDirective_BaseFactory;
  return function WizardCompletionStepDirective_Factory(t) {
    return (ɵWizardCompletionStepDirective_BaseFactory || (ɵWizardCompletionStepDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](WizardCompletionStepDirective)))(t || WizardCompletionStepDirective);
  };
}();
WizardCompletionStepDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: WizardCompletionStepDirective,
  selectors: [["", "awWizardCompletionStep", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: WizardStep,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardCompletionStepDirective)
  }, {
    provide: WizardCompletionStep,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardCompletionStepDirective)
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WizardCompletionStepDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[awWizardCompletionStep]',
      providers: [{
        provide: WizardStep,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardCompletionStepDirective)
      }, {
        provide: WizardCompletionStep,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardCompletionStepDirective)
      }]
    }]
  }], null, null);
})();

/**
 * The `awWizardStep` directive can be used to define a normal step inside a wizard.
 *
 * ### Syntax
 *
 * With `stepTitle` and `navigationSymbol` inputs:
 *
 * ```html
 * <div awWizardStep [stepTitle]="step title" [navigationSymbol]="{ symbol: 'symbol', fontFamily: 'font-family' }"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    ...
 * </div>
 * ```
 *
 * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
 *
 * ```html
 * <div awWizardStep [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    <ng-template awWizardStepTitle>
 *        step title
 *    </ng-template>
 *    <ng-template awWizardStepSymbol>
 *        symbol
 *    </ng-template>
 *    ...
 * </div>
 * ```
 *
 * ### Example
 *
 * With `stepTitle` and `navigationSymbol` inputs:
 *
 * ```html
 * <div awWizardStep stepTitle="Address information" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
 *    ...
 * </div>
 * ```
 *
 * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
 *
 * ```html
 * <div awWizardStep>
 *    <ng-template awWizardStepTitle>
 *        Address information
 *    </ng-template>
 *    <ng-template awWizardStepSymbol>
 *        <i class="fa fa-taxi"></i>
 *    </ng-template>
 * </div>
 * ```
 *
 * @author Marc Arndt
 */
class WizardStepDirective extends WizardStep {}
WizardStepDirective.ɵfac = /*@__PURE__*/function () {
  let ɵWizardStepDirective_BaseFactory;
  return function WizardStepDirective_Factory(t) {
    return (ɵWizardStepDirective_BaseFactory || (ɵWizardStepDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](WizardStepDirective)))(t || WizardStepDirective);
  };
}();
WizardStepDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: WizardStepDirective,
  selectors: [["", "awWizardStep", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: WizardStep,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardStepDirective)
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WizardStepDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[awWizardStep]',
      providers: [{
        provide: WizardStep,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardStepDirective)
      }]
    }]
  }], null, null);
})();

/**
 * The [[awNavigationMode]] directive can be used to customize wizard'd navigation mode.
 *
 * There are several usage options:
 *
 * ### Option 1. Customize the default navigation mode with [[navigateBackward]] and/or [[navigateForward]] inputs.
 *
 * ```html
 * <aw-wizard [awNavigationMode] navigateBackward="deny" navigateForward="allow">...</aw-wizard>
 * ```
 *
 * ### Option 2. Pass in a custom navigation mode
 *
 * ```typescript
 * import { BaseNavigationMode } from 'angular-archwizard'
 *
 * class CustomNavigationMode extends BaseNavigationMode {
 *
 *   // ...
 * }
 * ```
 *
 * ```typescript
 * @Component({
 *   // ...
 * })
 * class MyComponent {
 *
 *   navigationMode = new CustomNavigationMode();
 * }
 * ```
 *
 * ```html
 * <aw-wizard [awNavigationMode]="navigationMode">...</aw-wizard>
 * ```
 *
 * ### Additional Notes
 *
 * - Specifying a custom navigation mode takes priority over [[navigateBackward]] and [[navigateForward]] inputs
 *
 * - Omitting the [[awNavigationMode]] directive or, equally, specifying just [[awNavigationMode]] without
 *   any inputs or parameters causes the wizard to use the default "strict" navigation mode equivalent to
 *
 * ```html
 * <aw-wizard [awNavigationMode] navigateBackward="deny" navigateForward="allow">...</aw-wizard>
 * ````
 */
class NavigationModeDirective {
  constructor(wizard) {
    this.wizard = wizard;
  }
  ngOnChanges(changes) {
    this.wizard.navigation = this.getNavigationMode();
  }
  getNavigationMode() {
    if (this.awNavigationMode) {
      return this.awNavigationMode;
    }
    return new ConfigurableNavigationMode(this.navigateBackward, this.navigateForward);
  }
}
NavigationModeDirective.ɵfac = function NavigationModeDirective_Factory(t) {
  return new (t || NavigationModeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](WizardComponent));
};
NavigationModeDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NavigationModeDirective,
  selectors: [["", "awNavigationMode", ""]],
  inputs: {
    awNavigationMode: "awNavigationMode",
    navigateBackward: "navigateBackward",
    navigateForward: "navigateForward"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
NavigationModeDirective.ctorParameters = () => [{
  type: WizardComponent
}];
NavigationModeDirective.propDecorators = {
  awNavigationMode: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  navigateBackward: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  navigateForward: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationModeDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[awNavigationMode]'
    }]
  }], function () {
    return [{
      type: WizardComponent
    }];
  }, {
    awNavigationMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    navigateBackward: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    navigateForward: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/**
 * The `awCompletedStep` directive can be used to make a wizard step initially completed.
 *
 * Initially completed steps are shown as completed when the wizard is presented to the user.
 *
 * A typical use case is to make a step initially completed if it is automatically filled with some derived/predefined information.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-step awCompletedStep>
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * An optional boolean condition can be specified:
 *
 * ```html
 * <aw-wizard-step [awCompletedStep]="shouldBeCompleted">
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <aw-wizard-step stepTitle="First step" [awCompletedStep]="firstStepPrefilled">
 *     ...
 * </aw-wizard-step>
 * ```
 */
class CompletedStepDirective {
  /**
   * Constructor
   *
   * @param wizardStep The wizard step, which contains this [[CompletedStepDirective]]
   */
  constructor(wizardStep) {
    this.wizardStep = wizardStep;
    // tslint:disable-next-line:no-input-rename
    this.initiallyCompleted = true;
  }
  /**
   * Initialization work
   */
  ngOnInit() {
    // The input receives '' when specified in the template without a value.  In this case, apply the default value (`true`).
    this.wizardStep.initiallyCompleted = this.initiallyCompleted || this.initiallyCompleted === '';
  }
}
CompletedStepDirective.ɵfac = function CompletedStepDirective_Factory(t) {
  return new (t || CompletedStepDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](WizardStep, 1));
};
CompletedStepDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CompletedStepDirective,
  selectors: [["", "awCompletedStep", ""]],
  inputs: {
    initiallyCompleted: ["awCompletedStep", "initiallyCompleted"]
  }
});
CompletedStepDirective.ctorParameters = () => [{
  type: WizardStep,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
  }]
}];
CompletedStepDirective.propDecorators = {
  initiallyCompleted: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
    args: ['awCompletedStep']
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompletedStepDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[awCompletedStep]'
    }]
  }], function () {
    return [{
      type: WizardStep,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
      }]
    }];
  }, {
    initiallyCompleted: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['awCompletedStep']
    }]
  });
})();

/**
 * The module defining all the content inside `angular-archwizard`
 *
 * @author Marc Arndt
 */
class ArchwizardModule {
  /* istanbul ignore next */
  static forRoot() {
    return {
      ngModule: ArchwizardModule,
      providers: [
        // Nothing here yet
      ]
    };
  }
}
ArchwizardModule.ɵfac = function ArchwizardModule_Factory(t) {
  return new (t || ArchwizardModule)();
};
ArchwizardModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: ArchwizardModule
});
ArchwizardModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArchwizardModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [WizardComponent, WizardStepComponent, WizardNavigationBarComponent, WizardCompletionStepComponent, GoToStepDirective, NextStepDirective, PreviousStepDirective, OptionalStepDirective, WizardStepSymbolDirective, WizardStepTitleDirective, EnableBackLinksDirective, WizardStepDirective, WizardCompletionStepDirective, SelectedStepDirective, ResetWizardDirective, NavigationModeDirective, CompletedStepDirective],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      exports: [WizardComponent, WizardStepComponent, WizardNavigationBarComponent, WizardCompletionStepComponent, GoToStepDirective, NextStepDirective, PreviousStepDirective, OptionalStepDirective, WizardStepSymbolDirective, WizardStepTitleDirective, EnableBackLinksDirective, WizardStepDirective, WizardCompletionStepDirective, SelectedStepDirective, ResetWizardDirective, NavigationModeDirective, CompletedStepDirective]
    }]
  }], null, null);
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ArchwizardModule, {
    declarations: function () {
      return [WizardComponent, WizardStepComponent, WizardNavigationBarComponent, WizardCompletionStepComponent, GoToStepDirective, NextStepDirective, PreviousStepDirective, OptionalStepDirective, WizardStepSymbolDirective, WizardStepTitleDirective, EnableBackLinksDirective, WizardStepDirective, WizardCompletionStepDirective, SelectedStepDirective, ResetWizardDirective, NavigationModeDirective, CompletedStepDirective];
    },
    imports: function () {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule];
    },
    exports: function () {
      return [WizardComponent, WizardStepComponent, WizardNavigationBarComponent, WizardCompletionStepComponent, GoToStepDirective, NextStepDirective, PreviousStepDirective, OptionalStepDirective, WizardStepSymbolDirective, WizardStepTitleDirective, EnableBackLinksDirective, WizardStepDirective, WizardCompletionStepDirective, SelectedStepDirective, ResetWizardDirective, NavigationModeDirective, CompletedStepDirective];
    }
  });
})();

// export the components

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 2981:
/*!************************************************************!*\
  !*** ./node_modules/ng-otp-input/fesm2015/ng-otp-input.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgOtpInputComponent": () => (/* binding */ NgOtpInputComponent),
/* harmony export */   "NgOtpInputConfig": () => (/* binding */ Config),
/* harmony export */   "NgOtpInputModule": () => (/* binding */ NgOtpInputModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);






function NgOtpInputComponent_div_0_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paste", function NgOtpInputComponent_div_0_input_1_Template_input_paste_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.handlePaste($event));
    })("keyup", function NgOtpInputComponent_div_0_input_1_Template_input_keyup_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const i_r3 = restoredCtx.index;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.onKeyUp($event, i_r3));
    })("input", function NgOtpInputComponent_div_0_input_1_Template_input_input_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.onInput($event));
    })("keydown", function NgOtpInputComponent_div_0_input_1_Template_input_keydown_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const i_r3 = restoredCtx.index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.onKeyDown($event, i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("otp-input ", ctx_r1.config.inputClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "otp_", i_r3, "_", ctx_r1.componentKey, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pattern", ctx_r1.config.allowNumbersOnly ? "\\d*" : "")("type", ctx_r1.inputType)("placeholder", (ctx_r1.config == null ? null : ctx_r1.config.placeholder) || "")("ngStyle", ctx_r1.config.inputStyles)("formControl", ctx_r1.otpForm.controls[item_r2]);
  }
}
function NgOtpInputComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgOtpInputComponent_div_0_input_1_Template, 2, 10, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keys");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("ng-otp-input-wrapper wrapper ", ctx_r0.config.containerClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "c_", ctx_r0.componentKey, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.config.containerStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx_r0.otpForm == null ? null : ctx_r0.otpForm.controls));
  }
}
class KeyboardUtil {
  static ifBackspaceOrDelete(event) {
    return this.ifKey(event, 'Backspace;Delete;Del');
  }
  static ifRightArrow(event) {
    return this.ifKey(event, 'ArrowRight;Right');
  }
  static ifLeftArrow(event) {
    return this.ifKey(event, 'ArrowLeft;Left');
  }
  static ifSpacebar(event) {
    return this.ifKey(event, 'Spacebar; '); //don't remove the space after ; as this will check for space key
  }

  static ifKey(event, keys) {
    let keysToCheck = keys.split(';');
    return keysToCheck.some(k => k === event.key);
  }
}
class KeysPipe {
  transform(value) {
    return Object.keys(value);
  }
}
/** @nocollapse */
KeysPipe.ɵfac = function KeysPipe_Factory(t) {
  return new (t || KeysPipe)();
};
/** @nocollapse */
KeysPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "keys",
  type: KeysPipe,
  pure: true
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeysPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'keys'
    }]
  }], null, null);
})();
class NgOtpInputComponent {
  constructor(keysPipe) {
    this.keysPipe = keysPipe;
    this.config = {
      length: 4
    };
    // tslint:disable-next-line: no-output-on-prefix
    this.onInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.inputControls = new Array(this.config.length);
    this.componentKey = Math.random().toString(36).substring(2) + new Date().getTime().toString(36);
  }
  get inputType() {
    var _a, _b;
    return ((_a = this.config) === null || _a === void 0 ? void 0 : _a.isPasswordInput) ? 'password' : ((_b = this.config) === null || _b === void 0 ? void 0 : _b.allowNumbersOnly) ? 'tel' : 'text';
  }
  ngOnInit() {
    this.otpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({});
    for (let index = 0; index < this.config.length; index++) {
      this.otpForm.addControl(this.getControlName(index), new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl());
    }
    this.otpForm.valueChanges.subscribe(v => {
      this.keysPipe.transform(this.otpForm.controls).forEach(k => {
        var val = this.otpForm.controls[k].value;
        if (val && val.length > 1) {
          if (val.length >= this.config.length) {
            this.setValue(val);
          } else {
            this.rebuildValue();
          }
        }
      });
    });
  }
  ngAfterViewInit() {
    if (!this.config.disableAutoFocus) {
      const containerItem = document.getElementById(`c_${this.componentKey}`);
      if (containerItem) {
        const ele = containerItem.getElementsByClassName('otp-input')[0];
        if (ele && ele.focus) {
          ele.focus();
        }
      }
    }
  }
  getControlName(idx) {
    return `ctrl_${idx}`;
  }
  onKeyDown($event, inputIdx) {
    if (KeyboardUtil.ifSpacebar($event)) {
      $event.preventDefault();
      return false;
    }
  }
  onInput($event) {
    let newVal = this.currentVal ? `${this.currentVal}${$event.target.value}` : $event.target.value;
    if (this.config.allowNumbersOnly && !this.validateNumber(newVal)) {
      $event.target.value = '';
      $event.stopPropagation();
      $event.preventDefault();
      return;
    }
  }
  onKeyUp($event, inputIdx) {
    const nextInputId = this.appendKey(`otp_${inputIdx + 1}`);
    const prevInputId = this.appendKey(`otp_${inputIdx - 1}`);
    if (KeyboardUtil.ifRightArrow($event)) {
      $event.preventDefault();
      this.setSelected(nextInputId);
      return;
    }
    if (KeyboardUtil.ifLeftArrow($event)) {
      $event.preventDefault();
      this.setSelected(prevInputId);
      return;
    }
    if (KeyboardUtil.ifBackspaceOrDelete($event) && !$event.target.value) {
      this.setSelected(prevInputId);
      this.rebuildValue();
      return;
    }
    if (!$event.target.value) {
      return;
    }
    if (this.ifValidKeyCode($event)) {
      this.setSelected(nextInputId);
    }
    this.rebuildValue();
  }
  validateNumber(val) {
    return val && /^\d*\.?\d*$/.test(val);
  }
  appendKey(id) {
    return `${id}_${this.componentKey}`;
  }
  setSelected(eleId) {
    this.focusTo(eleId);
    const ele = document.getElementById(eleId);
    if (ele && ele.setSelectionRange) {
      setTimeout(() => {
        ele.setSelectionRange(0, 1);
      }, 0);
    }
  }
  ifValidKeyCode(event) {
    const inp = event.key;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return isMobile || /[a-zA-Z0-9-_]/.test(inp) || this.config.allowKeyCodes && this.config.allowKeyCodes.includes(event.keyCode);
  }
  focusTo(eleId) {
    const ele = document.getElementById(eleId);
    if (ele) {
      ele.focus();
    }
  }
  // method to set component value
  setValue(value) {
    if (this.config.allowNumbersOnly && isNaN(value)) {
      return;
    }
    this.otpForm.reset();
    if (!value) {
      this.rebuildValue();
      return;
    }
    value = value.toString().replace(/\s/g, ''); // remove whitespace
    Array.from(value).forEach((c, idx) => {
      if (this.otpForm.get(this.getControlName(idx))) {
        this.otpForm.get(this.getControlName(idx)).setValue(c);
      }
    });
    if (!this.config.disableAutoFocus) {
      const containerItem = document.getElementById(`c_${this.componentKey}`);
      var indexOfElementToFocus = value.length < this.config.length ? value.length : this.config.length - 1;
      let ele = containerItem.getElementsByClassName('otp-input')[indexOfElementToFocus];
      if (ele && ele.focus) {
        ele.focus();
      }
    }
    this.rebuildValue();
  }
  rebuildValue() {
    var _a;
    let val = '';
    this.keysPipe.transform(this.otpForm.controls).forEach(k => {
      if (this.otpForm.controls[k].value) {
        let ctrlVal = this.otpForm.controls[k].value;
        let isLengthExceed = ctrlVal.length > 1;
        let isCaseTransformEnabled = !this.config.allowNumbersOnly && this.config.letterCase && (this.config.letterCase.toLocaleLowerCase() == 'upper' || this.config.letterCase.toLocaleLowerCase() == 'lower');
        ctrlVal = ctrlVal[0];
        let transformedVal = isCaseTransformEnabled ? this.config.letterCase.toLocaleLowerCase() == 'upper' ? ctrlVal.toUpperCase() : ctrlVal.toLowerCase() : ctrlVal;
        if (isCaseTransformEnabled && transformedVal == ctrlVal) {
          isCaseTransformEnabled = false;
        } else {
          ctrlVal = transformedVal;
        }
        val += ctrlVal;
        if (isLengthExceed || isCaseTransformEnabled) {
          this.otpForm.controls[k].setValue(ctrlVal);
        }
      }
    });
    if ((_a = this.formCtrl) === null || _a === void 0 ? void 0 : _a.setValue) {
      this.formCtrl.setValue(val);
    }
    this.onInputChange.emit(val);
    this.currentVal = val;
  }
  handlePaste(e) {
    // Get pasted data via clipboard API
    let clipboardData = e.clipboardData || window['clipboardData'];
    if (clipboardData) {
      var pastedData = clipboardData.getData('Text');
    }
    // Stop data actually being pasted into div
    e.stopPropagation();
    e.preventDefault();
    if (!pastedData || this.config.allowNumbersOnly && !this.validateNumber(pastedData)) {
      return;
    }
    this.setValue(pastedData);
  }
}
/** @nocollapse */
NgOtpInputComponent.ɵfac = function NgOtpInputComponent_Factory(t) {
  return new (t || NgOtpInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](KeysPipe));
};
/** @nocollapse */
NgOtpInputComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgOtpInputComponent,
  selectors: [["ng-otp-input"]],
  inputs: {
    config: "config",
    formCtrl: "formCtrl"
  },
  outputs: {
    onInputChange: "onInputChange"
  },
  decls: 1,
  vars: 1,
  consts: [[3, "class", "id", "ngStyle", 4, "ngIf"], [3, "id", "ngStyle"], ["autocomplete", "one-time-code", 3, "pattern", "type", "placeholder", "ngStyle", "class", "formControl", "id", "paste", "keyup", "input", "keydown", 4, "ngFor", "ngForOf"], ["autocomplete", "one-time-code", 3, "pattern", "type", "placeholder", "ngStyle", "formControl", "id", "paste", "keyup", "input", "keydown"], ["inp", ""]],
  template: function NgOtpInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgOtpInputComponent_div_0_Template, 3, 8, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.otpForm == null ? null : ctx.otpForm.controls);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, KeysPipe],
  styles: [".otp-input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.ng-otp-input-wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}@media screen and (max-width: 767px){.otp-input[_ngcontent-%COMP%]{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input[_ngcontent-%COMP%]{width:30px;font-size:18px;height:30px}}"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOtpInputComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      // tslint:disable-next-line: component-selector
      selector: 'ng-otp-input',
      templateUrl: './ng-otp-input.component.html',
      styleUrls: ['./ng-otp-input.component.scss']
    }]
  }], function () {
    return [{
      type: KeysPipe
    }];
  }, {
    config: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onInputChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    formCtrl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class NgOtpInputModule {}
/** @nocollapse */
NgOtpInputModule.ɵfac = function NgOtpInputModule_Factory(t) {
  return new (t || NgOtpInputModule)();
};
/** @nocollapse */
NgOtpInputModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgOtpInputModule
});
/** @nocollapse */
NgOtpInputModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [KeysPipe],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOtpInputModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule],
      declarations: [NgOtpInputComponent, KeysPipe],
      exports: [NgOtpInputComponent],
      providers: [KeysPipe]
    }]
  }], null, null);
})();
class Config {}

/*
 * Public API Surface of ng-otp-input
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_account_account_module_ts.js.map