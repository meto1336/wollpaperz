<?php
$host = "localhost";
$name = "wollpaperz";
$user = "root";
$passwort = "password";
try{
    $conn = mysqli_connect($host, $user, $passwort, $name);
} catch (Exception $e){
    echo "SQL Error: ".$e->getMessage();
}
 ?>
