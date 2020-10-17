////////////// Regular fetch: 
// fetch('people.json')
//   .then(response => response.json())
//   .then(json => {
//       json.forEach( person => {
//           const div = document.createElement('div');
//           div.innerHTML = `${person.name} is ${person.age}`;
//         document.body.appendChild(div);  
//       })
//   });

////////////// Fetch Using Async and Await with regular function:
//   async function getData() {
//     const response = await fetch('people.json');
//     const data = await response.json();
//     data.forEach( person => {
//       const div = document.createElement('div');
//       div.innerHTML = `${person.name} is ${person.age}`;
//       document.body.appendChild(div);
//     });
//   }
//  getData();

////////////// Fetch Using Async and Await with arrow function:
const getData = async () => {
  const response = await fetch('people.json');
  const data = await response.json();

  data.forEach(person => {
    const div = document.createElement('div');
    div.innerHTML = `${person.name} is ${person.age}`;
    document.body.appendChild(div);
  });
}
getData();