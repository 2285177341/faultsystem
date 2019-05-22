 <?php
include 'conn.php';
if(isset($_POST['title']) && isset($_POST['description'])){
        $title=$_POST['title'];
        $description=$_POST['description'];
        $resolve=$_POST['resolve'];
        mysql_query("insert faultinfo values(default,'$title','$description','$resolve',NOW())");
}


?>  


