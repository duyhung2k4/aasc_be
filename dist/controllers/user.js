"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = exports.UserController = void 0;
const axios_1 = __importDefault(require("axios"));
const http_1 = __importDefault(require("../utils/http"));
class UserController {
    httpUitls;
    constructor() {
        this.httpUitls = new http_1.default();
        this.GetAllEmployee = this.GetAllEmployee.bind(this);
    }
    async GetAllEmployee(req, res) {
        try {
            const { token } = req.query;
            const result = await axios_1.default.get(`${process.env.B24_URL}/rest/user.get.json?auth=${token}`);
            this.httpUitls.SuccessResponse(res, result.data);
        }
        catch (error) {
            this.httpUitls.ErrorResponse(res, new Error(`${error}`));
        }
    }
}
exports.UserController = UserController;
exports.userController = new UserController();
