// Successful Promise: 
function successfulPromise() {
    return new Promise((resolve, reject) => {
      resolve('Success');
    });
} 

(async function() {
    try {
     const result = await successfulPromise();
     console.log(result);
    } catch(err) {
     console.log(err);
    }
})(); // Success

// Rejected Promise: 
function rejectedPromise() {
    return new Promise((resolve, reject) => {
        reject('Rejected'); // Rejected
    });
}

(async function() {
    try {
     const result = await rejectedPromise();
    } catch(err) {
        console.log(err);
    }
})();

// Pending Promise:
function pendingPromise() {
    return new Promise((resolve, reject) => {
        const interval = setInterval(() => console.log('pending'), 1000);
        setTimeout(() => {
            clearInterval(interval);
            resolve('Success after 4 seconds')
        }, 4000)
    })
}

(async function() {
    try {
      const result = await pendingPromise();
      console.log(result);
    } catch(err) {
        console.log(err);
    }
})();


