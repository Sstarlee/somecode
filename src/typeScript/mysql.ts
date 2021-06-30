var mysql = require('mysql');

import *as fs from 'fs';
import { inflateSync } from 'zlib';

const path = 'C:/Users/lixiaoxing/Desktop/playerInfo.txt';

let resStr: string = '';
console.log(path);
function writePlayerInfo(path: any, data: any) {
    /**如果没有这个文件 那么创建一个 */
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, '');
    }
    fs.writeFileSync(path, data);
}

writePlayerInfo(path, `1234655465465`);

var connection = mysql.createConnection({
    host: '159.75.228.52',
    user: 'appuser',
    password: 'pndEmAqADU0o',
    database: 'h5game'
});

connection.connect(function (error: any) {
    if (error) {
        console.log(error.stack);
        return;
    }
    console.log(`connect is successful the connectId is ${connection.threadId}`);
});

var sql = 'SELECT ext_data FROM tank_account';

connection.query(sql, function (error: any, results: any) {
    if (error) throw error;


    results.forEach((element: any) => {
        // let data: Uint8Array = element;
        // let resData:Buffer = inflateSync(data);
        // console.log(JSON.parse(data.toString()));

        // resStr += `open_id | ${element} |\n`;
        console.log(element);
    });
    // writePlayerInfo(path, resStr);
});


/**连接断开 */
connection.end();