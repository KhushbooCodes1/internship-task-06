const container = document.getElementById("user-container");
const loader = document.getElementById("loader");

// Fetch API function
function fetchUsers() {
    loader.classList.remove("hidden");
    container.innerHTML = "";

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            loader.classList.add("hidden");
            displayUsers(data);
        })
        .catch(error => {
            loader.classList.add("hidden");
            container.innerHTML = "<p>Error loading data</p>";
            console.error(error);
        });
}

// Display users
function displayUsers(users) {
    users.forEach(user => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>City:</strong> ${user.address.city}</p>
        `;

        container.appendChild(card);
    });
}