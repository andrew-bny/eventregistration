const scriptURL = 'https://script.google.com/macros/s/AKfycbxhjtjFU5cXbREDCYri_kd6QarNNVz6skQE_RBBoRjBz2y1xjIQvjO8nuNtiN1KPg3ghA/exec';
const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const number = document.getElementById("number").value;
  const selectedEvent = document.getElementById("event").value;

  const formURL = "https://docs.google.com/forms/d/e/1FAIpQLScoXEMiCg7loBz7LiOAS-ogu7McL4SeKA3NfVroP0VO7MoyuQ/formResponse";

  const formData = new FormData();
  formData.append("entry.706879500", name);        // Replace with actual entry ID for Name
  formData.append("entry.2112021950", email);       // Replace with actual entry ID for Email
  formData.append("entry.213988092", number);      // Replace with actual entry ID for Contact Number
  formData.append("entry.1133712770", selectedEvent); // Replace with actual entry ID for Event

  fetch(formURL, {
    method: "POST",
    mode: "no-cors",
    body: formData
  })
    .then(() => {
      document.getElementById("confirmationMessage").textContent =
        "Registration successful!";
      form.reset();
    })
    .catch((error) => {
      alert("Something went wrong.");
      console.error("Error:", error);
    });
});
