<?php
$host = "localhost";
$name = "wollpaperz";
$user = "root";
$password = "toor";

$conn = mysqli_connect($host, $user, $password, $name);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
