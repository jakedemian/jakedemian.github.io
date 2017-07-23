var Constants = {
    NAME : "Jake Demian"
};

var barColors = {
    "5":"#4286f4",
    "4":"#4286f4",
    "3":"#4286f4"

};

var bornDate = new Date(1991, 11, 9, 0, 6, 0, 0);
var nowDate = new Date();

var aboutMeJson = {
    "name":"Jacob R. Demian",
    "age": getExactAge().toFixed(10),
    "title":"Software Engineer",
    "pets":"dog",
    "interests":[
        "programming",
        "working out",
        "watching space documentaries",
        "video games"
    ],
    "numOfTimesWatchedSuperbad": 37,
    "numOfSandwichesEaten": (Math.floor(getExactAge() * 365))
}

var currentPage = null;

function getExactAge(){
    nowDate = new Date();
    return (nowDate-bornDate )/1000/60/60/24/365;
}

function typeName(endIdx){
    var name = Constants.NAME;
    var nameElement = $("#name");
    
    nameElement.html(name.substring(0, endIdx) + "<span id='underscore'>_</span>");
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
    var suffix = nameStr.indexOf("_") == -1 ? "<span id='underscore'>_</span>" : " ";

    nameElement.html(Constants.NAME + suffix);
    setTimeout(function(){toggleCursorFlash()}, 500);
}

function initAboutContent(){
    aboutMeJson.age = getExactAge().toFixed(10);
    $("#aboutMeJson").html(JSON.stringify(aboutMeJson, undefined, 2));
    
    if(currentPage == "about"){
        setTimeout(function(){
            initAboutContent();
        }, 10);
    }
}

function initSkillsContent(){
    var skillValueBars = $(".skill-value");
    for(var i = 0; i < skillValueBars.length; i++){
        var bar = skillValueBars[i];
        var thisValue = $(bar).attr("data-skill-value");
        if(!!thisValue){
            var color = barColors[thisValue];
            var calculatedWidth = Number(thisValue) * 60;
            $(bar).width(0);
            $(bar).animate({width: calculatedWidth}, 500 );
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
            currentPage = key;

            if(key == "about"){
                initAboutContent();
            } else if(key == "skillset"){
                initSkillsContent();
            }

            $("#textContent").fadeIn(100);
        });        
    }
}

function copySensitiveText(txt){
    $("<input/>", {
        type: "textarea",
        id: "tempTxt",
        value: txt
    }).appendTo("body").select();

    try{
        var copySuccess = document.execCommand("copy");
    } catch(err){
        console.error(err);
    }

    $("#tempTxt").remove();
}

function postCopy(ele){
    $(ele).attr("class", "copyLinkPost");    
    setTimeout(function(){$(ele).attr("class", "copyLink");}, 2000);
}

function copyPhone(ele){
    var npaCode = "440";
    var centralOfficeCode = "897";
    var subscriberNum = "1768";
    copySensitiveText(npaCode + centralOfficeCode + subscriberNum);
    postCopy(ele);
}

function copyEmail(ele){
    var localPart = "jakedemian";
    var domain = "gmail.com";
    copySensitiveText(localPart + "@" + domain);
    postCopy(ele);
}

$(document).ready(function(){
    $("#textContent").html("");
    setTimeout(function(){typeName(0)}, 300);
    $($(".mainLink")[0]).click();    
});