<?php
$host = "localhost";
$name = "wollpaperz";
$user = "root";
$passwort = "password";
try{
    $mysql = new PDO("mysql:host=$host;dbname=$name", $user, $passwort);
} catch (PDOException $e){
    echo "SQL Error: ".$e->getMessage();
}
 ?>
