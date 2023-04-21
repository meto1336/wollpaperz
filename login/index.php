<?php
session_start();
if(!isset($_SESSION["username"])){
  header("Location: index.php");
  exit;
}
 ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&family=Rubik+Bubbles&family=VT323&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js"></script>


    <title>Discover Wollpaperz</title>
</head>
<body>


        <div id="loader">
        
        </div>

    <nav class="navbar">
        <div class="navbar-header"><a href="index.php">wollpaperz</a>

            <a href="#" class="toggle-button">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
           </a>
        </div>
        
        <input type="search" id="search-input"  placeholder="Search for images" oninput="search_request()"/>



        <div class="navbar-links">
            <ul>
                <li>
                    <a href="">
                    <?php echo $_SESSION["username"];?>
                    </a>
                <ul>
                    <li><a id="saved_image" href="../saved_images/photo_collection.php">Collection</a></li>
                    <li><a id="logout" href="logout.php">Logout</a><li>
                </ul>  
                </li>
               
            </ul>
        </div>
    </nav>

    <div id="no_pics">No Pictures found</div>
    

    <div id="popup-image">
        <div id="white-background">
            <div id="popup-buttons">
                    <button id="download_button">
                        Download
                    </button>    
                    <a href="#" onclick="save_photo_to_db()"><button id="save_image_button">Save</button></a>
                    <div class="attribution">
                        <span>Photographer</span>
                        <br>
                        <a href="" id="photographer"></a> 
                    </div>
            </div>
        </div>
        <button id="close_image"></button>
    </div>

    <div id="collection-container-background">
        <div id="collection-window">
            <span id="collection-text">Add photo to collection</span>
        <div id="collection">
            <div class="collections">
                <div id="add_collection">

                </div>
            </div>
            <div class="collections">
                <div id="add_collection">
                    
                </div>
            </div>
            <div class="collections">
                <div id="add_collection">
                    
                </div>
            </div><div class="collections">
                <div id="add_collection">
                    
                </div>
            </div>
        </div>
            
        </div>
        <button id="close-collection"></button>
    </div>

   

    <div class="image-container">
       
    </div>


    <div id="page">
        <p class="page_number">Page 1</p>
        <button class="previous_page"><</button>
        <button class="next_page">></button>
    </div>
    <br>
    <footer>
        <span>
            API provided by <a href="https://www.pexels.com/">Pexels</a>
        </span>
    </footer>
    

</body>

<script src="../main.js"></script>
<script src="../toggleMenu.js"></script>
<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script> -->
</html>