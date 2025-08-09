<?php
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
$fullname = $_POST['fullname'];
$email = $_POST['email'];
$password = $_POST['password']; // Note: This should be hashed before storing in a real-world scenario
$phone = $_POST['phone'];

// Prepare SQL statement
$sql = "INSERT INTO users (fullname, email, password, phone) VALUES ('$fullname', '$email', '$password', '$phone')";

// Execute SQL statement
if ($conn->query($sql) === TRUE) {
    header("Location: successful.ht ml");
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close database connection
$conn->close();
?>
