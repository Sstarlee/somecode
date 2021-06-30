import *as net from 'net';
let client = net.connect({ port: 8080 }, () => {
    console.log('the client test conect to 8080');
});

client.on('data', (res: any, error: any) => {
    if (error) throw error;
    console.log(res);
    client.end();
});

client.on('end', (err: any) => {
    if (err) throw err;
    console.log(' client is close !');
})
