<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $place = htmlspecialchars($_POST['place']);
    $amountpax = htmlspecialchars($_POST['amountpax']);
    $dateFrom = htmlspecialchars($_POST['dateFrom']);
    $dateTo = htmlspecialchars($_POST['dateTo']);
    $details = htmlspecialchars($_POST['details']);

    // Prepare email
    $to = "your_email@example.com"; // Replace with your email
    $subject = "New Travel Inquiry from $name";
    $message = "
        Name: $name\n
        Email: $email\n
        Phone: $phone\n
        Destination: $place\n
        Number of Travellers: $amountpax\n
        Travel Dates: From $dateFrom to $dateTo\n
        Additional Details:\n$details
    ";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you, your message has been sent.";
    } else {
        echo "Sorry, your message could not be sent.";
    }
} else {
    echo "Invalid request.";
}
?>
