const scriptURL = 'https://script.google.com/macros/s/AKfycbxhjtjFU5cXbREDCYri_kd6QarNNVz6skQE_RBBoRjBz2y1xjIQvjO8nuNtiN1KPg3ghA/exec';
const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const selectedEvent = document.getElementById("event").value;

    if (name === "" || email === "" || number === "" || selectedEvent === "") {
        alert("Please fill in all fields.");
        return;
    }

    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify({
            name: name,
            email: email,
            number: number,
            event: selectedEvent
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        document.getElementById("confirmationMessage").textContent = "Registration successful!";
        form.reset();
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong.");
    });
});

