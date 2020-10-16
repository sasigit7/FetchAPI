fetch('people.json')
  .then(response => {throw 404})
  .then(json => {
      json.forEach( person => {
          const div = document.createElement('div');
          div.innerHTML = `${person.name} is ${person.age}`;
        document.body.appendChild(div);  
      })
  }).catch(err => console.log(err)); // Error Handling Using Catch

  