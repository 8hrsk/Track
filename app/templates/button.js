const MyButton = new Template()

MyButton.create(
    {
        html: `
            <button id="${MyButton.id}">
                <div id="${MyButton.id}child">
                    Nigger
                </div>
            </button>
    `},
    {
        css: `
            #${MyButton.id} {
                border: 1px solid #000;
                border-radius: 5px;
                padding: 0.5rem;   
            }

            #${MyButton.id}child {
                color: red;
            }
        `
    },
    {
        js: `
            document.getElementById('${MyButton.id}').addEventListener('click', () => {
                console.log('click');
            });

            console.log('${MyButton.id}');
        `
    })

