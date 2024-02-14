// Create an Axios instance with the base URL
const axiosInstance = axios.create({
    baseURL: 'https://crudcrud.com/api/7ff3fe11b7914bf29f5904a8a7bc5ed6'
});

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Get form input values
    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const car = document.getElementById('carSelect').value;

    // Create user details object
    const userDetails = {
        name,
        email,
        phone,
        car
    };

    // Send user details to the server for booking
    axiosInstance.post('/bookBus', userDetails)
        .then(response => {
            // Upon successful booking, add the user to the list
            addUserToList(response.data);
        })
        .catch(error => {
            console.error('Error:', error);
        });

    // Reset the form after submission
    event.target.reset();
}

// Function to add a booked user to the list
function addUserToList(user) {
    const list = document.querySelector('.userDetails');

    // Create list item for the user
    const listItem = document.createElement('li');
    listItem.textContent = `${user.name} - ${user.email} - ${user.phone} - ${user.car}`;

    // Append the list item to the user details list
    list.appendChild(listItem);
}

// Add event listener to the form for form submission
document.querySelector('form').addEventListener('submit', handleFormSubmit);

// Function to load existing booked users when the page loads
function loadBookedUsers() {
    axiosInstance.get('/bookBus')
        .then(response => {
            // Loop through the list of booked users and add them to the list
            response.data.forEach(user => {
                addUserToList(user);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
// Function to filter bookings based on the selected bus
function filterBookings() {
    const selectedBus = document.getElementById('busSelect').value;
    const bookings = document.querySelectorAll('.userDetails li');

    bookings.forEach(booking => {
        const bookingInfo = booking.textContent.split(' - ');
        const bookingBus = bookingInfo[3];

        if (selectedBus === 'all' || selectedBus === bookingBus) {
            booking.style.display = 'block';
        } else {
            booking.style.display = 'none';
        }
    });
}
function addUserToList(user) {
    const list = document.querySelector('.userDetails');

    // Check if all required fields are present
    if (user.name && user.email && user.phone && user.car) {
        // Create list item for the user
        const listItem = document.createElement('li');
        listItem.textContent = `${user.name} - ${user.email} - ${user.phone} - ${user.car}`;

        // Append the list item to the user details list
        list.appendChild(listItem);
    }
}

// Call the function to load existing booked users when the page loads
loadBookedUsers();