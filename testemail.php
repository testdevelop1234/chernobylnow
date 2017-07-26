<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

$to = 'mdemchuk22@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
    $message = 'Hello etc';

    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
    $headers .= 'From: Website <admin@example.com>' . "\r\n";
    if(!mail($to, 'User Registration', $message, $headers)) {
      
      echo "FALSE";
      
    }

echo phpinfo();