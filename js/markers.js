  /********************************************/
 /**				MARKERS					**/
/********************************************/

// Define marker icons
// For each region add an image to 'img/marker/' 
var SL = L.icon({iconUrl: 'img/marker/SL.png',iconSize: [32, 74]})
var CL = L.icon({iconUrl: 'img/marker/CL.png',iconSize: [32, 74]})
var Dorne = L.icon({iconUrl: 'img/marker/Dorne.png',iconSize: [32, 74]})
var II = L.icon({iconUrl: 'img/marker/II.png',iconSize: [32, 74]})
var North = L.icon({iconUrl: 'img/marker/North.png',iconSize: [32, 74]})
var NotWesteros = L.icon({iconUrl: 'img/marker/NotWesteros.png',iconSize: [32, 74]})
var Reach = L.icon({iconUrl: 'img/marker/Reach.png',iconSize: [32, 74]})
var RL = L.icon({iconUrl: 'img/marker/RL.png',iconSize: [32, 74]})
var TrueNorth = L.icon({iconUrl: 'img/marker/TrueNorth.png',iconSize: [32, 74]})
var Vale = L.icon({iconUrl: 'img/marker/Vale.png',iconSize: [32, 74]})
var Wall = L.icon({iconUrl: 'img/marker/Wall.png',iconSize: [32, 74]})
var West = L.icon({iconUrl: 'img/marker/West.png',iconSize: [32, 74]})

// Define the markers
var markers = [
	// Each marker will be a line with the following format:
	//		[Lat, Long, icon, 'popup']
	// "Lat" and "Long" are the two numbers obtained by clicking on the map.
	// icon is one of the names defined above
	// popup is the text that will display on screen
	[-29.57346, -98.08594, SL, "Blackhaven"],
	[73.93463448326798,-126.43066406249999,North,"Bear Island"],
[77.30286448417467,-89.6484745,Wall,"Castle Black"]

]