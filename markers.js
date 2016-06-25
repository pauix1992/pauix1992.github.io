  /********************************************/
 /**				MARKERS					**/
/********************************************/

// Define marker icons
// For each region add an image to 'img/marker/' 
var SL = L.icon({iconUrl: 'img/marker/SL.png',iconSize: [32, 37]})

// Define marker positions
var markers = [
	// Each marker will be a line with the following format:
	//		[Lat, Long, icon, 'popup']
	[-29.57346, -98.08594, SL, "Blackhaven"],
]