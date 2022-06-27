const { Router } = require('express');

let eventRouter = Router()
  .get('/', (req, res) => {
    res.status(200).json({hello: 2});
  });

module.exports = { eventRouter };