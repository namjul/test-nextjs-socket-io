const socketIO = require("socket.io");

setTimeout(() => {
  socketIO(8089);
}, 0); // work when setting to 1000

module.exports = {
  reactStrictMode: true,
};
