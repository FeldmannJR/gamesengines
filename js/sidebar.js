
var tamanho ="13%";

$(document).ready(function () {
   loadOptions();

});

var open = "icone fecha glyphicon glyphicon-minus-sign";
var close = "icone abre glyphicon glyphicon-plus-sign";

var options =[
    {
        nome:"Inicial",
        id:"inicial",
        redir:true,
    },
    {
        nome:"Abertas",
        id:"abertas",
        subs:[
            {
                nome:"Unity",
                id:"unity",
                redir:true
            },
            {
                nome:"Unreal Engine",
                id:"unreal",
                redir:true,
            },
            {
                nome:"Cryengine",
                id:"Cryengine",
                redir:true,
            }
        ]


    },
    {
        nome:"Criação",
        id:"criando",
        redir:true,
    },

];
function append(campo,html){

    html+= "<li>";
    if(campo.subs != undefined){

        html+='<span class=\"menu\" id=\"sub-'+campo.id+'\" onClick=\"clickSubMenu(\''+campo.id+'\')\">'+campo.nome+
            '<span class =\"'+close+'\">' +
            '</span>' +
            '</span>';

        html+="<ul style=\"display:none;\" id=\"subul-"+campo.id+"\" >";
        campo.subs.forEach(function (t, number) {
            html= append(t,html);
        });

        html+="</ul>";
    }else{
        console.log(campo.id);
        html+='<span id =\'id-'+campo.id+'\' class=\"menu\" onClick=\"clickMenu(\''+campo.id+'\')\">'+campo.nome+'</span>';
    }

    html+="</li>";

    return html;
}

function loadOptions(){


    var html = "";
    options.forEach(function (t, number) {
        html = append(t,html);
    });
    $("#options").html(html);


}


function openNav() {
    document.getElementById("menu").style.width = tamanho;
    document.getElementById("main").style.marginLeft = tamanho;
}


function closeNav() {
    $(".sidenav").css("transition","0.5s");
    document.getElementById("menu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function loadedPage(id){
    setActive(id);
    console.log("Era pra ter loaded "+id);
}

function clickMenu(id){
    setActive(id);
    window.location.hash = id;
    reloadPage();
}

function setActive(id){
    openMenuToActive(id);
    $(".active").removeClass("active");
    $("#id-"+id).addClass("active");
}

function openMenuToActive(id){
   options.forEach(function (t) {
       if(t.subs!=undefined){
           t.subs.forEach(function (t2) {

               if(t2.id===id){

                    if(!isMenuOpen(t.id)) {
                        setMenuOpen(t.id, true);
                    }
               }
           })

       }

   })
}
function setMenuOpen(id,isopen){
    var e= $("#subul-"+id);
    var spanicon = $("#sub-"+id).children("span");
    if(!isopen){
        e.hide("slide",function () {
            spanicon.removeClass(open);
            spanicon.addClass(close);
        });
    }else{
        e.show("slide",function () {
            spanicon.removeClass(close);
            spanicon.addClass(open);
        });
    }
}

function isMenuOpen(id){
    var e= $("#subul-"+id);
    var display = e.is(":visible");
    return display;
}

function clickSubMenu(id){
    if(isMenuOpen(id)){
        setMenuOpen(id,false);
    }else{
        setMenuOpen(id,true);
    }
}

