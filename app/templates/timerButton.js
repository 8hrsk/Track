const timerButton = new Template();

timerButton.create(
    {
        html: `
            <button id="${timerButton.id}">
                <img id="${timerButton.id}image" src="../src/Start.png" alt="play button">
            </button>
        `
    },

    {
        css: `
            #${timerButton.id} {
                width: 50px;
                height: 50px;
                border: none;
            }
        `
    },

    {
        js: `
            let isActive = false;
            const timerButton${timerButton.id} = document.getElementById('${timerButton.id}');
            const timerButtonImage${timerButton.id} = document.getElementById('${timerButton.id}image');

            timerButton${timerButton.id}.addEventListener('click', () => {
                if (isActive === false) {
                    isActive = true;
                    timerButtonImage${timerButton.id}.src = '../src/Stop.png';
                    const task = document.getElementById(headerInput.id).value;
                    const now = new Date();

                    startTimer(task, now.toISOString());
                } else {
                    isActive = false;
                    timerButtonImage${timerButton.id}.src = '../src/Start.png';
                }
            })
        `
    }
)