<?php


    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $username = $_POST['username'];
    $password = $_POST['username_password'];

    //Database connection
    $conn = new mysqli('localhost', 'sqluser', 'Warum1-und', 'wollpaperz');
    if($conn->connect_error){
        die('Connection Failed');
    } else {
            header('Access-Control-Allow-Origin: *');

            header('Access-Control-Allow-Methods: GET, POST');

            header("Access-Control-Allow-Headers: X-Requested-With");
        $stmt = $conn->prepare('insert into users(firstname, lastname, username, username_password)
        values(?, ?, ?, ?)');
        $stmt->bind_param("sssssi", $firstname, $lastname, $username, $password);
        $stmt->execute();
        echo 'registered successfully';
        $conn->close();
        $stmt->close();
    }

    // echo "<h1> Hello World </h1>";



?>