import *as http from 'http';

let path = process.cwd() + '/index.html';

// 用于请求的选项
const options = {
    host: 'localhost',
    port: '8080',
    path: path,
};

// 处理响应的回调函数
let callback = function (response: any) {
    // 不断更新数据
    var body = '';
    response.on('data', function (data: any) {
        body += data;
        console.log(body);
    });

    response.on('end', function () {
        // 数据接收完成
        console.log(body);
    });
}
// 向服务端发送请求
var req = http.request(options, callback);
req.end();