const timer = new Template();

timer.create(
    {
        html: `
            <div id="${timer.id}">
                <div id="${timer.id}hours">00</div>
            :
                <div id="${timer.id}minutes">00</div>
            :
                <div id="${timer.id}seconds">00</div>
            </div>
        `
    },

    {
        css: `
            #${timer.id} {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 45px;
                color: gray;
            }
        `
    },

    {
        js: `
            const timerButtonTimer = document.getElementById('${timerButton.id}');

            const hours = document.getElementById('${timer.id}hours');
            const minutes = document.getElementById('${timer.id}minutes');
            const seconds = document.getElementById('${timer.id}seconds');
            
            const updateTimer = () => {
                seconds.innerHTML ++;
                if (seconds.innerHTML.length < 2) {
                    seconds.innerHTML = '0' + seconds.innerHTML
                }

                if (seconds.innerHTML == 60) {
                    minutes.innerHTML ++;
                    seconds.innerHTML = '00';
                    if (minutes.innerHTML.length < 2) {
                        minutes.innerHTML = '0' + minutes.innerHTML
                    }
                }

                if (minutes.innerHTML == 60) {
                    hours.innerHTML ++;
                    minutes.innerHTML = '00';
                    if (hours.innerHTML.length < 2) {
                        hours.innerHTML = '0' + hours.innerHTML
                    }
                }
            }

            let isTimerActie = false;

            let timerInteerval;

            timerButtonTimer.addEventListener('click', () => {
                if (isTimerActie === false) {
                    console.log(isTimerActie);
                    isTimerActie = true;
                    timerInterval = setInterval(updateTimer, 1000);
                } else {
                    console.log(isTimerActie);
                    isTimerActie = false;
                    clearInterval(timerInterval);
                    seconds.innerHTML = '00';
                    minutes.innerHTML = '00';
                    hours.innerHTML = '00';
                }
            })
        `
    }
)