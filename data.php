<?php
header('Content-Type: application/json');

// Database credentials
$host = "127.0.0.1";
$port = 3306;
$socket = "";
$user = "root";
$password = "Sre1972mz@MySql";
$dbname = "matexe";
// Create connection
$conn = new mysqli($host, $user, $password, $dbname, $port, $socket);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

// SQL query to select data
$sql = "SELECT Year, Name, Status, Program, Interest, Email, Image FROM executives"; // Replace 'users' and columns with your table and columns
$result = $conn->query($sql);

$data = array();

if ($result->num_rows > 0) {
    // Fetch data row by row and add to array
    while ($row = $result->fetch_assoc()) {
        // If image is stored as a BLOB, encode it to base64 for display
        $row['Image'] = 'data:image/jpeg;base64,' . base64_encode($row['Image']);
        array_push($data, $row);
    }
}

// Encode the array to JSON and output it
echo json_encode($data);

// Close connection
$conn->close();
