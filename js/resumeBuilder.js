//function displaywork(){
//if (bio.skills.length>0){
//	$("#header").append(HTMLskillsStart);
//	var formattedSkill=HTMLskills.replace("%data%",bio.skills[0]);
//	$("#skills").append(formattedSkill);
	// formattedSkill=HTMLskills.replace("%data%",bio.skills[1]);
//}
//}
var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};
var projects={"projects":[{"title":"vaegis App","dates":"16/10/12","description":" this app create a ecb college seven student ,this app provide a vegitable"}]};

var bio={"name":"Lalit","role":"web Developer","contacts":{"mobile":"+9199xxxxxxxxxxx","email":"xxxxxxx@gmail.com"
           ,"github":"LaitKishor","twitter":"undefined","locations":"IN Bikaner"},
       		"welcomeMessage":"Hi gays!","skills":["web Developer"," programmer"," coder....","expert in machine learning"],"biopic":"C:\Users\Lalit\Desktop\frontend-nanodegree-resume-master\frontend-nanodegree-resume-master\images"}
var nam="Lalit Kishor Singh";
var formattedName=HTMLheaderName.replace("%data%",nam);
var role="Web Developer";
var formattedRole=HTMLheaderRole.replace("%data%",role);

if (bio.biopic.length>0){
	//$("#header").append(HTMLbioPic);

	var y=HTMLmobile.replace("%data%",bio.contacts.mobile);
	$("#header").append(y);
	var y=HTMLgithub.replace("%data%",bio.contacts.github);
	$("#header").append(y);
	var y=HTMLtwitter.replace("%data%",bio.contacts.twitter);
	$("#header").append(y);
	var y=HTMLlocation.replace("%data%",bio.contacts.locations);
	$("#header").append(y);
	var y=HTMLemail.replace("%data%",bio.contacts.email);
	$("#header").append(y);
	var x=HTMLbioPic.replace("%data%","fry.jpg");
	$("#header").append(x);

}
if (bio.skills.length>0){
	$("#header").append(HTMLskillsStart);
	var formattedSkill=HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill=HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill=HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill=HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedSkill);
	$("#skills").append(formattedSkill);
}
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$(document).click(function(loc){
	var x=loc.pageX;
	var y=loc.pageY;
	logClicks(x,y);
});
function inName(name){
	//name=" substan Thurn";
	name=name.trim().split(" ");
	console.log(name);
	name[1]=name[1].toUpperCase();
	name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
	return name[0]+" "+name[1];
}
console.log(inName(" substain Thurn "));

//$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);


for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle=formattedEmployer+formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

}





/*var education={
	"school":[
	{
		"name":"Eckerd College",
		"city":"Saint Petersburg ,FL,US",
		"degree":"BA"
		"major":["CompSCi","French"]
	},
	{
		"name":"Nova Southeastern University",
		"city":"Fort Lauderdale, FL ,US",
		"degree":"Masters",
		"major":["CompSCi"]
	}
	]
}
//$("#main").append(work["position"]);
//$("#main").append(education.name);
*/