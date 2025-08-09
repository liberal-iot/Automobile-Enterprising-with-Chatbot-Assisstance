
<?php
session_start();

// Establish database connection (Replace with your actual database credentials)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "flrr";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch form data
$email = $_POST['email'];
$password = $_POST['password'];

// Prepare SQL statement
$sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // User exists, set session variables and redirect
    $_SESSION['email'] = $email;
    header("Location: slide.html"); // Redirect to dashboard page
} else {
    // User does not exist or incorrect credentials
    echo "Invalid email or password";
}

// Close database connection
$conn->close();
?>
