/*
$("#main").append("Manoj Talagadadeevi");

var email = "manoj@udacity.com";

var newEmail = email.replace("udacity", "gmail");
console.log(email);
console.log(newEmail);

var awesomeThoughts = "I am Manoj and I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
console.log("awesomeThoughts = " + awesomeThoughts);
console.log("funThoughts = " + funThoughts);

$("#main").append(funThoughts);
*/


// Full Name and Role
var name = "Manoj Talagadadeevi";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Front End Web/UI Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var bio = {
    "name" : "Manoj Talagadadeevi",
    "role" : "Front End Web/UI Developer",
    "contacts" : {
        "mobile" : "203-548-7488",
        "email" : "mano854t@gmail.com",
        "githubb" : "Manoj85",
        "twitter" : "Mano854T",
        "location" : "Stamford, CT"
    },
    "welcomeMessage" : "Hello",
    "skills" : [
        "HTML5", "JavaScript", "AngularJS", "CSS3", "Responsive Web Design"
    ],
    "bioPic" : "images/me.jpg"
};

/*$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contacts.mobile);
$("#main").append(bio.bioPic);
$("#main").append(bio.welcomeMessage);*/

var work = {};
work.position = "Web Developer";
work.employer = "Thomson Reuters";
work.years = 2.9;

var education = {
    "schools": [
        {
            "name": "Old Dominion University",
            "location": "Norfolk, VA, US",
            "degree": "Masters",
            "majors": ["CS"],
            "dates": 2008,
            "url": "http://www.odu.edu"
        },
        {
            "name": "Jawaharlal Nehru Technological University",
            "location": "Khammam, AP, India",
            "degree": "BTech",
            "majors": ["CS"],
            "dates": 2006,
            "url": "http://jntu.edu"
        }],

    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": "2014",
            "url": "http://udacity.com"
        }
    ]
};
        
/*education['name'] = "Old Dominion University";
education['years'] = "2006-2008";
education['city'] = "Norfolk, VA, US";

$("#main").append(work["position"]);
$("#main").append(education.name);*/


/*var cameron = {};
cameron.job = "course dev";

var makeCourse = function() {
    // make a course
    console.log("Made a course");
};

var courses = 0;
while(cameron.job === "course dev") {
    makeCourse();
    courses = courses + 1;
    if(courses === 10) {
        cameron.job = "learning specialist";
    }
}

console.log(cameron.job);*/

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    
    logClicks(x, y);    
});


/*

$(button).click(function() {
    inName("manoj talagadadeevi");    
});*/

function inName(name) {
    var name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    
    return name[0] + " " +name[1];
}

$("#main").append(internationalizeButton);



// Example 1
var outsideExample ="First string";
function example(){
    var outsideExample ="Second string"; 
}
example();
console.log(outsideExample);

// Example 2
var outsideExample ="First string";
function example(){
    outsideExample ="Second string"; 
}
example();
console.log(outsideExample);

// Example 3
var outsideExample ="First string";
if(true){
    outsideExample ="Second string";
    console.log(outsideExample);
}
console.log(outsideExample);

// Example 4
example();
function example() {
    console.log("Ran the example");
}

// Example 5
example();
var example = function () {
    console.log("Ran the example");
}

















