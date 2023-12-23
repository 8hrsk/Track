const mainHeader = new Template();

mainHeader.create(
    {
        html: `
            <header>
                <ul>
                    <li>
                        ${headerInput.use()}
                    </li>
                    <li>
                        ${headerContainer.use()}
                    </li>
                </ul>
            </header>
        `
    },

    {
        css: `
            header {
                background-color: aliceblue;
                height: 100px;
                display: flex;
                align-items: center;
            }

            header ul {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                list-style: none;
                padding: 1rem;
            }

            header ul li {
                display: flex;
                align-items: center;
            }
        `
    },

    {
        js: `
            null
        `
    }
)