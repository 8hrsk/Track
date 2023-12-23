const headerInput = new Template();

headerInput.create(
    {
        html: `
            <input type="text" id="${headerInput.id}" placeholder="Name your task...">
        `
    },

    {
        css: `
            #${headerInput.id} {
                width: auto;
                font-size: 45px;
                border: 1px solid cyan;
                padding: 0.5rem;
                border-radius: 5px;
                color: gray;
            }
        `
    },

    {
        js: `
            null;
        `
    }
)