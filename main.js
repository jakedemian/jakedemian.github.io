var Constants = {
    NAME : "Jake Demian"
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

function linkClicked(ele){
    
}

window.onload = function(){
    setTimeout(function(){typeName(0)}, 1000);
}