const express = require('express');
const app = express();
const TimerRouter = require('./server/Router/TimerRouter')
const PORT = 3001;

app.use(express.static('app'));
app.use(express.json())
app.use('/timer', TimerRouter);

app.get('/', (req, res) => {
    res.render('./app/index.html');
})

app.listen(PORT, () => {
    console.log(`listening http://localhost:${PORT}`);
})