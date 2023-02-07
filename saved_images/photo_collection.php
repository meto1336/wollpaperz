<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="photo_collection.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins&family=Rubik+Bubbles&family=VT323&display=swap" rel="stylesheet">
    <title>Photo Collection</title>
</head>

<body>
    <h1>Personal Photo Collection</h1>

    

    
                <?php

            require('../mysql.php');

            session_start();

            $username = $_SESSION['username'];

            $query = mysqli_query($conn,"SELECT image_url FROM images WHERE username='$username'");

            //echo($query);

            if(mysqli_num_rows($query) == 0){
                echo "<span> Nothing to see here <span>";
            } else {

                echo "<div id='image_collection'></div>
                ";
                

                while($row = mysqli_fetch_assoc($query)){

                
                    $image = $row['image_url'];
                    echo "<script> 
                    
                    var collection = document.getElementById('image_collection')
                    var image_container = document.createElement('div');
                    image_container.classList.add('image_container')
                    collection.append(image_container)
                    var image = document.createElement('img')
                    image.src = '$image'
                    image_container.append(image)


                    </script>";
                    //             
                    //       ";
    
    
                }

            }

            



            ?>
    

</body>
</html>
