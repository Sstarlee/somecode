import *as net from "net";

let server = net.createServer((connection: any) => {
    console.log("connection is cuccess !");
    connection.on('end', () => {
        console.log("connection is close !");
    })
    connection.write(" this is a connection test");

    connection.pipe(connection);
});
server.listen(8080, () => {
    console.log(" the server listen to 8080");
})