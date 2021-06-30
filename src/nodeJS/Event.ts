let events = require('events');
let emitter = new events.EventEmitter();
emitter.on('someEvent', function (arg1: any, arg2: any) {
    console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function (arg1: any, arg2: any) {
    console.log('listener2', arg1, arg2);
});
emitter.emit('someEvent', 'arg1 参数', 'arg2 参数');

let buf = Buffer.alloc(50);
let len = buf.write("something for test");
console.log(len);
let buf1 = Buffer.from(buf.slice(9));
console.log(buf1.toString());
console.log(buf1.length);
/**输出文件执行的绝对路径 */
console.log(__filename);
