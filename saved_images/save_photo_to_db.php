

<?php


    function save($success){
        require('../mysql.php');



        session_start();
    
       
        $username = $_SESSION["username"];
    
        $image_url = $_COOKIE["image_url"];
    
    
        if($conn->connect_error){
    
            die("Connection failed: " . $conn->connect_error);
    
        }
    
    
        $select_query = mysqli_query($conn,"SELECT * FROM images WHERE username='$username' AND image_url='$image_url'");
        $num_rows = mysqli_num_rows($select_query);
        if ($num_rows > 0) {
            $success = "<script>
                    alert('You already have this photo in your collection');
                </script>";
            // echo "<script type='text/javascript'>window.location.href='../login/index.php';</script>";
            
        } else {
            $insert_query = "INSERT INTO images (image_url, username)
            VALUES ('$image_url', '$username')";
    
                if ($conn->query($insert_query) === TRUE) {
                    echo "<script>
                    alert('Photo saved successfully');
                </script>";
                // echo "<script type='text/javascript'>window.location.href='../login/index.php';</script>";
    
                    setcookie("image_url", NULL, time()-(60*60*24*7));
                    //unset($_COOKIE["image_url"]);
                } else {
                    echo "Error: " . $insert_query . "<br>" . $conn->error;
                }
        
            }
    
        $conn->close();
    }


    



?>