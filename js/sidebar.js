$(document).ready(function () {
   loadOptions();

});

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


function openNav() {
    document.getElementById("menu").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}


function closeNav() {
    $(".sidenav").css("transition","0.5s");
    document.getElementById("menu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function clickMenu(id){
    $(".active").removeClass("active");
    $("#id-"+id).addClass("active");
    window.location.hash = id;
    reloadPage();
}

function clickSubMenu(id){


    var s= "#subul-"+id+"";
    var e= $(s);
    var display = e.is(":visible");
    if(display){
        e.hide("slide");
    }else{
        e.show("slide");

    }

}

function append(campo,html){

   html+= "<li>";
    if(campo.subs != undefined){

        html+='<span id=\"sub-'+campo.id+'\" onClick=\"clickSubMenu(\''+campo.id+'\')\">'+campo.nome+'</span>';
        html+="<ul id=\"subul-"+campo.id+"\" >";
        campo.subs.forEach(function (t, number) {
           html= append(t,html);
        });

        html+="</ul>";
    }else{
        console.log(campo.id);
        html+='<span id =\'id-'+campo.id+'\' onClick=\"clickMenu(\''+campo.id+'\')\">'+campo.nome+'</span>';
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