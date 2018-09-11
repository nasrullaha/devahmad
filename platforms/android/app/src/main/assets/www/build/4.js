webpackJsonp([4],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmDetailsPageModule", function() { return FilmDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__film_details__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FilmDetailsPageModule = /** @class */ (function () {
    function FilmDetailsPageModule() {
    }
    FilmDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__film_details__["a" /* FilmDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__film_details__["a" /* FilmDetailsPage */]),
            ],
        })
    ], FilmDetailsPageModule);
    return FilmDetailsPageModule;
}());

//# sourceMappingURL=film-details.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_favorite_favorite__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FilmDetailsPage = /** @class */ (function () {
    function FilmDetailsPage(navCtrl, favoriteProvider, navParams, emailComposer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.favoriteProvider = favoriteProvider;
        this.navParams = navParams;
        this.emailComposer = emailComposer;
        this.isFavorite = false;
        this.film = this.navParams.get('film');
        this.favoriteProvider.isFavorite(this.film.episode_id).then(function (isFav) {
            _this.isFavorite = isFav;
        });
    }
    FilmDetailsPage.prototype.favoriteFilm = function () {
        var _this = this;
        this.favoriteProvider.favoriteFilm(this.film.episode_id).then(function () {
            _this.isFavorite = true;
        });
    };
    FilmDetailsPage.prototype.unfavoriteFilm = function () {
        var _this = this;
        this.favoriteProvider.unfavoriteFilm(this.film.episode_id).then(function () {
            _this.isFavorite = false;
        });
    };
    FilmDetailsPage.prototype.shareFilm = function () {
        var email = {
            to: 'ahmad_nasrullah@student.smc.edu',
            subject: 'I love this one: ' + this.film.title,
            body: 'Can you remember the opening?<br><br>\"' + this.film.opening_crawl + '\"',
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    FilmDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-film-details',template:/*ion-inline-start:"E:\TRAINING PDC 2018\training1\src\pages\film-details\film-details.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ film.title }}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="secondary" (click)="unfavoriteFilm()" *ngIf="isFavorite"><ion-icon name="star"></ion-icon></button>\n      <button ion-button icon-only color="secondary" (click)="favoriteFilm()" *ngIf="!isFavorite"><ion-icon name="star-outline"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n \n<ion-content padding>\n  <ion-card class="movie-card">\n    <ion-card-header>Episode {{ film.episode_id }}: {{ film.title }}</ion-card-header>\n    <ion-card-content>\n      {{ film.opening_crawl }}\n    </ion-card-content>\n\n    <ion-item class="movie-info">\n      <ion-icon name="film" item-left></ion-icon>\n      Director: {{ film.director }}\n    </ion-item>\n \n    <ion-item class="movie-info">\n      <ion-icon name="calendar" item-left></ion-icon>\n      Release Date: {{ film.release_date | date }}\n    </ion-item>\n  </ion-card>\n  \n  <button ion-button full color="secondary" (click)="shareFilm()">Share by Email</button>\n</ion-content>'/*ion-inline-end:"E:\TRAINING PDC 2018\training1\src\pages\film-details\film-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_favorite_favorite__["a" /* FavoriteProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], FilmDetailsPage);
    return FilmDetailsPage;
}());

//# sourceMappingURL=film-details.js.map

/***/ })

});
//# sourceMappingURL=4.js.map