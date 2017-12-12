/*Java script é bom, as pessoas que são ruins*/
var loaded;

$(document).ready(function(){

   reloadPage();
   var tmp = loaded;
   if(tmp.charAt(0)==="#"){
       tmp = tmp.substr(1);
   }
   loadedPage(tmp);

});

/*
* Um script em php escolhe o arquivo da pagina e retorna a pagina, caso passe uma rgumento mto loco que não existe da pau
* */
function loadPage(page){
    loaded = page;
    $("#conteudo").html('<img style="margin:auto;display:block;margin-top:100px;" src="./img/loader.gif">');
    $.ajax({
        type: "POST",
        url: "./pageloader.php",
        data: 'page='+page,
        dataType: "html",
        success: function(msg){

            if(parseInt(msg)!=0)
            {
                $('#conteudo').html(msg);

            }
        }

    });
}
function reloadPage()
{
    var hash=window.location.hash;
    if(!hash){
        hash ="main";
    }
    if(hash != loaded)
    {
        loaded=hash;
        loadPage(hash);
    }
    return hash;
}