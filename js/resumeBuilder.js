// Ivan Canevaro 2017 Resume

// bio!---------------->

var bio = {
	"name": "Ivan Canevaro",
	"role": "Senior Designer",
	"contacts": { 
		//"mobile": "310-658-6382",
		"email": "ivancanevaro@gmail.com",
		"github": "53ltro",
		"location": "Los Angeles, California, United States"
	},
	"welcomeMessage": "Senior Designer in Los Angeles, California.",
	"skills": ["Adobe CC 2017", " Art & Design", " Animate CC", " HTML5", " CSS3", " Web development"],
	"bioPic" : "images/ivan-resume-pic-387x387.jpg"
};

// Education!---------------->

var education = {
	"schools": [
	{ "name": "Otis College of Art and Design",
		"location": "Los Angeles, California, United States",
		"degree": "Bachelor of Fine Arts (BFA)",
		"majors": ["Communication Arts"],
		"dates": "2003-2007",
		"url": "http://www.otis.edu/"
	}
	], 

	"onlineCourses": [
	{ "school": "Google DoubleClick Studio Certification Program",
			"title": "HTML 5 Core Studio Certification",
			"dates": "2013",
			"url": "https://www.richmediagallery.com/tools/certified-users#certifiedUser:5334~"
		},
	{
		"school" : "Udacity",
			"title": "Intro to HTML and CSS",
			"dates": "2016",
			"url": "https://www.udacity.com/"
		}
	]
};


// Work!---------------->

var work = {
	"jobs": [
		{
			"employer": "Warner Bros. Records",
			"title": "Graphic Design Intern",
			"dates": "Febuary 2007 - June 2007",
			"location": "Burbank, California, United States",
			"description": "Design Intern for New Media in the Art department. 'Worked on' concept + design, flash animation, development of web banners, and other online designs for websites."
		},
		{
			"employer": "Warner Bros. Records",
			"title": "Graphic Designer / Web Designer",
			"dates": "June 2007 - May 2009",
			"location": "Burbank, California, United States",
			"description": "Designed various websites, logos, print design, user experience, web development, flash animation, motion graphics, online marketing designs for bands, movies, and musicians."
		},
		{
			"employer": "Guerilla Holloywood",
			"title": "Designer / Motion Graphics freelance",
			"dates": "August 2009",
			"location": "Los Angeles, California, United States",
			"description": "Design and Motion Graphics for TV Spots"
		},
		{
			"employer": "GSN Games / CPMStar",
			"title": "Junior visual Designer",
			"dates": "July 2011 - June 2015",
			"location": "Santa Monica, California, United States",
			"description": "Create'd' web design content for gaming sites, such as  user experience, web development, flash animation, motion graphics, advertisements for online games, mobile ap'p's, console games, and other products related to the gaming industry."
		},
		{
			"employer": "GSN Games / CPMStar",
			"title": "Lead Senior Visual Designer",
			"dates": "June 2015 - Present",
			"location": "Santa Monica, California, United States",
			"description": "In charge of creating web design content for gaming sites, like user experience, web development, flash animation, HTML5 Adobe CC 2017 animation, motion graphics, print design, layout design, advertisements for online games, mobile ap'p's, console games, and other products related to the gaming industry."
		}

	]
};

// Projects!---------------->

var projects = {
	"projects": [
		{
			"title": "Ivan Canevaro Online Portfolio",
			"dates": "2017",
			"description": "Logo design, website design, web development using Adobe CC 2017, Illustrator, PhotoShop, HTML5, CSS3, and JavaScript.",
			"images": ["images/site-logo-250x250.jpg"],
			"url": "http://ivancanevaro.com/"
		}
	]
};


// Display Content!---------------->

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedPic);

var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(formattedwelcomeMsg);

//display bio contacts. take out phone # before posting live for exam--------------->

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
//formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

for (var i = 0; i < bio.skills.length; i++) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}

//display bio skills------------------->

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkill);
}

// display work info------------>

work.display = function() {

    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle, formattedLocation);

        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%",job.description);
        $(".work-entry:last").append(formattedDescription);
    });
};

work.display();

// Display Projects info!------------------->

projects.display = function () {
   //start loop
   projects.projects.forEach(function(project) {
      
      $('#projects').append(HTMLprojectStart);

       project.images.forEach(function(image) {
       	var formattedProjectTitle = HTMLprojectTitle.replace('%data%', project.title).replace('#', project.url);
        var formattedProjectDates = HTMLprojectDates.replace('%data%', project.dates);
        var formattedProjectDescription = HTMLprojectDescription.replace('%data%', project.description);
        var formattedProjectImage = HTMLprojectImage.replace('%data%', project.images);
        $('.project-entry:last').append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription, formattedProjectImage);
      });
      
   });
};

projects.display();
// Display Education info!------------------->

education.display = function() {

    education.schools.forEach(function(school) {

        $("#education").append(HTMLschoolStart);   

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);

        var formattedSchoolName_Degree = formattedSchoolName + formattedSchoolDegree;

       $(".education-entry:last").append(formattedSchoolName_Degree, formattedschoolDates, formattedSchoolMajor, formattedSchoolLocation);
        
    });



    $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(s) {

          $("#education").append(HTMLschoolStart);
          

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", s.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", s.school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", s.dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", s.url).replace("#", s.url);


        var formattedOnlineTitle_School = formattedOnlineTitle +formattedOnlineSchool;

        $(".education-entry:last").append(formattedOnlineTitle_School, formattedOnlineDates, formattedOnlineURL);


    });
};

education.display();


// log clicks------------>

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});



// International button and name option-------------->
/*
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" " +name[1];
}

$("#main").append(internationalizeButton);

*/

//here's a map!--------------->

$("#mapDiv").append(googleMap);



