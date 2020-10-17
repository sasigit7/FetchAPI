// Error Handling Using catch 
document.getElementById("x").addEventListener("click", () => {
  // Extra i in api leads to Syntax Error
  const userAPI = 'https://randomuser.me/apii';

  fetch(userAPI).then(response => response.json()).then(json => {
      console.log('Promise Chaining:', json.results[0].name.first);
})
.catch(err => console.log(err)); // SyntaxError: Unexpected token N in JSON at position 0  (index.js:9)
});


// Error Handling Using try catch block 
document.getElementById("y").addEventListener("click", async () => {
    // Extra t in https Leads to a Type Error
  const userApi = 'htttps://randomuser.me/api';
 
    try {
      const response = await fetch(userApi);
      const json = response.json();
      console.log("Async/Await", json.results[0].name.first);
    } catch(err) {
        console.log(err); // TypeError: Failed to fetch (index.js:20)
    }
});
