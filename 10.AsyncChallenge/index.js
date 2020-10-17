// Grab the action attribute from button and add an event listener with click and a callback function 
document.getElementById("action").addEventListener("click", () => {
    // Declare and assign a remote api link
    const userApi = 'https://randomuser.me/api/';
    
    // Fetch user API
    fetch(userApi).then(response => response.json()).then(json => {
         console.log(json); // Outputs the results of the api data
    // Store random first name in a variable called firstUser
        const firstUser = json.results[0].name.first;
        console.log(firstUser); // Outputs the first name of the first user
   // Call user API again, after finish calling first one
    fetch(userApi).then(response => response.json()).then(json => {
   // Store random first name in a variable called secondUser
        const secondUser = json.results[0].name.first;
        console.log(secondUser); // Outputs the first name of the second user

     //console log firstUser and secondUser as friends
        console.log(`${firstUser} and ${secondUser} are friends.`);
    })    
    })

});



