import net from "net";
import { router } from "./src/routers/app";
import { MessageResponse } from "./src/utils/type";

const port: number = 3000

const server = net.createServer();

server.on("connection", (socket) => {
    socket.on("data", async (message) => {
        const data: string = message.toString();
        const messageResponse: MessageResponse = await router(data);
        socket.write(JSON.stringify(messageResponse))
    })
});

server.listen(port, () =>
    console.log("Listening in port: " + port)
);