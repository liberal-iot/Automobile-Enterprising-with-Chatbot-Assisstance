<?php
// Database connection
$servername = "localhost"; // Change this if your database is on a different server
$username = "root"; // Your MySQL username
$password = ""; // Your MySQL password
$database = "flrr"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$username = $_POST['username'];
$password = $_POST['password'];

// Hash the password (You should always hash passwords for security)
// $hashed_password = md5($password);

// Prepare SQL statement
$sql = "SELECT * FROM admins WHERE username='$username' AND password='$password'";
$result = $conn->query($sql);

// Check if the query returned any rows
if ($result->num_rows > 0) {
    // Admin login successful
    // Redirect to admin dashboard or perform any other action
    header("Location: admin_dashboard.php");
    exit();
} else {
    // Admin login failed
    // Redirect back to login page or display an error message
    header("Location: index.html?error=1");
    exit();
}

// Close connection
$conn->close();
?>
