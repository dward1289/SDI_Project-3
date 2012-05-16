var areas = ["Rooftop","Bank","Vault","Safe-house"];
var spotTime = [10,20,15,25];
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
	var totalTime = 70 / spotPick
	while (spotPick <= 4) {
	console.log("If they are going where I think they are going, they will hit " + spotPick + " areas on this building.");
	console.log("If they still go by their same routine then it would take them about " + totalTime + " minutes to complete the robbery.");
	spotPick++
	}
};

//Boolean function with nested conditional
var whoWill = function () {
	if (lockMan.unlock <= 5) {
  if (driver.drive <= 120) {
    console.log("If my thoughts are correct, then " + driver.name + " and " + lockMan.name + " are the main guys we need to catch.");
  } else {
    console.log(lookOut.name + " is more of a threat than I thought.");
  }
} else if (lookOut.look <= 15) {
  console.log(lookOut.name + " is quick to spot any uninvited guests.");
} else if (driver.drive <= 100) {
  console.log("Seems like the driver is not as fast as we thought");
} else {
  console.log("We have some serious thinking to do. These guys have a different plan than usual");
}
	};

//Object function with mutator
var ohNo = function () {
	driver.drive = 75;
	for (driver.drive <= 75;  driver.drive -= 25;) {
		console.log("Looks like they are slowing down. They are only going " + driver.drive + " an hour. We just might catch them!");
		for (money = 10; money <= 20; money += 5) {
			console.log("What are they doing? They're throwing " + money + " money bags at us!");
			}
		}
		};

//Accessor method		
var damage = areas.toString();

//Procedure function
var goPlan = function () {
	for (var goMan = 0; goMan < areas.length; goMan++){
	var goHere = areas[goMan], time = spotTime[goMan];
	console.log("They planned go to the " + goHere + " for " + time + " minutes.");
	}
	console.log("We finally caught these guys. Less crime out in the street. Good job, Boss!");
	};
	
intro();

console.log("Here is the list of the criminals you wanted, Boss.");

handleData(json2);

console.log("It looks like they already have a plan.");

planThink();

console.log("What are you thinking, Boss?");

whoWill();

console.log("Smith: We have the plan, so let's get to work!");

//Array function
var theSpots = function (spot) {
	 
            var spotName = areas[spot];
            var minutesMove = spotTime[time];
            console.log("Alright guys we are heading to the " + spotName + " for no more than " + minutesMove + " minutes. The timer is going. Let's move!");         
            for (var minutes = 0; minutes < minutesMove; minutes += 5) {
                    var minutesRemain = minutesMove - minutes;
                    console.log("We have " + minutesRemain + " minutes left. " + minutes + " minutes have past! Come on let's go!");
            }
            console.log("Alright, let's go before the cops catch us!");
        };

        for (var time = 0; time < areas.length; time++) {
            theSpots(time); 
            
        };
        
console.log("Smith: Good work guys. We need to get out of town before the cops track us down.");

console.log("Boss, we are too late! The guys completed the robbery, and their safe-house is cleared. They can be out of town by now!");

console.log("No! I see them straight ahead! Looks like they are having car troubles.");

ohNo();

console.log("We got them, Boss! The other officers just called and told us there was no damage to the " + damage + " . They were clean, but we still have evidence.");

goPlan();