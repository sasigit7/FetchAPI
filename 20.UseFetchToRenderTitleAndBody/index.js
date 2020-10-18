// Use Fetch with this URL, https://jsonplaceholder.typicode.com/posts/1, to get a single blog post and render the blog title and body to the page.

// Using regular fetch method to output the result in console.
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => {
     // console.log(json);
      const title = json.title;
     // console.log(title);
      const body = json.body;
     // console.log(body);
    console.log(`The title of the blog post is "${title}" and the body to the page is "${body}".`);
  });
  
  // Displaying fetched data to the browser using async and await
  const getPost = async() => {
      const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const post = await postResponse.json();
      //console.log(post);
      const html = `
         <h1>The title of the blog post is "${post.title}"</h1>
         <p>The body of the blog post is "${post.body}".</p>
      `;
      document.body.innerHTML = html;
  }
  
  getPost();
  