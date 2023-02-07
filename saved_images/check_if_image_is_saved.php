<?php

    require('../mysql.php');

    session_start();

        
    $username = $_SESSION["username"];
    
    $image_url = $_COOKIE["image_url"];

    echo($image_url);


    if($conn->connect_error){
    
        die("Connection failed: " . $conn->connect_error);

    }

    $select_query = mysqli_query($conn,"SELECT * FROM images WHERE image_url='$image_url' AND username='$username'");
        $num_rows = mysqli_num_rows($select_query);
        if ($num_rows > 0) {

                setcookie("image_url", NULL, time()-(60*60*24*7));
                http_response_code(400); exit;
                
        }

    // $select_query = mysqli_query($conn,"SELECT * FROM images WHERE image_url='$image_url'");

    // if (isset($image_url) && !empty($image_url)){
        
    //     http_response_code(400); exit;
    //     setcookie("image_url", NULL, time()-(60*60*24*7));
    // } else {
    //     http_response_code(200); exit;
    // }



?>