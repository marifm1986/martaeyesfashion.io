(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"heroArea\">\n<img src=\"../../assets/images/products/office.jpg\" alt=\"\">\n\n    </div>\n<p class=\"mt-5 text-justify\">\n    100% Garments Buying House / Agent with Valid licenses to work for valued foreign buyers. \n    is working as a buying house in the field of garments industry, managed to maintain a good medium exchange of communication to our international buyers we take it into consideration that all our people can communicate and be able to deliver in a proper way the information needed by customers to avoid misunderstanding and ambiguity.\n    \n    Our experienced merchandisers and quality assurance/control team and Garment Technician, who are playing the rule to ensure the qualities of the product are as per buyers AQL. \n    \n    Our major activities are to make sure of the quality control of raw materials including accessories, care labels, printings and fabric and ensuring competitive prices. To provide total customer satisfaction by providing buyers a range of good quality garments and services at a very reasonable cost is our main objective. \n    \n    We are always ready to take the challenge of meeting buyers demand for all sort of high quality garments as per buyer’s requirement. We welcome customers from all over the world, \n    \n    Marta Eyes Fashion Ltd, can be your best source of buying. We always keep our promises to keep a good and long term business relationship to our customers all over the world\n    \n</p>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _mens_mens_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mens/mens.component */ "./src/app/mens/mens.component.ts");
/* harmony import */ var _womens_womens_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./womens/womens.component */ "./src/app/womens/womens.component.ts");
/* harmony import */ var _kids_kids_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./kids/kids.component */ "./src/app/kids/kids.component.ts");









var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: 'mens', component: _mens_mens_component__WEBPACK_IMPORTED_MODULE_6__["MensComponent"] },
    { path: 'womens', component: _womens_womens_component__WEBPACK_IMPORTED_MODULE_7__["WomensComponent"] },
    { path: 'kids', component: _kids_kids_component__WEBPACK_IMPORTED_MODULE_8__["KidsComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<div class=\"container mt-5\">\n<router-outlet></router-outlet>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./company/company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _strengths_strengths_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./strengths/strengths.component */ "./src/app/strengths/strengths.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _mens_mens_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mens/mens.component */ "./src/app/mens/mens.component.ts");
/* harmony import */ var _womens_womens_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./womens/womens.component */ "./src/app/womens/womens.component.ts");
/* harmony import */ var _kids_kids_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./kids/kids.component */ "./src/app/kids/kids.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _company_company_component__WEBPACK_IMPORTED_MODULE_9__["CompanyComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_10__["ProductComponent"],
                _strengths_strengths_component__WEBPACK_IMPORTED_MODULE_11__["StrengthsComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _mens_mens_component__WEBPACK_IMPORTED_MODULE_13__["MensComponent"],
                _womens_womens_component__WEBPACK_IMPORTED_MODULE_14__["WomensComponent"],
                _kids_kids_component__WEBPACK_IMPORTED_MODULE_15__["KidsComponent"],
                _test_test_component__WEBPACK_IMPORTED_MODULE_16__["TestComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/company/company.component.html":
/*!************************************************!*\
  !*** ./src/app/company/company.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  company works!\n</p>\n"

/***/ }),

/***/ "./src/app/company/company.component.scss":
/*!************************************************!*\
  !*** ./src/app/company/company.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvY29tcGFueS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/company/company.component.ts":
/*!**********************************************!*\
  !*** ./src/app/company/company.component.ts ***!
  \**********************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CompanyComponent = /** @class */ (function () {
    function CompanyComponent() {
    }
    CompanyComponent.prototype.ngOnInit = function () {
    };
    CompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! ./company.component.html */ "./src/app/company/company.component.html"),
            styles: [__webpack_require__(/*! ./company.component.scss */ "./src/app/company/company.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n<div class=\"map col-md-12 m-auto\">\n        <iframe src=\"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14600.809682734041!2d90.41221243718228!3d23.811400002948144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sJomoj+Road%2C+Joar+Sahara%2C+Vatara%2C+Dhaka+1229.+!5e0!3m2!1sen!2sbd!4v1556788969344!5m2!1sen!2sbd\" width=\"100%\" height=\"400\" frameborder=\"0\" style=\"border:1\" allowfullscreen></iframe>\n      </div>\n\n\n<div class=\"contact col-md-6\">\n    <ul class=\"text-center m-auto \">\n        <li><span>Managing Director:</span> <h1> SHAKIR SHAH</h1></li>\n        <li><i class=\"far fa-envelope\"></i> shah@martaeyesfashionltd</li>\n        <li><i class=\"fas fa-globe-americas\"></i> <a href=\"https://martaeyesfashionltd.com\"> martaeyesfashionltd.com</a></li>\n        <li><i class=\"fas fa-phone-volume\"></i> +880 1708 52 42 73 / 01316 69 77 02</li>\n        <li><i class=\"fas fa-map-marker-alt\"></i> Ka-121/2 - 7th Floor, Road: Jomoj Road, Joar Shara Vatara, Dhaka: 1229.</li>\n    </ul>\n\n</div>\n\n<div class=\"contact col-md-6\">\n    <form>\n        <div class=\"form-group\">\n          <label for=\"exampleFormControlInput1\"><i class=\"fas fa-user\"></i> Name</label>\n          <input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"name\">\n            <label for=\"exampleFormControlInput1\"> <i class=\"fas fa-envelope\"></i> Email</label>\n            <input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"email@example.com\">\n          <label for=\"exampleFormControlTextarea1\"> <i class=\"fas fa-comments\"></i> Your Message</label>\n          <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n        </div>\n      </form>\n\n  </div>\n\n\n\n    </div>"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact {\n  float: left;\n  width: 100%;\n  height: 400px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9GOlxcQXJpZlxccGVyc29uYWxcXFdFQlxcbWFydGEgZXllc1xcbmV3IHdlYiBNRUZcXG1hcnRhZXllc2Zhc2hpb25sdGQvc3JjXFxhcHBcXGNvbnRhY3RcXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmNvbnRhY3R7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIFxyXG59XHJcblxyXG4gICAgXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getUsers = function () {
        return this.http.get('https://reqres.in/api/users');
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"bg-dark fixed-bottom\">\n  <div class=\"text-white text-center mt-3\">\n  Contact No: +8801708524273 / +8801316697702\n    <p>© Marta Eyes Fashion Ltd. All rights reserved.</p>\n</div>\n</footer>\n\n\n    \n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content a {\n  padding-left: 30px;\n  color: #262622;\n  text-decoration: none; }\n\n.footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: red;\n  color: white;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0Y6XFxBcmlmXFxwZXJzb25hbFxcV0VCXFxtYXJ0YSBleWVzXFxuZXcgd2ViIE1FRlxcbWFydGFleWVzZmFzaGlvbmx0ZC9zcmNcXGFwcFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHFCQUFxQixFQUFBOztBQU16QjtFQUNJLGVBQWU7RUFDZixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmNvbnRlbnQgYSB7XHJcbiAgICBcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIGNvbG9yOiAjMjYyNjIyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgXHJcbn1cclxuXHJcblxyXG5cclxuLmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!-- <ul *ngIf=\"users\">\n    <li *ngFor=\"let user of users.data\">\n        <img [src]=\"user.avatar\" alt=\"\">\n        <p>{{ user.first_name }} {{ user.last_name}}</p>\n    </li>\n</ul> -->\n<div id=\"carouselExampleControls\" class=\"carousel slide position-relative p-0\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n\n<div class=\"carousel-item active\">\n<img src=\"../../assets/images/Home page/mef (1).jpg\" class=\"d-block w-100\" alt=\"...\">\n</div>\n\n<div class=\"carousel-item\">\n<img src=\"../../assets/images//Home page/mef (2).jpg\" class=\"d-block w-100\" alt=\"...\">\n</div>\n\n<div class=\"carousel-item\">\n<img src=\"../../assets/images/Home page/mef (3).jpg\" class=\"d-block w-100\" alt=\"...\">\n</div>\n\n<div class=\"carousel-item\">\n<img src=\"../../assets/images/Home page/mef (4).jpg\" class=\"d-block w-100\" alt=\"...\">\n</div>\n\n\n<div class=\"carousel-item\">\n<img src=\"../../assets/images/Home page/mef (5).jpg\" class=\"d-block w-100\" alt=\"...\">\n</div>\n\n<div class=\"carousel-item\">\n<img src=\"../../assets/images/Home page/mef (6).jpg\" class=\"d-block w-100\" alt=\"...\">\n</div>\n\n<div class=\"carousel-item\">\n  <img src=\"../../assets/images/Home page/mef (7).jpg\" class=\"d-block w-100\" alt=\"...\">\n</div>\n\n<div class=\"carousel-item\">\n    <img src=\"../../assets/images/Home page/mef (8).jpg\" class=\"d-block w-100\" alt=\"...\">\n  </div>\n\n<div class=\"carousel-item\">\n  <img src=\"../../assets/images/Home page/mef (9).jpg\" class=\"d-block w-100\" alt=\"...\">\n</div>\n\n<div class=\"carousel-item\">\n<img src=\"../../assets/images/Home page/mef (10).jpg\" class=\"d-block w-100\" alt=\"...\">\n</div>\n\n<div class=\"carousel-item\">\n<img src=\"../../assets/images/Home page/mef (11).jpg\" class=\"d-block w-100\" alt=\"...\">\n</div>\n\n<div class=\"carousel-item\">\n<img src=\"../../assets/images/Home page/mef (12).jpg\" class=\"d-block w-100\" alt=\"...\">\n</div>\n\n<div class=\"carousel-item\">\n<img src=\"../../assets/images/Home page/mef (13).jpg\" class=\"d-block w-100\" alt=\"...\">\n</div>\n\n<div class=\"carousel-item\">\n<img src=\"../../assets/images/Home page/mef (14).jpg\" class=\"d-block w-100\" alt=\"...\">\n</div>\n\n<div class=\"carousel-item\">\n<img src=\"../../assets/images/Home page/mef (15).jpg\" class=\"d-block w-100\" alt=\"...\">\n</div>\n\n<div class=\"carousel-item\">\n<img src=\"../../assets/images/Home page/mef (16).jpg\" class=\"d-block w-100\" alt=\"...\">\n</div>\n\n<div class=\"carousel-item\">\n<img src=\"../../assets/images/Home page/mef (17).jpg\" class=\"d-block w-100\" alt=\"...\">\n</div>\n\n<div class=\"carousel-item\">\n<img src=\"../../assets/images/Home page/mef (18).jpg\" class=\"d-block w-100\" alt=\"...\">\n</div>\n\n<div class=\"carousel-item\">\n<img src=\"../../assets/images/Home page/mef (19).jpg\" class=\"d-block w-100\" alt=\"...\">\n</div>\n\n<div class=\"carousel-item\">\n<img src=\"../../assets/images/Home page/mef (20).jpg\" class=\"d-block w-100\" alt=\"...\">\n</div>\n\n<div class=\"carousel-item\">\n<img src=\"../../assets/images/Home page/mef (21).jpg\" class=\"d-block w-100\" alt=\"...\">\n</div>\n\n<div class=\"carousel-item\">\n<img src=\"../../assets/images/Home page/mef (22).jpg\" class=\"d-block w-100\" alt=\"...\">\n</div>\n\n<div class=\"carousel-item\">\n<img src=\"../../assets/images/Home page/mef (23).jpg\" class=\"d-block w-100\" alt=\"...\">\n</div>\n\n<div class=\"carousel-item\">\n<img src=\"../../assets/images/Home page/mef (24).jpg\" class=\"d-block w-100\" alt=\"...\">\n</div>\n\n<div class=\"carousel-item\">\n<img src=\"../../assets/images/Home page/mef (25).jpg\" class=\"d-block w-100\" alt=\"...\">\n</div>\n\n<div class=\"carousel-item\">\n<img src=\"../../assets/images/Home page/mef (26).jpg\" class=\"d-block w-100\" alt=\"...\">\n</div>\n\n<div class=\"carousel-item\">\n<img src=\"../../assets/images/Home page/mef (27).jpg\" class=\"d-block w-100\" alt=\"...\">\n</div>\n\n<div class=\"carousel-item\">\n<img src=\"../../assets/images/Home page/mef (28).jpg\" class=\"d-block w-100\" alt=\"...\">\n</div>\n\n<div class=\"carousel-item\">\n<img src=\"../../assets/images/Home page/mef (29).jpg\" class=\"d-block w-100\" alt=\"...\">\n</div>\n\n\n<div class=\"carousel-item\">\n<img src=\"../../assets/images/Home page/mef (30).jpg\" class=\"d-block w-100\" alt=\"...\">\n</div>\n\n<div class=\"carousel-item\">\n<img src=\"../../assets/images/Home page/mef (31).jpg\" class=\"d-block w-100\" alt=\"...\">\n</div>\n\n<div class=\"carousel-item\">\n  <img src=\"../../assets/images/Home page/mef (32).jpg\" class=\"d-block w-100\" alt=\"...\">\n</div>\n\n\n\n\n\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n \n\n<div class=\"contentArea\">\n    \n<h1 class=\"text-center mt-3 text-secondary\">Marta Eyes Fashion Ltd.</h1>\n<p class=\"text-center col-lg-12 m-auto\">Marta Eyes Fashion Ltd is a kind of garment-buying house that can provide any kind of\n     fashionable apparels as per buyer’s requirement. We can handle small to large\n      quantity of orders with quality assurance. To be the most trusted and respected professional\n       services firm recognized by our clients for delivering excellence.</p>\n\n       \n</div>\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div#carouselExampleControls {\n  background-repeat: no-repeat;\n  overflow: hidden;\n  height: 520px; }\n\n.product ul {\n  display: flex;\n  position: relative; }\n\n.contentArea {\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9GOlxcQXJpZlxccGVyc29uYWxcXFdFQlxcbWFydGEgZXllc1xcbmV3IHdlYiBNRUZcXG1hcnRhZXllc2Zhc2hpb25sdGQvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLGFBQWEsRUFBQTs7QUFPakI7RUFDSSxhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBS3RCO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5kaXYjY2Fyb3VzZWxFeGFtcGxlQ29udHJvbHMge1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGhlaWdodDogNTIwcHg7XHJcblxyXG4gICAgXHJcbiAgXHJcbn1cclxuXHJcblxyXG4ucHJvZHVjdCB1bHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG4uY29udGVudEFyZWF7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(data) {
        this.data = data;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getUsers().subscribe(function (data) {
            _this.users = data;
            console.log(_this.users);
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/kids/kids.component.html":
/*!******************************************!*\
  !*** ./src/app/kids/kids.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n<div class=\"container bg-light\">\n\n    <h1 class=\"bg-light\">Kid's Wears</h1>\n        \n    <div class=\"row text-center text-lg-left\">\n  \n      <div class=\"col-lg-3 col-md-4 col-6\">\n        <a href=\"#\" class=\"d-block mb-4 h-100 imgHover\">\n              <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Kids/01 (1).jpg\" alt=\"\">\n            </a>\n      </div>\n      <div class=\"col-lg-3 col-md-4 col-6\">\n        <a href=\"#\" class=\"d-block mb-4 h-100 imgHover\">\n              <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Kids/01 (10).jpg\" alt=\"\">\n            </a>\n      </div>\n      <div class=\"col-lg-3 col-md-4 col-6\">\n        <a href=\"#\" class=\"d-block mb-4 h-100\">\n              <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Kids/01 (11).jpg\" alt=\"\">\n            </a>\n      </div>\n      <div class=\"col-lg-3 col-md-4 col-6\">\n        <a href=\"#\" class=\"d-block mb-4 h-100\">\n              <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Kids/01 (12).jpg\" alt=\"\">\n            </a>\n      </div>\n      <div class=\"col-lg-3 col-md-4 col-6\">\n        <a href=\"#\" class=\"d-block mb-4 h-100\">\n              <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Kids/01 (13).jpg\" alt=\"\">\n            </a>\n      </div>\n      <div class=\"col-lg-3 col-md-4 col-6\">\n        <a href=\"#\" class=\"d-block mb-4 h-100\">\n              <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Kids/01 (14).jpg\" alt=\"\">\n            </a>\n      </div>\n      <div class=\"col-lg-3 col-md-4 col-6\">\n        <a href=\"#\" class=\"d-block mb-4 h-100\">\n              <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Kids/01 (15).jpg\" alt=\"\">\n            </a>\n      </div>\n      <div class=\"col-lg-3 col-md-4 col-6\">\n        <a href=\"#\" class=\"d-block mb-4 h-100\">\n              <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Kids/01 (16).jpg\" alt=\"\">\n            </a>\n      </div>\n      <div class=\"col-lg-3 col-md-4 col-6\">\n        <a href=\"#\" class=\"d-block mb-4 h-100\">\n              <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Kids/01 (17).jpg\" alt=\"\">\n            </a>\n      </div>\n      <div class=\"col-lg-3 col-md-4 col-6\">\n        <a href=\"#\" class=\"d-block mb-4 h-100\">\n              <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Kids/01 (18).jpg\" alt=\"\">\n            </a>\n      </div>\n      <div class=\"col-lg-3 col-md-4 col-6\">\n        <a href=\"#\" class=\"d-block mb-4 h-100\">\n              <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Kids/01 (19).jpg\" alt=\"\">\n            </a>\n      </div>\n      <div class=\"col-lg-3 col-md-4 col-6\">\n        <a href=\"#\" class=\"d-block mb-4 h-100\">\n              <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Kids/01 (2).jpg\" alt=\"\">\n            </a>\n      </div>\n  \n      <div class=\"col-lg-3 col-md-4 col-6\">\n          <a href=\"#\" class=\"d-block mb-4 h-100\">\n                <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Kids/01 (20).jpg\" alt=\"\">\n              </a>\n        </div>\n        <div class=\"col-lg-3 col-md-4 col-6\">\n            <a href=\"#\" class=\"d-block mb-4 h-100\">\n                  <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Kids/01 (21).jpg\" alt=\"\">\n                </a>\n          </div>\n  \n          <div class=\"col-lg-3 col-md-4 col-6\">\n              <a href=\"#\" class=\"d-block mb-4 h-100\">\n                    <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Kids/01 (22).jpg\" alt=\"\">\n                  </a>\n            </div>\n  \n            <div class=\"col-lg-3 col-md-4 col-6\">\n                <a href=\"#\" class=\"d-block mb-4 h-100\">\n                      <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Kids/01 (23).jpg\" alt=\"\">\n                    </a>\n              </div>\n  \n              <div class=\"col-lg-3 col-md-4 col-6\">\n                  <a href=\"#\" class=\"d-block mb-4 h-100\">\n                        <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Kids/01 (24).jpg\" alt=\"\">\n                      </a>\n                </div>\n  \n                <div class=\"col-lg-3 col-md-4 col-6\">\n                    <a href=\"#\" class=\"d-block mb-4 h-100\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Kids/01 (25).jpg\" alt=\"\">\n                        </a>\n                  </div>\n  \n                  <div class=\"col-lg-3 col-md-4 col-6\">\n                      <a href=\"#\" class=\"d-block mb-4 h-100\">\n                            <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Kids/01 (26).jpg\" alt=\"\">\n                          </a>\n                    </div>\n  \n                    <div class=\"col-lg-3 col-md-4 col-6\">\n                        <a href=\"#\" class=\"d-block mb-4 h-100\">\n                              <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Kids/01 (27).jpg\" alt=\"\">\n                            </a>\n                      </div>\n\n                      <div class=\"col-lg-3 col-md-4 col-6\">\n                          <a href=\"#\" class=\"d-block mb-4 h-100\">\n                                <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Kids/01 (28).jpg\" alt=\"\">\n                              </a>\n                        </div>\n\n                        <div class=\"col-lg-3 col-md-4 col-6\">\n                            <a href=\"#\" class=\"d-block mb-4 h-100\">\n                                  <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Kids/01 (29).jpg\" alt=\"\">\n                                </a>\n                          </div>\n\n                          <div class=\"col-lg-3 col-md-4 col-6\">\n                              <a href=\"#\" class=\"d-block mb-4 h-100\">\n                                    <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Kids/01 (3).jpg\" alt=\"\">\n                                  </a>\n                            </div>\n\n                            <div class=\"col-lg-3 col-md-4 col-6\">\n                                <a href=\"#\" class=\"d-block mb-4 h-100\">\n                                      <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Kids/01 (30).jpg\" alt=\"\">\n                                    </a>\n                              </div>\n\n                              <div class=\"col-lg-3 col-md-4 col-6\">\n                                  <a href=\"#\" class=\"d-block mb-4 h-100\">\n                                        <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Kids/01 (31).jpg\" alt=\"\">\n                                      </a>\n                                </div>\n\n                                <div class=\"col-lg-3 col-md-4 col-6\">\n                                    <a href=\"#\" class=\"d-block mb-4 h-100\">\n                                          <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Kids/01 (32).jpg\" alt=\"\">\n                                        </a>\n                                  </div>\n\n                                  <div class=\"col-lg-3 col-md-4 col-6\">\n                                      <a href=\"#\" class=\"d-block mb-4 h-100\">\n                                            <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Kids/01 (33).jpg\" alt=\"\">\n                                          </a>\n                                    </div>\n\n                                    <div class=\"col-lg-3 col-md-4 col-6\">\n                                        <a href=\"#\" class=\"d-block mb-4 h-100\">\n                                              <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Kids/01 (34).jpg\" alt=\"\">\n                                            </a>\n                                      </div>\n\n                                      <div class=\"col-lg-3 col-md-4 col-6\">\n                                          <a href=\"#\" class=\"d-block mb-4 h-100\">\n                                                <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Kids/01 (35).jpg\" alt=\"\">\n                                              </a>\n                                        </div>\n\n                                        <div class=\"col-lg-3 col-md-4 col-6\">\n                                            <a href=\"#\" class=\"d-block mb-4 h-100\">\n                                                  <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Kids/01 (36).jpg\" alt=\"\">\n                                                </a>\n                                          </div>\n\n                                          <div class=\"col-lg-3 col-md-4 col-6\">\n                                              <a href=\"#\" class=\"d-block mb-4 h-100\">\n                                                    <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Kids/01 (37).jpg\" alt=\"\">\n                                                  </a>\n                                            </div>\n\n                                            <div class=\"col-lg-3 col-md-4 col-6\">\n                                                <a href=\"#\" class=\"d-block mb-4 h-100\">\n                                                      <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Kids/01 (38).jpg\" alt=\"\">\n                                                    </a>\n                                              </div>\n\n                                              <div class=\"col-lg-3 col-md-4 col-6\">\n                                                  <a href=\"#\" class=\"d-block mb-4 h-100\">\n                                                        <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Kids/01 (39).jpg\" alt=\"\">\n                                                      </a>\n                                                </div>\n                    \n    </div>\n  \n  </div>\n  "

/***/ }),

/***/ "./src/app/kids/kids.component.scss":
/*!******************************************!*\
  !*** ./src/app/kids/kids.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2tpZHMva2lkcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/kids/kids.component.ts":
/*!****************************************!*\
  !*** ./src/app/kids/kids.component.ts ***!
  \****************************************/
/*! exports provided: KidsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KidsComponent", function() { return KidsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KidsComponent = /** @class */ (function () {
    function KidsComponent() {
    }
    KidsComponent.prototype.ngOnInit = function () {
    };
    KidsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kids',
            template: __webpack_require__(/*! ./kids.component.html */ "./src/app/kids/kids.component.html"),
            styles: [__webpack_require__(/*! ./kids.component.scss */ "./src/app/kids/kids.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], KidsComponent);
    return KidsComponent;
}());



/***/ }),

/***/ "./src/app/mens/mens.component.html":
/*!******************************************!*\
  !*** ./src/app/mens/mens.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n<div class=\"container bg-light\">\n\n  <h1 class=\"bg-light\">Men's Wears</h1>\n\n  \n\n  <div class=\"row text-center text-lg-left\">\n\n    <div class=\"col-lg-3 col-md-4 col-6\">\n      <a href=\"#\" class=\"d-block mb-4 h-100 imgHover\">\n            <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (1).jpg\" alt=\"\">\n          </a>\n    </div>\n    <div class=\"col-lg-3 col-md-4 col-6\">\n      <a href=\"#\" class=\"d-block mb-4 h-100 imgHover\">\n            <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (1).png\" alt=\"\">\n          </a>\n    </div>\n    <div class=\"col-lg-3 col-md-4 col-6\">\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\n            <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (10).jpg\" alt=\"\">\n          </a>\n    </div>\n    <div class=\"col-lg-3 col-md-4 col-6\">\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\n            <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (11).jpg\" alt=\"\">\n          </a>\n    </div>\n    <div class=\"col-lg-3 col-md-4 col-6\">\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\n            <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (12).jpg\" alt=\"\">\n          </a>\n    </div>\n    <div class=\"col-lg-3 col-md-4 col-6\">\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\n            <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (13).jpg\" alt=\"\">\n          </a>\n    </div>\n    <div class=\"col-lg-3 col-md-4 col-6\">\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\n            <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (14).jpg\" alt=\"\">\n          </a>\n    </div>\n    <div class=\"col-lg-3 col-md-4 col-6\">\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\n            <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (15).jpg\" alt=\"\">\n          </a>\n    </div>\n    <div class=\"col-lg-3 col-md-4 col-6\">\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\n            <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (16).jpg\" alt=\"\">\n          </a>\n    </div>\n    <div class=\"col-lg-3 col-md-4 col-6\">\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\n            <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (17).jpg\" alt=\"\">\n          </a>\n    </div>\n    <div class=\"col-lg-3 col-md-4 col-6\">\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\n            <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (18).jpg\" alt=\"\">\n          </a>\n    </div>\n    <div class=\"col-lg-3 col-md-4 col-6\">\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\n            <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (2).jpg\" alt=\"\">\n          </a>\n    </div>\n\n    <div class=\"col-lg-3 col-md-4 col-6\">\n        <a href=\"#\" class=\"d-block mb-4 h-100\">\n              <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (2).png\" alt=\"\">\n            </a>\n      </div>\n      <div class=\"col-lg-3 col-md-4 col-6\">\n          <a href=\"#\" class=\"d-block mb-4 h-100\">\n                <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (3).jpg\" alt=\"\">\n              </a>\n        </div>\n\n        <div class=\"col-lg-3 col-md-4 col-6\">\n            <a href=\"#\" class=\"d-block mb-4 h-100\">\n                  <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (4).jpg\" alt=\"\">\n                </a>\n          </div>\n\n          <div class=\"col-lg-3 col-md-4 col-6\">\n              <a href=\"#\" class=\"d-block mb-4 h-100\">\n                    <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (5).jpg\" alt=\"\">\n                  </a>\n            </div>\n\n            <div class=\"col-lg-3 col-md-4 col-6\">\n                <a href=\"#\" class=\"d-block mb-4 h-100\">\n                      <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (6).jpg\" alt=\"\">\n                    </a>\n              </div>\n\n              <div class=\"col-lg-3 col-md-4 col-6\">\n                  <a href=\"#\" class=\"d-block mb-4 h-100\">\n                        <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (7).jpg\" alt=\"\">\n                      </a>\n                </div>\n\n                <div class=\"col-lg-3 col-md-4 col-6\">\n                    <a href=\"#\" class=\"d-block mb-4 h-100\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (8).jpg\" alt=\"\">\n                        </a>\n                  </div>\n\n                  <div class=\"col-lg-3 col-md-4 col-6\">\n                      <a href=\"#\" class=\"d-block mb-4 h-100\">\n                            <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (9).jpg\" alt=\"\">\n                          </a>\n                    </div>\n                  \n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/mens/mens.component.scss":
/*!******************************************!*\
  !*** ./src/app/mens/mens.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  background: #000; }\n\n.img-thumbnail {\n  transition: .3s; }\n\n.img-thumbnail:hover {\n  -webkit-transform: scale(1.3);\n          transform: scale(1.3); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVucy9GOlxcQXJpZlxccGVyc29uYWxcXFdFQlxcbWFydGEgZXllc1xcbmV3IHdlYiBNRUZcXG1hcnRhZXllc2Zhc2hpb25sdGQvc3JjXFxhcHBcXG1lbnNcXG1lbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxnQkFBZ0IsRUFBQTs7QUFHaEI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksNkJBQXFCO1VBQXJCLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVucy9tZW5zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuYmFja2dyb3VuZDogIzAwMDsgICAgXHJcbn1cclxuXHJcbi5pbWctdGh1bWJuYWlse1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG59XHJcblxyXG4uaW1nLXRodW1ibmFpbDpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/mens/mens.component.ts":
/*!****************************************!*\
  !*** ./src/app/mens/mens.component.ts ***!
  \****************************************/
/*! exports provided: MensComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensComponent", function() { return MensComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MensComponent = /** @class */ (function () {
    function MensComponent() {
    }
    MensComponent.prototype.ngOnInit = function () {
    };
    MensComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mens',
            template: __webpack_require__(/*! ./mens.component.html */ "./src/app/mens/mens.component.html"),
            styles: [__webpack_require__(/*! ./mens.component.scss */ "./src/app/mens/mens.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MensComponent);
    return MensComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n\n<!-- \n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark static-top\">\n        <div class=\"container\">\n          <a class=\"navbar-brand\" href=\"#\"> Marta Eyes Fashion Ltd.\n                <img src=\"../../assets/images/Name-jpg-527-02.jpg\" alt=\"\">\n              </a>\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span class=\"navbar-toggler-icon\"></span>\n              </button>\n          <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n            <ul class=\"navbar-nav ml-auto\">\n              <li class=\"nav-item active\">\n                <a class=\"nav-link\" routerLink=\"/\">Home\n                      <span class=\"sr-only\">(current)</span>\n                    </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"about\">About Us</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"Product\">Product</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"contact\">Contact Us</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </nav>\n       -->\n      <!-- Page Content -->\n      \n      <!-- /.container -->\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light \">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" routerLink=\"/\" > Marta Eyes Fashion Ltd. </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav ml-auto\">\n        \n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item \">\n            <a class=\"nav-link\" routerLink=\"about\">About Us <span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item dropdown\">\n              <a class=\"nav-link dropdown-toggle\" href=\"\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                Products\n              </a>\n              <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                <a class=\"dropdown-item\" routerLink=\"mens\">Men's</a>\n                <a class=\"dropdown-item\" routerLink=\"womens\">Women</a>\n                <a class=\"dropdown-item\" routerLink=\"kids\">Kids</a>\n              </div>\n            </li>\n            <li class=\"nav-item \">\n                <a class=\"nav-link\" routerLink=\"contact\">Contact Us <span class=\"sr-only\">(current)</span></a>\n              </li>\n\n        \n      </ul>\n     \n    </div>\n  </div>\n  </nav>\n \n\n</header>\n\n"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); }\n\n.navbar-brand img {\n  width: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0Y6XFxBcmlmXFxwZXJzb25hbFxcV0VCXFxtYXJ0YSBleWVzXFxuZXcgd2ViIE1FRlxcbWFydGFleWVzZmFzaGlvbmx0ZC9zcmNcXGFwcFxcbmF2XFxuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSwwQ0FBc0MsRUFBQTs7QUFHMUM7RUFDSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4ubmF2YmFye1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLDAsMCwuMik7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQgaW1ne1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.webTitle = 'Marta Eyes Fashion Ltd.';
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product.component.scss":
/*!************************************************!*\
  !*** ./src/app/product/product.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/product/product.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/strengths/strengths.component.html":
/*!****************************************************!*\
  !*** ./src/app/strengths/strengths.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  strengths works!\n</p>\n"

/***/ }),

/***/ "./src/app/strengths/strengths.component.scss":
/*!****************************************************!*\
  !*** ./src/app/strengths/strengths.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0cmVuZ3Rocy9zdHJlbmd0aHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/strengths/strengths.component.ts":
/*!**************************************************!*\
  !*** ./src/app/strengths/strengths.component.ts ***!
  \**************************************************/
/*! exports provided: StrengthsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrengthsComponent", function() { return StrengthsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StrengthsComponent = /** @class */ (function () {
    function StrengthsComponent() {
    }
    StrengthsComponent.prototype.ngOnInit = function () {
    };
    StrengthsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-strengths',
            template: __webpack_require__(/*! ./strengths.component.html */ "./src/app/strengths/strengths.component.html"),
            styles: [__webpack_require__(/*! ./strengths.component.scss */ "./src/app/strengths/strengths.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StrengthsComponent);
    return StrengthsComponent;
}());



/***/ }),

/***/ "./src/app/test/test.component.html":
/*!******************************************!*\
  !*** ./src/app/test/test.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  test works!\n</p>\n\n<p>\n  test works!\n</p>\n<p>\n  test works!\n</p>\n<p>\n  test works!\n</p>\n<p>\n  test works!\n</p>\n<p>\n  test works!\n</p>\n<p>\n  test works!\n</p>\n"

/***/ }),

/***/ "./src/app/test/test.component.scss":
/*!******************************************!*\
  !*** ./src/app/test/test.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.scss */ "./src/app/test/test.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/womens/womens.component.html":
/*!**********************************************!*\
  !*** ./src/app/womens/womens.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n<div class=\"container bg-light\">\n\n    <h1 class=\"bg-light\">Women's Wears</h1>\n  \n    \n  \n    <div class=\"row text-center text-lg-left\">\n  \n      <div class=\"col-lg-3 col-md-4 col-6\">\n        <a href=\"#\" class=\"d-block mb-4 h-100 imgHover\">\n              <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (1).jpg\" alt=\"\">\n            </a>\n      </div>\n      <div class=\"col-lg-3 col-md-4 col-6\">\n        <a href=\"#\" class=\"d-block mb-4 h-100 imgHover\">\n              <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (1).png\" alt=\"\">\n            </a>\n      </div>\n      <div class=\"col-lg-3 col-md-4 col-6\">\n        <a href=\"#\" class=\"d-block mb-4 h-100\">\n              <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (10).jpg\" alt=\"\">\n            </a>\n      </div>\n      <div class=\"col-lg-3 col-md-4 col-6\">\n        <a href=\"#\" class=\"d-block mb-4 h-100\">\n              <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (11).jpg\" alt=\"\">\n            </a>\n      </div>\n      <div class=\"col-lg-3 col-md-4 col-6\">\n        <a href=\"#\" class=\"d-block mb-4 h-100\">\n              <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (12).jpg\" alt=\"\">\n            </a>\n      </div>\n      <div class=\"col-lg-3 col-md-4 col-6\">\n        <a href=\"#\" class=\"d-block mb-4 h-100\">\n              <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (13).jpg\" alt=\"\">\n            </a>\n      </div>\n      <div class=\"col-lg-3 col-md-4 col-6\">\n        <a href=\"#\" class=\"d-block mb-4 h-100\">\n              <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (14).jpg\" alt=\"\">\n            </a>\n      </div>\n      <div class=\"col-lg-3 col-md-4 col-6\">\n        <a href=\"#\" class=\"d-block mb-4 h-100\">\n              <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (15).jpg\" alt=\"\">\n            </a>\n      </div>\n      <div class=\"col-lg-3 col-md-4 col-6\">\n        <a href=\"#\" class=\"d-block mb-4 h-100\">\n              <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (16).jpg\" alt=\"\">\n            </a>\n      </div>\n      <div class=\"col-lg-3 col-md-4 col-6\">\n        <a href=\"#\" class=\"d-block mb-4 h-100\">\n              <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (17).jpg\" alt=\"\">\n            </a>\n      </div>\n      <div class=\"col-lg-3 col-md-4 col-6\">\n        <a href=\"#\" class=\"d-block mb-4 h-100\">\n              <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (18).jpg\" alt=\"\">\n            </a>\n      </div>\n      <div class=\"col-lg-3 col-md-4 col-6\">\n        <a href=\"#\" class=\"d-block mb-4 h-100\">\n              <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (2).jpg\" alt=\"\">\n            </a>\n      </div>\n  \n      <div class=\"col-lg-3 col-md-4 col-6\">\n          <a href=\"#\" class=\"d-block mb-4 h-100\">\n                <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (2).png\" alt=\"\">\n              </a>\n        </div>\n        <div class=\"col-lg-3 col-md-4 col-6\">\n            <a href=\"#\" class=\"d-block mb-4 h-100\">\n                  <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (3).jpg\" alt=\"\">\n                </a>\n          </div>\n  \n          <div class=\"col-lg-3 col-md-4 col-6\">\n              <a href=\"#\" class=\"d-block mb-4 h-100\">\n                    <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (4).jpg\" alt=\"\">\n                  </a>\n            </div>\n  \n            <div class=\"col-lg-3 col-md-4 col-6\">\n                <a href=\"#\" class=\"d-block mb-4 h-100\">\n                      <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (5).jpg\" alt=\"\">\n                    </a>\n              </div>\n  \n              <div class=\"col-lg-3 col-md-4 col-6\">\n                  <a href=\"#\" class=\"d-block mb-4 h-100\">\n                        <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (6).jpg\" alt=\"\">\n                      </a>\n                </div>\n  \n                <div class=\"col-lg-3 col-md-4 col-6\">\n                    <a href=\"#\" class=\"d-block mb-4 h-100\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (7).jpg\" alt=\"\">\n                        </a>\n                  </div>\n  \n                  <div class=\"col-lg-3 col-md-4 col-6\">\n                      <a href=\"#\" class=\"d-block mb-4 h-100\">\n                            <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (8).jpg\" alt=\"\">\n                          </a>\n                    </div>\n  \n                    <div class=\"col-lg-3 col-md-4 col-6\">\n                        <a href=\"#\" class=\"d-block mb-4 h-100\">\n                              <img class=\"img-fluid img-thumbnail\" src=\"../../assets/images/Mens/mens (9).jpg\" alt=\"\">\n                            </a>\n                      </div>\n                    \n    </div>\n  \n  </div>\n  "

/***/ }),

/***/ "./src/app/womens/womens.component.scss":
/*!**********************************************!*\
  !*** ./src/app/womens/womens.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvbWVucy93b21lbnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/womens/womens.component.ts":
/*!********************************************!*\
  !*** ./src/app/womens/womens.component.ts ***!
  \********************************************/
/*! exports provided: WomensComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WomensComponent", function() { return WomensComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WomensComponent = /** @class */ (function () {
    function WomensComponent() {
    }
    WomensComponent.prototype.ngOnInit = function () {
    };
    WomensComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-womens',
            template: __webpack_require__(/*! ./womens.component.html */ "./src/app/womens/womens.component.html"),
            styles: [__webpack_require__(/*! ./womens.component.scss */ "./src/app/womens/womens.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WomensComponent);
    return WomensComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Arif\personal\WEB\marta eyes\new web MEF\martaeyesfashionltd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map