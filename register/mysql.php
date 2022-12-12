<?php
$host = "localhost";
$name = "wollpaperz";
$user = "root";
$passwort = "Warum1-und";
try{
    $mysql = new PDO("mysql:host=$host;dbname=$name", $user, $passwort);
} catch (PDOException $e){
    echo "SQL Error: ".$e->getMessage();
}
 ?>
