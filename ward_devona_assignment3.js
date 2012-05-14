var areas = ["Rooftop","Bank","Vault","Safe-house"];
var spotTime = [5,5,15,20];
var driver = {
	name: "James"
	};
	
var lookOut = {
	name: "Tommy"
	};
	
var lockMan = {
	name: "Smith"
	};
	

var intro = function () {
console.log("We have a problem! A robbery is going to happen soon.");
console.log(lockMan.name + ", " + lookOut.name + ", and " + driver.name + " are looking to do some damage.");
};

var handleData = function (json) {
	for (var i = 0; i < json.criminalList.length; i++){
	var crimeList = json.criminalList[i];
	console.log("ID: " + crimeList.id + ", Name: " + crimeList.name + ", Age: " + crimeList.age + ", Crime: " + crimeList.crime + ", Time Spent in Lockup: " + crimeList.years + ", Wanted for: " + crimeList.wanted + ", Warrants: " + crimeList.warrants);
	};
};
	
intro();

console.log("Here is the list of the criminals you wanted, Boss.");

handleData(json2);