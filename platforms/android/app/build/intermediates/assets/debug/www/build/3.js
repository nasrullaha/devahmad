webpackJsonp([3],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsPageModule", function() { return FilmsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__films__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FilmsPageModule = /** @class */ (function () {
    function FilmsPageModule() {
    }
    FilmsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__films__["a" /* FilmsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__films__["a" /* FilmsPage */]),
            ],
        })
    ], FilmsPageModule);
    return FilmsPageModule;
}());

//# sourceMappingURL=films.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_api_api__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilmsPage = /** @class */ (function () {
    function FilmsPage(navCtrl, apiProvider) {
        this.navCtrl = navCtrl;
        this.apiProvider = apiProvider;
        this.a = this.apiProvider.getFilms();
        //  console.log(this.apiProvider.getFilms());
    }
    FilmsPage.prototype.openDetails = function (film) {
        this.navCtrl.push('FilmDetailsPage', { film: film });
    };
    FilmsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-films',template:/*ion-inline-start:"E:\TRAINING PDC 2018\training1\src\pages\films\films.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Films</ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n<ion-list>\n  <button ion-item *ngFor="let z of (a | async)?.results" (click)="openDetails(film)">\n    {{ z.id }}\n  </button>\n</ion-list>\n \n</ion-content>'/*ion-inline-end:"E:\TRAINING PDC 2018\training1\src\pages\films\films.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_api_api__["a" /* ApiProvider */]])
    ], FilmsPage);
    return FilmsPage;
}());

//# sourceMappingURL=films.js.map

/***/ })

});
//# sourceMappingURL=3.js.map