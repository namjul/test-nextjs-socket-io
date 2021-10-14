const socketIO = require("socket.io");

setTimeout(() => {
  socketIO(8089);
}, 0);

module.exports = {
  reactStrictMode: true,
};
