const header = () => {
    return (`
    <header>
        <nav class="nav">
            <ul>
                <li><input type="text" placeholder="Name your task"/></li>
                <li>${timer()}</li>
            </ul>
        </nav>
    </header>
    `)
}