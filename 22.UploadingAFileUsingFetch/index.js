// Create a variable for the form element. Then create an event listener for
// submit. Prevent the default behavior. Post a FormData object to
// https://httpbin.org/post, then console log the JSON response.

const uploadForm = document.getElementById('uploadForm');
uploadForm.addEventListener('submit', function(e) {
  e.preventDefault();

  uploadFile(this);
});

const uploadFile = async (data) => {
    const formData = new FormData(data);
    const options = {
        method: 'POST',
        body: formData
    }

const uploadPromise = await fetch('https://httpbin.org/post', options);
if(uploadPromise.ok) {
    const uploadResponse = await uploadPromise.json();
    console.log(uploadResponse.files);
} else {
    console.error(uploadPromise.status);
}
}