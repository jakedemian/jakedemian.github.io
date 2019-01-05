var Constants = {
    NAME: "Jake Demian",
    BAR_COLOR: "#4286f4",
    BAR_SCALE_MODIFIER : 30,
    BORN_DATE_TIME : new Date(1991, 11, 9, 0, 6, 0, 0)
};

// the current date-time
var nowDate = new Date();

// the json that is printed to the DOM on the about page
var aboutMeJson = {
    "name": "Jacob R. Demian",
    "age": getExactAge().toFixed(10),
    "title": "Computer Engineer",
    "pets": "dog",
    "interests": [
        "sports",
        "game design",
        "programming",
        "working out",
        "watching space documentaries",
        "video games"
    ],
    "numOfTimesWatchedSuperbad": 37,
    "numOfSandwichesEaten": (Math.floor(getExactAge() * 365))
}

// the key of the current page
var currentPage = null;

// the div in which templates are copied to and displayed
var mainContentDiv = null;

/**
 * Get my exact age
 */
function getExactAge() {
    nowDate = new Date();
    return (nowDate - Constants.BORN_DATE_TIME) / 1000 / 60 / 60 / 24 / 365;
}

/**
 * Type one letter of my name on the DOM
 * @param {Integer} endIdx 
 */
function typeName(endIdx) {
    var name = Constants.NAME;
    var nameElement = $("#name");

    nameElement.html(name.substring(0, endIdx) + "<span id='underscore'>_</span>");
    endIdx++;

    if (endIdx <= name.length) {
        setTimeout(function () { typeName(endIdx) }, 125);
    } else {
        setTimeout(function () { toggleCursorFlash() }, 500);
    }
}

/**
 * Flash the fake input cursor that typed my name, once the name has finished typing.
 */
function toggleCursorFlash() {
    var nameElement = $("#name");
    var nameStr = nameElement.html().trim();
    var suffix = nameStr.indexOf("_") == -1 ? "<span id='underscore'>_</span>" : " ";

    nameElement.html(Constants.NAME + suffix);
    setTimeout(function () { toggleCursorFlash() }, 500);
}

/**
 * Initialize the about content and continuousy update the "about me" json
 */
function initAboutContent() {
    aboutMeJson.age = getExactAge().toFixed(10);
    $("#aboutMeJson").html(JSON.stringify(aboutMeJson, undefined, 2));

    if (currentPage == "about") {
        setTimeout(function () {
            initAboutContent();
        }, 10);
    }
}

/**
 * Initialize the skillsset page, including animating bar growth and adapting 
 * the skill lines to the correct heights
 */
function initSkillsContent() {
    // filter out bars in the template html so that we aren't modifying things we dont need to
    var skillValueBars = $(".skill-value").filter(function(){
        return $.contains(mainContentDiv, this);
    });

    for (var i = 0; i < skillValueBars.length; i++) {
        var bar = skillValueBars[i];
        var thisValue = $(bar).attr("data-skill-value");
        if (!!thisValue) {
            var color = Constants.BAR_COLOR;
            var calculatedWidth = Number(thisValue) * Constants.BAR_SCALE_MODIFIER;
            $(bar).width(0);
            $(bar).animate({ width: calculatedWidth }, 500);
            $(bar).css('background-color', color);
        }
    }

    var skillLines = $(".skillLine");
    var skillsContainerHeight = $("#skillListContainer").height();
    for(var i = 0; i < skillLines.length; i++){
        $(skillLines[i]).height(skillsContainerHeight + "px");
    }
}

/**
 * Handle the user clicking a main navigation link.
 * @param {Element Object} ele 
 */
function linkClicked(ele) {
    var key = $(ele).attr("data-link-key");
    if (!!key && currentPage != key) {
        var currentlyHighlighted = $(".selected")[0];
        $(currentlyHighlighted).removeClass("selected");
        $(ele).addClass("selected");

        var content = $("#" + key);

        $("#textContent").fadeOut(100, function () {
            $("#textContent").html(content.html());
            currentPage = key;
            $("#textContent").fadeIn(100, function(){
                if (key == "about") {
                    initAboutContent();
                } else if (key == "skillset") {
                    initSkillsContent();
                }
            });
        });
    }
}

/**
 * Copy a sensitive string to the user's clipboard
 * @param {String} txt 
 */
function copySensitiveText(txt) {
    $("<input/>", {
        type: "textarea",
        id: "tempTxt",
        value: txt
    }).appendTo("body").select();

    try {
        var copySuccess = document.execCommand("copy");
    } catch (err) {
        console.error(err);
    }

    $("#tempTxt").remove();
}

/**
 * Make the copy button the user just clicked display "Copied!" for a short time.
 * @param {Element Object} ele 
 */
function postCopy(ele) {
    $(ele).attr("class", "copyLinkPost");
    setTimeout(function () { $(ele).attr("class", "copyLink"); }, 2000);
}

/**
 * Copy my phone number the the user's clipboard
 * @param {Element Object} ele 
 */
function copyPhone(ele) {
    var npaCode = "216";
    var centralOfficeCode = "217";
    var subscriberNum = "2177";
    copySensitiveText(npaCode + centralOfficeCode + subscriberNum);
    postCopy(ele);
}

/**
 * Copy my email address to the user's clipboard
 * @param {Element Object} ele 
 */
function copyEmail(ele) {
    var localPart = "jakedemian";
    var domain = "gmail.com";
    copySensitiveText(localPart + "@" + domain);
    postCopy(ele);
}

/********************************
 * $(document).ready
 ********************************/
$(document).ready(function () {
    mainContentDiv = $("#textContent")[0];
    $(mainContentDiv).html("");
    setTimeout(function () { typeName(0) }, 300);
    $($(".mainLink")[0]).click(); // default to about page

    // prevent main links from dragging
    $('.mainLink').mousedown(function (e) {
        e.preventDefault();
    });
});
