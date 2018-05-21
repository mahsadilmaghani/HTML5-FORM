<!-- thank you page -->
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div class="container">
    <div class="welcome">
      <h1>Welcome <?php echo $_POST["firstname"]; ?>!</h1><br>
      <h2>Thank you for registering with us.</h2>
      <h2>We sent you a confirmation message to your</h2>
      <h2>email address at <?php echo $_POST["email"]; ?></h2>
    </div>
  </div>
</body>
</html>
