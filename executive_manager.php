<?php
// --- Configuration & Database Connection Details ---
$host = "127.0.0.1";
$dbname = "matexe";
$username = "root";
$password = "Sre1972mz@MySql";
$conn = null;

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // In a real application, you might log this error rather than echo it
    die("Database connection failed: " . $e->getMessage());
}

// --- Logic Dispatcher ---

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['action']) && $_POST['action'] == 'submit_executive') {
    submitExecutive($conn);
} elseif ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET['action']) && $_GET['action'] == 'view_image' && isset($_GET['id'])) {
    viewImage($conn);
} else {
    // Optional: Handle other requests or show a default page
    // echo "Welcome to the Executive Manager endpoint.";
}

// --- Function Definitions ---

/**
 * Handles the POST request to save new executive data and the BLOB image.
 */
function submitExecutive($conn)
{
    // Check if file was uploaded without errors
    if (isset($_FILES["ImageFile"]) && $_FILES["ImageFile"]["error"] == 0) {

        $imageData = file_get_contents($_FILES["ImageFile"]["tmp_name"]);
        $imageType = $_FILES["ImageFile"]["type"];

        try {
            $stmt = $conn->prepare("INSERT INTO executives (name, status, program, interest, email, image_type, Image) VALUES (?, ?, ?, ?, ?, ?, ?)");

            $stmt->execute([
                $_POST['Name'],
                $_POST['Status'],
                $_POST['Program'],
                $_POST['Interest'],
                $_POST['Email'],
                $imageType,
                $imageData
            ]);

            echo "New record created successfully with BLOB image.";
        } catch (PDOException $e) {
            echo "Database Error during submission: " . $e->getMessage();
        }
    } else {
        echo "Error in file upload.";
    }
}

/**
 * Handles the GET request to retrieve and display a BLOB image by ID.
 */
function viewImage($conn)
{
    $id = filter_var($_GET['id'], FILTER_SANITIZE_NUMBER_INT);

    if (!$id) {
        header("HTTP/1.0 400 Bad Request");
        echo "Invalid ID.";
        return;
    }

    try {
        $stmt = $conn->prepare("SELECT image_type, image_data FROM student_executives WHERE id = ?");
        $stmt->execute([$id]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($row) {
            // Set the appropriate content header
            header("Content-type: " . $row['image_type']);
            // Output the raw image data
            echo $row['image_data'];
        } else {
            header("HTTP/1.0 404 Not Found");
            echo "Image not found.";
        }
    } catch (PDOException $e) {
        header("HTTP/1.0 500 Internal Server Error");
    }
}
