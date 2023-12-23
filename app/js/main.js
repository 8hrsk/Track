const elements = [
    'timerButton',
    'timer',
    'headerContainer',
    'headerInput',
    'mainHeader',
];

const loader = new Loader();

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

assignElements(elements, async () => {
    loader.show()
    await sleep(getLoadTime(elements));
    loader.hide();
    console.log('All elements assigned');
    call(mainHeader.use());
});    