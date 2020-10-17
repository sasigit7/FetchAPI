const randomBool = Boolean(Math.round(Math.random())); // returns either 0 or 1

const getHero = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          if(randomBool) {
              resolve('Success: Superman is here');
          } else {
              reject('Failure: Superman is not here!');
          }
      }, 4000);
    });

}

(async function() {
    try {
      const result = await getHero();
      console.log(result);
    } catch(err) {
        console.log(err);
    }
})();