"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = exports.AuthController = void 0;
const axios_1 = __importDefault(require("axios"));
const http_1 = __importDefault(require("../utils/http"));
class AuthController {
    httpUitls;
    constructor() {
        this.httpUitls = new http_1.default();
        this.Login = this.Login.bind(this);
    }
    async Login(req, res) {
        try {
            const { app_id } = req.query;
            const result = await axios_1.default.get(`${process.env.AASC_URL}/bx/oauth2_token/${app_id}`);
            this.httpUitls.SuccessResponse(res, result.data);
        }
        catch (error) {
            this.httpUitls.ErrorResponse(res, new Error(`${error}`));
        }
    }
}
exports.AuthController = AuthController;
exports.authController = new AuthController();
