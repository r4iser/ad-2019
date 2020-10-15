const express = require('express');

const routes = express.Router();

routes.post('/amigosPush', (req, res) => {
    return res.json(req.body);
});

module.exports = routes;