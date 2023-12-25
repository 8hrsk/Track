const mainBody = new Template();

mainBody.create(
    {
        html: `
            <div id="${mainBody.id}">
            
            </div>
        `
    },

    {
        css: `
            #${mainBody.id} {
                display: flex;
            }
        `
    },

    {
        js: `null;`
    }
)