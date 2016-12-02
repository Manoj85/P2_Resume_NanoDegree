// Full Name and Role
var name = "Manoj Talagadadeevi";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Front End Web/UI Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var mobile = "203-548-7488";
var email = "mano854t@gmail.com";
var github = "Manoj85";
var twitter = "@Mano854T";
var location1 = "Stamford, CT";

var formattedMobile = HTMLmobile.replace("%data%", mobile);
var formattedEmail = HTMLemail.replace("%data%", email);
var formattedGithub = HTMLgithub.replace("%data%", github);
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
var formattedLocation = HTMLlocation.replace("%data%", location1);

$("#topContacts").prepend(formattedLocation);
$("#topContacts").prepend(formattedTwitter);
$("#topContacts").prepend(formattedGithub);
$("#topContacts").prepend(formattedEmail);
$("#topContacts").prepend(formattedMobile);

// Bio
var bio = {
    "name" : "Manoj Talagadadeevi",
    "role" : "Front End Web/UI Developer",
    "contacts" : {
        "mobile" : "203-548-7488",
        "email" : "mano854t@gmail.com",
        "github" : "Manoj85",
        "twitter" : "@Mano854T",
        "location" : "Stamford, CT"
    },
    "welcomeMessage" : "Front-end ninja from New York",
    "skills" : [
        "HTML5", "JavaScript", "AngularJS", "CSS3", "Responsive Web Design"
    ],
    "bioPic" : "images/me.jpg"
};

// Bio Pic
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);

// Welcome Message
var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMessage);

// Bio - Skills
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    
    for (skill in bio.skills) { 
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
    }    
}

/*
var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);

var formattedOnlineName = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].name);        
var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
var formattedOnlineDate = HTMLonlineDates.replace("%data%",education.onlineCourses[course].date);
var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
*/
        

// Education
var education = {
    "schools": [
        {
            "name": "Old Dominion University",
            "degree": "Masters",
            "dates": 2008,
            "location": "Norfolk, VA, US",            
            "major": ["CS"],            
            "url": "http://www.odu.edu"
        },
        {
            "name": "Jawaharlal Nehru Technological University",
            "degree": "BTech",
            "dates": 2006,
            "location": "Khammam, AP, India",            
            "major": ["CS"],            
            "url": "http://jntu.edu"
        }],

    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": "2014",
            "url": "http://udacity.com"
        },
        {
            "title": "How to Use Git and GitHub",
            "school": "Udacity",
            "dates": "2014",
            "url": "http://udacity.com"
        },
        {
            "title": "Principles of Computing",
            "school": "Coursera",
            "dates": "2014",
            "url": "https://www.coursera.org/signature/certificate/L8FXEWUQYZ"
        },
        {
            "title": "An Introduction to Interactive Programming in Python",
            "school": "Coursera",
            "dates": "2014",
            "url": "https://www.coursera.org/signature/certificate/D9BQREZT7L"
        },
        {
            "title": "Programming Mobile Applications for Android Handheld Systems",
            "school": "Coursera",
            "dates": "2014",
            "url": "https://www.coursera.org/signature/certificate/TGWQZBRQL9"
        },
        {
            "title": "CSS Selectors - Getting Started",
            "school": "Learnable",
            "dates": "2014",
            "url": "https://learnable.com/cert/7194a421eaf2ae83"
        }
    ]
};


// Work Experience
var work = {
    "jobs": [
        {
            "employer": "Thomson Reuters",
            "title": "Software Engineer",
            "dates": "March 2012 - Present",
            "description": "Provided front-end web development solutions on multiple high-visibility projects. I worked directly with business analysts, project managers and server-side development teams to help drive key initiatives that were based around ThomsonReuters.com. As part of a team of more than 8 developers, I was focused on object-oriented JavaScript, and played leadership role in recruiting efforts.",
            "location": "117 E Stevens Ave, Valhalla, NY 10595"
        },
        {
            "employer": "Tradewind Net Access",
            "title": "Web Application Developer",            
            "dates": "Feb 2009 - Mar 2012",
            "description": "Part of a medium-sized development team at an exciting startup, my focus has been on the customer-facing one-fine-stay website. A lot of my work has been building Backbone-based tools for allowing our staff to manage the website's content more easily.",
            "location": "1120 Rt.73, Mt. Laurel, NJ 08054",
        }
    ]
};

// Projects
var projects = {
    "projects": [
        {
            "title": "Checkpoint User Administration System",
            "dates": "2012 - 2014",
            "description": "User administration application for TR checkpoint product",
            "images": ["images/fry.jpg" ]
        },
        {
            "title": "Chat Messenger and Interactive Student Forum",
            "dates": "Software Engineer",
            "description": "Intranet Chat Messenger: The Chat Server is Intranet Communication software intended for sending and receiving messages between the members logged in the intranet. This application is a tool for messaging and chatting in the local network in Microsoft Windows. It substitutes corporate email for exchanging files and messages in many companies. Interactive Student Forum: This is a web application developed for the academic institution, where students can get an opportunity to discuss and post content. Any questions posted by the students can be clarified by anyone to the earliest.",
            "images": ["images/fry.jpg" , "images/fry.jpg"]
        }
    ]
};

function displayWork() {
    var job;

    for (job in work.jobs) {    
        // create new div for work experience
        $("#workExperience").append(HTMLworkStart);
        // concate employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);    
    }
}

displayWork();

projects.display = function () {
    for (project in projects.projects) { 
        // create new div for projects
        $("#projects").append(HTMLprojectStart);
        
        // concate project title and description
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedProjectDescription);
        
        if(projects.projects[project].images.length > 0){
            for (image in projects.projects[project].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
    }
};

projects.display();

// you want to see a map? here's a map
$("#mapDiv").append(googleMap);

education.display = function() {
    // keep the top loop the same    
      
    for(school in education.schools){
        $("#education").append(HTMLschoolStart);
        
        var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
        
        $(".education-entry:last").append(formattedSchoolName); 
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolMajor);
        //$(".education-entry:last").append(formattedSchoolDegree);        
        //$(".education-entry:last").append(formattedSchoolLocation);        
        
    };//end forloop Schools 
    
    
    $(".education-entry:last").append(HTMLonlineClasses);
    
    for (course in education.onlineCourses) {      
        
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);        
        var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
        
        var formattedOnlineDate = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
        
        $(".education-entry:last").append(formattedOnlineTitleSchool);
        $(".education-entry:last").append(formattedOnlineDate);  
        $(".education-entry:last").append(formattedOnlineURL);
    }; // end forloop online courses
};// end educations.display

education.display();



        

























