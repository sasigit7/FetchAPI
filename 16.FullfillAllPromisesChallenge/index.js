const startTransaction = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, 5000)
    })
}

const initialPayment = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, 1000)
    })
}

const launchVerification = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, 100)
    })
}

const performance = async (label) => {
    const date = new Date();
    console.log(label, `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

(async function() {
    try {
        await performance('Start');
        const result = await Promise.all([startTransaction(), initialPayment(), launchVerification()]);
        await performance('End');
        console.log(result);
    } catch(err) {
        console.log(err);
    }
})();


