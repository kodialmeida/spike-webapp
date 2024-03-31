document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const userData = {
    role: document.getElementById('role').value,
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    email: document.getElementById('email').value,
    userName: document.getElementById('userName').value,
    password: document.getElementById('password').value,
    // Add other fields as necessary, aligning with your application's user model
  };

  // Adjust the URL to match your API endpoint for user creation
  fetch('/api/user/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Include other necessary headers, like authentication tokens if needed
    },
    body: JSON.stringify(userData),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      alert('User created successfully!');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Error creating user.');
    });
});
