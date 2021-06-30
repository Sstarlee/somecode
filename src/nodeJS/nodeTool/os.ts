import *as os from 'os';
/**
 * 操作系统为程序运行创建的零食文件夹
 */
console.log(os.tmpdir());
/**
 * 查看cpu字节序
 */
console.log(os.endianness());

/**
 * 操作系统内存
 */
console.log(os.totalmem()/1024/1024);