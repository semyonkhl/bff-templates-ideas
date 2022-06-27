const { Router } = require("express");

const { userRouter } = require("./users.js");
const { eventRouter } = require("./events.js");

let api = Router()
    .use("/users", userRouter)
    .use("/events", eventRouter);

module.exports = { api };
