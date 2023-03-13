<?php
$host = "localhost";
$name = "wollpaperz";
$user = "root";
$password = "password";

try {
    $dsn = "mysql:host=$host;dbname=$name";
    $conn = new PDO($dsn, $user, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: ".$e->getMessage();
}
?>
