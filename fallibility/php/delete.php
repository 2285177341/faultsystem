<?php
    include 'conn.php';
    if(isset($_GET['faultid'])){
        $sid=$_GET['faultid'];
        echo $sid;
        mysql_query("delete from faultinfo where sid='$sid' ");
    }

?>