<?php
  // set enviornment variable or change variables to their values
  $mysql_pass = "ZeitgeistDb"; // or $mysql_pass = "thisispass"
  $mysql_user = "zeitgeist_z19_user1"; // or $mysql_user = "ausr";
  $mysql_db = "zeitgeist_z19_entries";
  $servername = "localhost"; // 
  $conn =mysqli_connect($servername,$mysql_user,$mysql_pass,$mysql_db); 

  if (mysqli_connect_errno()) { 
  	die("Connection failed: " . mysqli_connect_error());
  }

?>