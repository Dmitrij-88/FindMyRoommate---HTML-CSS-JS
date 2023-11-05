
//registration page display and function
document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Perform registration logic here (e.g., send data to a server)
    // For this example, let's just switch to the login form.
    document.getElementById("reg-form-container").style.display = "none";
    document.getElementById("login-form-container").style.display = "block";
});

//login page display and function
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Perform login logic here (e.g., send data to a server)
    alert("Login successful"); // Replace with actual login logic
    // You can redirect to a different page after successful login if needed.
    document.getElementById("login-form-container").style.display = "none";
    document.getElementById("reg-form-container").style.display = "none";
    document.getElementById("dash-form-container").style.display = "block";
});

//dashboard display and function
document.getElementById("logout-button").addEventListener("click", function() {
    // Perform logout logic here (e.g., clearing session data)
    // For this example, we'll simulate a logout by redirecting to the login page.
    document.getElementById("login-form-container").style.display = "block";
    document.getElementById("reg-form-container").style.display = "none";
    document.getElementById("dash-form-container").style.display = "none";
});

