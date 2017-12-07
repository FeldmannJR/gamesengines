/*Java script é bom, as pessoas que são ruins*/

$(document).ready(function(){

   reloadPage();

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
var loaded;


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