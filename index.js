const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('app'));

app.get('/', (req, res) => {
    res.render('./app/index.html');
})

app.listen(PORT, () => {
    console.log(`listening http://localhost:${PORT}`);
})