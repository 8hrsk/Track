const elements = [
    'header',
    'timer',
];

const loader = new Loader();

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

assignElements(elements, async () => {
    console.log('All elements assigned');
    loader.show()
    await sleep(getLoadTime(elements));
    loader.hide();
    call(header())
});    