// Grab the action attribute from button and add an event listener with click and async function 
document.getElementById("action").addEventListener("click", async () => {
    
    // Declare and assign a remote api link
    const userApi = 'https://randomuser.me/api/';
    
    // Fetch first user from remote API Using await 
    const firstResponse = await fetch(userApi);
      //console.log(firstResponse); 
    const firstUserJson = await firstResponse.json();
     // console.log(firstUserJson);  
    const firstUser = firstUserJson.results[0].name.first;
     // console.log(firstUser);

     // Fetch second user from remote API Using await 
    const secondResponse = await fetch(userApi);
      //console.log(secondResponse); 
    const secondUserJson = await secondResponse.json();
     // console.log(secondUserJson);  
    const secondUser = secondUserJson.results[0].name.first;
     // console.log(secondUser);

     //console log firstUser and secondUser as friends
    console.log(`${firstUser} and ${secondUser} are friends.`);
    })    
    
    



