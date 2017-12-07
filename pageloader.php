<?php
$page = $_POST["page"];

$c = $page{0};

if(strcasecmp($c,"#")==0){
    $page = substr($page,1);
}

loadFromFile($page);




function loadFromFile($page ){
    include './pages/'.$page.'.php';
}


?>