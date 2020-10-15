const express = require('express');

const app = express();

app.use(express.json());
app.post('/amigosPush', (req, res) => {
    return res.json(req.body);
});


app.listen(3000);