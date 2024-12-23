// Responsive Navigation Menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');

    // Animate Burger Lines
    burger.classList.toggle('toggle');
});

// Handle form submission
document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const guests = document.getElementById("guests").value;

    // Display confirmation message
    const confirmationMessage = `
        Thank you, <strong>${name}</strong>!<br>
        Your booking for <strong>${guests} guest(s)</strong> from 
        <strong>${checkin}</strong> to <strong>${checkout}</strong> has been confirmed.<br>
        A confirmation email will be sent to <strong>${email}</strong>.
    `;
    document.getElementById("confirmationMessage").innerHTML = confirmationMessage;

    // Show confirmation section
    document.getElementById("confirmation").classList.remove("hidden");

    // Clear form
    document.getElementById("bookingForm").reset();
});