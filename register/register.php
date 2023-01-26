<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Register Account</title>
    <link rel="stylesheet" href="register.css">
  </head>
  <body>
    <?php
    if(isset($_POST["submit"])){
      require("mysql.php");
      $stmt = $mysql->prepare("SELECT * FROM accounts WHERE USERNAME = :user"); //Username überprüfen
      $stmt->bindParam(":user", $_POST["username"]);
      $stmt->execute();
      $count = $stmt->rowCount();
      if($count == 0){
        $count = $stmt->rowCount();
        if($count == 0){
          if($_POST["pw"] == $_POST["pw2"]){
            //User anlegen
            $stmt = $mysql->prepare("INSERT INTO accounts (USERNAME, PASSWORD) VALUES (:user, :pw)");
            $stmt->bindParam(":user", $_POST["username"]);
            $hash = password_hash($_POST["pw"], PASSWORD_BCRYPT);
            $stmt->bindParam(":pw", $hash);
            $stmt->execute();
            header("location: registered.html");
          } else {
            echo "<h2>The password fields do not match</h2>";
          }
        }
      } else {
        echo "<h2>username is already in use</h2>";
      }
    }
     ?>
    <h1>Register</h1>
    <form action="register.php" method="post">
      <input type="text" name="username" placeholder="Username" maxlength="10" required><br>
      <input type="password" name="pw" placeholder="Password" required><br>
      <input type="password" name="pw2" placeholder="Repeat Password" required><br>
      <button type="submit" name="submit">Create Account</button>
    </form>
    <br>
    <a href="../login/login.php">Do you already have an account?</a>
  </body>
</html>
