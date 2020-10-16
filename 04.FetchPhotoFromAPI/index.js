fetch('https://jsonplaceholder.typicode.com/photos/1')
  .then(response => response.json())
  .then(json => {
      const img = document.createElement('img');
      img.src = json.url;
      document.body.appendChild(img);
  })