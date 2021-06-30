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
const url = __importStar(require("url"));
const fs = __importStar(require("fs"));
// 创建服务器
http.createServer(function (request, response) {
    // 解析请求，包括文件名
    let pathname = '';
    pathname = url.pathToFileURL(request.url).pathname;
    // 输出请求的文件名
    console.log("Request for " + pathname + " received.");
    // 从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            // HTTP 状态码: 404 : NOT FOUND
            // Content Type: text/html
            response.writeHead(404, { 'Content-Type': './text/html' });
        }
        else {
            // HTTP 状态码: 200 : OK
            // Content Type: text/html
            response.writeHead(200, { 'Content-Type': './text/html' });
            // 响应文件内容
            response.write(data.toString());
        }
        //  发送响应数据
        response.end();
    });
}).listen(8080);
// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8080/');
//# sourceMappingURL=http_server.js.map