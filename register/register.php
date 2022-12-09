<?php
	

	//Database connection
	$conn = new mysqli('localhost','root','Warum1-und','wollpaperz');

	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {

            if(isset($_POST['submit'])){    
                $firstName = $_POST['firstname'];
                $lastName = $_POST['lastname'];
                $username = $_POST['username'];
                $password = $_POST['password'];

    
                $stmt = $conn->prepare("insert into users(firstname, lastname, username, username_password) values(?, ?, ?, ?)");
                $stmt->bind_param("ssss", $firstName, $lastName, $username, $password);
                $execval = $stmt->execute();
                echo '<script>showAlert();window.setTimeout(function () {HideAlert();},3000);</script>';  
                echo "<meta http-equiv='refresh' content='0;url=registered_message.html'>";
                $conn->close();
                $stmt->close();
            }

        }

        // if(!isset($firstName) || trim($firstName) == '' || !isset($lastName) || trim($lastName) == '' || !isset($username) || trim($username) == '' || !isset($password) || trim($password) == '') {
            
        // }

		
	


	
?>

</body>
</html>

