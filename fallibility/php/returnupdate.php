<?php
    include 'conn.php';
    if(isset($_GET['updateid'])){
        $sid=$_GET['updateid'];
        $result=mysql_query("select*from faultinfo where sid='$sid'");
        echo json_encode(mysql_fetch_array($result,MYSQL-ASSOC));
    }

?>