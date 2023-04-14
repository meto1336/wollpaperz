

<?php


        require('../mysql.php');



        session_start();
    
       
        $username = $_SESSION["username"];
    
        $image_url = $_COOKIE["image_url"];


        if($conn->connect_error){
    
            die("Connection failed: " . $conn->connect_error);
    
        }
    
    
        $select_query = mysqli_query($conn,"SELECT id from accounts WHERE username='$username'");
        $num_rows = mysqli_num_rows($select_query);
        if ($num_rows == 0) {

                http_response_code(400); exit;
                
        } else {
            $row = mysqli_fetch_assoc($select_query);
            $id = $row['id'];
            $insert_query = "INSERT INTO images (image_url, account_id)
            VALUES ('$image_url', '$id')";
    
                if ($conn->query($insert_query) === TRUE) {
    
                    setcookie("image_url", NULL, time()-(60*60*24*7));

                } else {
                    echo "Error: " . $insert_query . "<br>" . $conn->error;
                }
        
            }
    
        $conn->close();

    



?>