const headerContainer = new Template();

headerContainer.create(
    {
        html: `
            <div id="${headerContainer.id}">
                ${timer.use()}
                ${timerButton.use()}
            </div>
        `
    },

    {
        css: `
            #${headerContainer.id} {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        `
    },

    {
        js: `
            null;
        `
    }
)