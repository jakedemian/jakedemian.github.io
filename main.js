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
    var nameElement = document.getElementById("name");
    
    nameElement.innerHTML = name.substring(0, endIdx) + "_";
    endIdx++;

    if(endIdx <= name.length){
        setTimeout(function(){typeName(endIdx)}, 125);
    } else {
        setTimeout(function(){toggleCursorFlash()}, 500);
    }
}

function toggleCursorFlash(){
    var nameElement = document.getElementById("name");
    var nameStr = nameElement.innerHTML.trim();
    var suffix = nameStr.indexOf("_") == -1 ? "_" : " ";

    nameElement.innerHTML = Constants.NAME + suffix;
    setTimeout(function(){toggleCursorFlash()}, 500);
}

function initSkillsContent(){
    var skillValueBars = document.getElementsByClassName("skill-value");
    for(var i = 0; i < skillValueBars.length; i++){
        var bar = skillValueBars[i];
        var thisValue = bar.getAttribute("data-skill-value");
        if(!!thisValue){
            var color = barColors[thisValue];
            var calculatedWidth = Number(thisValue) * 20;
            bar.style.width = String(calculatedWidth) + "px";
            bar.style.backgroundColor = color;
        }
    }
}

function linkClicked(ele){
    var key = ele.getAttribute("data-link-key");
    if(!!key){
        var content = document.getElementById(key);
        document.getElementById("textContent").innerHTML = content.innerHTML;

        if(key == "skillset"){
            initSkillsContent();
        }
    }
}

window.onload = function(){
    document.getElementById("textContent").innerHTML = "";
    setTimeout(function(){typeName(0)}, 1000);
}