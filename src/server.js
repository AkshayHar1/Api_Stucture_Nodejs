const express = require("express");
const { nodeenv, port } = require("./config/env-vars");

const server = express();
server.use(express.json());

const router = require("../src/api/routes/index");
server.use(router);

server.listen(port, () => {
  console.log(`server listening to ${port}`);
});
