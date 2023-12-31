const validateElement = (element) => {
    if (
        !element ||
        element === null ||
        element === undefined ||
        element == ''
    ) {
        return false
    }

    return true
}

const useElement = (element) => {
    if (validateElement(element) === true) {
        const include = document.createElement('script');
        include.src = `../templates/${element}.js`;

        document.body.prepend(include);

        return true
    }

    return false
}

const assignElements = (elementsArray, callback) => {
    if (typeof elementsArray !== 'object') {
        console.error(`Invalid data given`);
        return false
    }

    let assignedElements = [];

    elementsArray.forEach((element) => {
        const includeResult = useElement(element);

        if (includeResult === false) {
            console.error(`Element "${element}" not found.`);
        }

        if (includeResult === true) {
            assignedElements.push(element);
        }
    })

    callback(assignedElements);
}

const call = (element) => {
    document.body.insertAdjacentHTML('beforeend', element);
}

const getLoadTime = (elements) => {
    return elements.length * 75
}

const renderScript = (script) => {
    const scriptToAppend = document.createElement('script');
    scriptToAppend.innerHTML = script;

    document.body.appendChild(scriptToAppend);
}