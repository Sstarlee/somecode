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
var mysql = require('mysql');
const fs = __importStar(require("fs"));
const path = 'C:/Users/lixiaoxing/Desktop/playerInfo.txt';
let resStr = '';
console.log(path);
function writePlayerInfo(path, data) {
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
connection.connect(function (error) {
    if (error) {
        console.log(error.stack);
        return;
    }
    console.log(`connect is successful the connectId is ${connection.threadId}`);
});
var sql = 'SELECT ext_data FROM tank_account';
connection.query(sql, function (error, results) {
    if (error)
        throw error;
    results.forEach((element) => {
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
//# sourceMappingURL=mysql.js.map