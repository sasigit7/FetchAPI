const TaskA = () => {
    return new Promise(resolve => {
        setTimeout(() => {
           resolve('a');
        }, 3000)   
    })
}

const TaskB = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('b');
        }, 2000)
    })
}

const TaskC = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('c');
        }, 10000)
    })
}

const promiseStopper = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Too Long To Complete');
        }, 1500)
    })
}

(async function() {
    try {
    const result = await Promise.race([TaskA(), TaskB(), TaskC(), promiseStopper()]);
    console.log(result);
    } catch(err) {
        console.log(err);
    }
})();


