"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
let path = process.cwd() + '/index.html';
// 用于请求的选项
const options = {
    host: 'localhost',
    port: '8080',
    path: path,
};
// 处理响应的回调函数
let callback = function (response) {
    // 不断更新数据
    var body = '';
    response.on('data', function (data) {
        body += data;
        console.log(body);
    });
    response.on('end', function () {
        // 数据接收完成
        console.log(body);
    });
};
// 向服务端发送请求
var req = http.request(options, callback);
req.end();
//# sourceMappingURL=http_client.js.map