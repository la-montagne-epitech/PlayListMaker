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
exports.SpotifyController = void 0;
const common_1 = require("@nestjs/common");
const spotify_service_1 = require("./spotify.service");
const passport_1 = require("@nestjs/passport");
let SpotifyController = class SpotifyController {
    constructor(spotifyService) {
        this.spotifyService = spotifyService;
        console.log('SpotifyController');
    }
    getSpotify() {
        return 'Spotify';
    }
    async spotifyAuth(req) { }
    async spotifyAuthCallback(req, res) {
        console.log('SpotifyController.spotifyAuthCallback', req.user);
        res.redirect('http://localhost:3000/?token=' + req.user.accessToken);
    }
};
__decorate([
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SpotifyController.prototype, "getSpotify", null);
__decorate([
    (0, common_1.Get)('login'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('spotify')),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SpotifyController.prototype, "spotifyAuth", null);
__decorate([
    (0, common_1.Get)('callback'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('spotify')),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SpotifyController.prototype, "spotifyAuthCallback", null);
SpotifyController = __decorate([
    (0, common_1.Controller)('spotify'),
    __metadata("design:paramtypes", [spotify_service_1.SpotifyService])
], SpotifyController);
exports.SpotifyController = SpotifyController;
//# sourceMappingURL=spotify.controller.js.map