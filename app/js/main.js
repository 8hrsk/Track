const elements = [
    'timerButton',
    'timer',
    'headerContainer',
    'headerInput',
    'mainHeader',
    'mainBody'
];

const loader = new Loader;

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let globalScript = '';

assignElements(elements, async (assignedElements) => {
    loader.show()
    await sleep(getLoadTime(elements));
    
    assignedElements.forEach((element) => {
        console.log(element);
        globalScript += eval(element).getRawScript();
    })

    await sleep(getLoadTime(elements));
    loader.hide();

    console.log('All elements assigned');
    call(mainHeader.use());
    call(mainBody.use());
    renderScript(globalScript);
});