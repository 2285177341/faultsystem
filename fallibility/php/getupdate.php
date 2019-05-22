<?php
include 'conn.php';
if(isset($_POST['title'])&&isset($_POST['description'])){
    $title=$_POST['title'];
    $description=$_POST['description'];
    $resolve=$_POST['resolve'];
    $sid=$_POST['updatesid'];
    mysql_query("update faultinfo set title='$title',description='$description',resolve='$resolve',date=Now() where sid='$sid'");
}

?>