import * as http from 'http';
let options = {
    host: 'www.baidu.com',
    port: 80,
    path: '/upload',
    method: 'POST'
};
let req = http.request(options, function (res: any) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk: any) {
        console.log('BODY: ' + chunk);
    });
    res.on('end', function () {
        console.log('this is end !');
    });
});
req.on('error', function (e: any) {
    console.log('problem with request: ' + e.message);
}); // write data to request body req.write('data\n'); req.write('data\n'); req.end();

req.write('data\n');
req.write('data\n');
req.end();