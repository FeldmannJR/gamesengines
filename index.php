<!DOCTYPE html>
<html lang="pt-BR"  hreflang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Games Engines</title>
    <meta http-equiv="Cache-Control" content="no-transform">
    <script src ="./js/jquery.js"></script>
    <script src ="./js/sidebar.js?<?php echo rand(0,5000);?>"></script>
    <script src ="./js/pageloader.js?<?php echo rand(0,5000);?>"></script>
    <script src ="./js/geral.js?<?php echo rand(0,5000);?>"></script>
    <script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <!-- <link rel ="stylesheet" href ="./css/bootstrap.css"> -->
    <link rel ="stylesheet" href ="./css/style.css?<?php echo rand(0,5000);?>">

</head>
<body>
<div id = "menu" class ="sidenav">
    <h1 class ='titulo'>Game Engines</h1>
    <ul id ="options">


    </ul>
    <div id="source">
        <a href="https://github.com/FeldmannJR/gamesengines/">
            <img src="./img/github.png?asdas">
        </a>
    </div>
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>

</div>
<span onclick="openNav()">open</span>

<div id ="main">
    <div id ="conteudo">

        <img style="margin:auto;display:block;margin-top:100px;" src="./img/loader.gif">

    </div>
</div>


</body>
</html>