<?php
// Establish connection to MySQL database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "flrr";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind SQL statement
$stmt = $conn->prepare("INSERT INTO vehicle_information (Vehciles_Name, Registration_Year, Make, Model, Trim, KMs_Driven, No_Of_Owner, Transmission, Fuel_Type, Body_Type, Registration, Mileage, Locatedin, images) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

// Bind parameters
$stmt->bind_param("ssssssisssssss", $vehicleName, $registrationYear, $make, $model, $trim, $kmDriven, $numOwner, $transmission, $fuelType, $bodyType, $registration, $mileage, $Location, $targetFile);

// Retrieve form data
$vehicleName = $_POST['vehicleName'];
$registrationYear = $_POST['registrationYear'];
$make = $_POST['make'];
$model = $_POST['model'];
$trim = $_POST['trim']
$kmDriven = $_POST['kmDriven'];
$numOwner = $_POST['numOwner'];
$transmission = $_POST['transmission'];
$fuelType = $_POST['fuelType'];
$bodyType = $_POST['bodyType'];
$registration = $_POST['registration'];
$mileage = $_POST['mileage'];
$Location = $_POST['Location'];

// Upload image
$targetDir = "uploads/";
$targetFile = $targetDir . basename($_FILES["carImage"]["name"]);

if (move_uploaded_file($_FILES["carImage"]["tmp_name"], $targetFile)) {
    // File uploaded successfully
    $targetFile = basename($_FILES["carImage"]["name"]);
} else {
    // File upload failed
    echo "Sorry, there was an error uploading your file.";
}

// Execute prepared statement
if ($stmt->execute()) {
    echo "Car details uploaded successfully!";
} else {
    echo "Error: " . $stmt->error;
}

// Close statement and connection
$stmt->close();
$conn->close();
?>
