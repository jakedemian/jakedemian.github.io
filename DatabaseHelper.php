<?php

function GetMysqliConnection(){
    $info = simplexml_load_file("../dbconf.xml");
    return new mysqli($info->hostname, $info->username, $info->password, $info->defaultSchema);
}