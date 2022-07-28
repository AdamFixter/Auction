const net = require("net");
const { CHANNELS } = require("./shared/constants");

const connOptions = {
  host: "0.0.0.0",
  port: 6666,
};

module.exports = (win) => {
  let socket = net.connect(connOptions);
  
  socket.on("data", (data) => {
    let payload = JSON.parse(data);
    let request = JSON.parse(payload.request);
    let response = payload.response;
    let message = request.message;

    let key = Object.keys(CHANNELS).find(key => CHANNELS[key] === message);
    if (!key) return console.error(`Couldn't find a channel for the request ${message}`);

    win.webContents.send(CHANNELS[key], response);
  });

  socket.on("connect", () => console.info("Connected!"));
  
  socket.on("end", () => console.warn("Connection closed on remote side"));
  
  socket.on("timeout", () => console.warn("Connection timed out!"));

  socket.on("error", (err) => console.error(err));
  
  socket.on("close", () => console.info("Disconnected!"));

  return {
    socket: socket,
    send: (message, data, broadcast) => socket.write(`${JSON.stringify({
      message: message,
      data: `${JSON.stringify(data)}`,
      broadcast: broadcast
    })}\n`)
  };
}

// function send(message, data = "", timeout = 5000) {
//   return new Promise((resolve, reject) => {
//     let timer;

//     let payload = {
//       message: message,
//       data: `${JSON.stringify(data)}`
//     };

//     let jsonPayload = JSON.stringify(payload);
//     socket.write(`${jsonPayload}\n`);

//     const handleResponse = res => {
//       console.log(res)
//       if (res.message === message) {
//         console.log(message)
//         if (res.error) {
//           reject(res.error);
//         }
//         clearTimeout(timer); 
//         resolve(JSON.parse(res).response);
//       }
//     };

//     socket.once('data', data => handleResponse(data, "finished"));

//     timer = setTimeout(() => {
//       reject(new Error(`Took too long to recieve a message. Timeout exceeded for ${message}`));
//       socket.removeListener("data", handleResponse);
//     }, timeout);
//   });
// }
