<?php
            // 设置字符编码
            header('content-type:text/html;charset:utf-8');
            // 连接数据库，定义常量
            define('HOST','localhost');
            define('USERNAME','root');
            define('PASSWORD','');

            $coon=@mysql_connect(HOST,USERNAME,PASSWORD);
            if(!$coon){
                die('数据库连接错误：'.mysql_error());
            }
            // 选择数据库，设置字符编码
            mysql_select_db('faultsystem');
            mysql_query('SET NAMES UTF8');
?>