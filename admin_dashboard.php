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

// Retrieve user registration details
$user_query = "SELECT * FROM users";
$user_result = $conn->query($user_query);

// Retrieve booking details
// $booking_query = "SELECT * FROM bookings";
// $booking_result = $conn->query($booking_query);

// Retrieve inventory details
// $inventory_query = "SELECT * FROM inventory";
// $inventory_result = $conn->query($inventory_query);

// Retrieve contact form submissions
$contact_query = "SELECT * FROM contactus";
$contact_result = $conn->query($contact_query);

// Close database connection
$conn->close();
?>






<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Dashboard</title>
  <link rel="stylesheet" href="styles.css">

</head>
<style>
  body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
    }

    nav {
      background-color: #007bff;
      padding: 10px 0;
      text-align: center;
    }

    nav ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    nav ul li {
      display: inline;
      margin-right: 20px;
    }

    nav button {
      padding: 10px 20px;
      background-color: #fff;
      color: #007bff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    nav button:hover {
      background-color: #0056b3;
      color: #fff;
    }

    .container {
      width: 80%;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    h2, h3 {
      color: #333;
    }

    .section {
      margin-bottom: 40px;
      display: none;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    table, th, td {
      border: 1px solid #ddd;
    }

    th, td {
      padding: 10px;
    }

    th {
      background-color: #f2f2f2;
    }
.btn2{
  margin-left: 70px ;
 background : orange;
 color: black;
}
</style>






</head>
<body>
  <nav>
    <ul>
      <li><button onclick="showSection('user_registration')">User Registration</button></li>
      <!--<li><button onclick="showSection('booking_details')">Booking Details</button></li>-->
      <!--<li><button onclick="showSection('inventory_details')">Inventory Details</button></li>-->
      <li><button onclick="showSection('contact_form_submissions')">Contact Form Submissions</button></li>
      <button class="btn2" type="button"onclick="window.location.href = 'index.html';" >Log out</button>

    </ul>
   
  </nav>
  

  <div class="container">
    <h2>Welcome to Admin Dashboard</h2>

    <!-- User Registration Details -->
    <div class="section" id="user_registration">
      <h3>User Registration Details</h3>
      <table>
      <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
          <?php while($row = $user_result->fetch_assoc()): ?>
            <tr>
              <td><?php echo $row['fullname']; ?></td>
              <td><?php echo $row['email']; ?></td>
              <td><?php echo $row['phone']; ?></td>
            </tr>

          <?php endwhile; ?>     

    </div>

    <!-- Booking Details -->
    <div class="section" id="booking_details">
      <h3>Booking Details</h3>
      <table>
        <!-- Display booking details -->
      </table>
    </div>

    <!-- Inventory Details -->
    <div class="section" id="inventory_details">
      <h3>Inventory Details</h3>
      <table>
        <!-- Display inventory details -->
        
      <tr>
            <th>Vehicle name</th>
            <th>Registration year</th>
            <th>Make</th>
            <th>Model</th>
            <th>Trim</th>
            <th>Kms driven</th>
            <th>No. of owners</th>
            <th>Transmission</th>
            <th>Fuel-type</th>
            <th>Body-type</th>
            <th>Registration</th>
            <th>Mileage</th>
            <th>Located in</th>
          </tr>
          <?php while($row = $user_result->fetch_assoc()): ?>
            <tr>
              <td><?php echo $row['Vehicle Name']; ?></td>
              <td><?php echo $row['Registration year']; ?></td>
              <td><?php echo $row['Make']; ?></td>
            </tr>

          <?php endwhile; ?>     
      </table>
    </div>

    <!-- Contact Form Submissions -->
    <div class="section" id="contact_form_submissions">
      <h3>Contact Form Submissions</h3>
      <table>
<tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
          <?php while($row = $contact_result->fetch_assoc()): ?>
            <tr>
              <td><?php echo $row['name']; ?></td>
              <td><?php echo $row['email']; ?></td>
              <td><?php echo $row['message']; ?></td>
            </tr>
          <?php endwhile; ?>      </table>
    </div>
  </div>

  <script>
    function showSection(sectionId) {
      // Hide all sections
      var sections = document.querySelectorAll('.section');
      sections.forEach(function(section) {
        section.style.display = 'none';
      });

      // Show the selected section
      var selectedSection = document.getElementById(sectionId);
      selectedSection.style.display = 'block';
    }
  </script>
</body>
</html>










</html>
