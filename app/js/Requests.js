const startTimer = (timerName, date) => {
    axios.post('/timer/start', {
        name: timerName,
        date: date
    })
    .then((response) => {
        console.log(response);
    })
}