var Constants = {
    NAME : "Jake Demian"
}

var barColors = {
    "5":"#4bed7e",
    "4":"#61ed4b",
    "3":"#81ed4b"
}

function typeName(endIdx){
    var name = Constants.NAME;
    var nameElement = $("#name");
    
    nameElement.html(name.substring(0, endIdx) + "_");
    endIdx++;

    if(endIdx <= name.length){
        setTimeout(function(){typeName(endIdx)}, 125);
    } else {
        setTimeout(function(){toggleCursorFlash()}, 500);
    }
}

function toggleCursorFlash(){
    var nameElement = $("#name");
    var nameStr = nameElement.html().trim();
    var suffix = nameStr.indexOf("_") == -1 ? "_" : " ";

    nameElement.html(Constants.NAME + suffix);
    setTimeout(function(){toggleCursorFlash()}, 500);
}

function initSkillsContent(){
    var skillValueBars = $(".skill-value");
    for(var i = 0; i < skillValueBars.length; i++){
        var bar = skillValueBars[i];
        var thisValue = $(bar).attr("data-skill-value");
        if(!!thisValue){
            var color = barColors[thisValue];
            var calculatedWidth = Number(thisValue) * 20;
            $(bar).width(0);
            $(bar).animate({width: calculatedWidth}, 500 );
            //$(bar).width(String(calculatedWidth) + "px");
            $(bar).css('background-color', color);
        }
    }
}

function linkClicked(ele){
    var key = $(ele).attr("data-link-key");
    if(!!key){
        var content = $("#" + key);

        $("#textContent").fadeOut(100, function(){
            $("#textContent").html(content.html());

            if(key == "skillset"){
                initSkillsContent();
            }

            $("#textContent").fadeIn(100);
        });        
    }
}

$(document).ready(function(){
    $("#textContent").html("");
    setTimeout(function(){typeName(0)}, 300);
});