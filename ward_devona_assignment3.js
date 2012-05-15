var areas = ["Rooftop","Bank","Vault","Safe-house"];
var spotTime = [5,5,15,20];
var driver = {
	name: "James",
	drive: 120
	};
	
var lookOut = {
	name: "Tommy",
	look: 10
	};
	
var lockMan = {
	name: "Smith",
	unlock: 5
	};
	
//String function
var intro = function () {
	console.log("We have a problem! A robbery is going to happen soon.");
	console.log(lockMan.name + ", " + lookOut.name + ", and " + driver.name + " are looking to do some damage.");
};
//JSON String function
var handleData = function (json) {
	for (var i = 0; i < json.criminalList.length; i++){
	var crimeList = json.criminalList[i];
	console.log("ID: " + crimeList.id + ", Name: " + crimeList.name + ", Age: " + crimeList.age + ", Crime: " + crimeList.crime + ", Time Spent in Lockup: " + crimeList.years + ", Wanted for: " + crimeList.wanted + ", Warrants: " + crimeList.warrants);
	};
};
//Number function
var planThink = function () {
	var spotPick = 4
	var totalTime = 45 / spotPick
	while (spotPick <= 4) {
	console.log("If they are going where I think they are going, they will hit " + spotPick + " areas on this building.");
	console.log("If they still go by their same routine then it would take them about " + totalTime + " minutes to complete the robbery.");
	spotPick++
	}
};


	
intro();

console.log("Here is the list of the criminals you wanted, Boss.");

handleData(json2);

console.log("It looks like they already have a plan.");

planThink();

