  /********************************************/
 /**				MARKERS					**/
/********************************************/

// Define marker icons
// For each region add an image to 'img/marker/' 
var SL = L.icon({iconUrl: 'img/marker/SL.png',iconSize: [32, 74]})
var SLcapitol = L.icon({iconUrl: 'img/marker/SLcapitol.png',iconSize: [32, 74]})
var SLfort = L.icon({iconUrl: 'img/marker/SLfort.png',iconSize: [32, 74]})
var SLtown = L.icon({iconUrl: 'img/marker/SLtown.png',iconSize: [32, 74]})

var CL = L.icon({iconUrl: 'img/marker/CL.png',iconSize: [32, 74]})

var Dorne = L.icon({iconUrl: 'img/marker/Dorne.png',iconSize: [32, 74]})

var II = L.icon({iconUrl: 'img/marker/II.png',iconSize: [32, 74]})

var North = L.icon({iconUrl: 'img/marker/North.png',iconSize: [32, 74]})
var NorthCity = L.icon({iconUrl: 'img/marker/NorthCity.png',iconSize: [32, 74]})
var NorthTown = L.icon({iconUrl: 'img/marker/NorthTown.png',iconSize: [32, 74]})
var NorthCapitol = L.icon({iconUrl: 'img/marker/NorthCapitol.png',iconSize: [32, 74]})
var NorthFort = L.icon({iconUrl: 'img/marker/NorthFort.png',iconSize: [32, 74]})

var Essos = L.icon({iconUrl: 'img/marker/NotWesteros.png',iconSize: [32, 74]})
var EssosFort = L.icon({iconUrl: 'img/marker/EssosFort.png',iconSize: [32, 74]})
var EssosRuin = L.icon({iconUrl: 'img/marker/EssosRuin.png',iconSize: [32, 74]})
var EssosTown = L.icon({iconUrl: 'img/marker/EssosTown.png',iconSize: [32, 74]})
var EssosCity = L.icon({iconUrl: 'img/marker/EssosCity.png',iconSize: [32, 74]})
var EssosBigCity = L.icon({iconUrl: 'img/marker/EssosBigCity.png',iconSize: [32, 74]})

var SothoryosRuin = L.icon({iconUrl: 'img/marker/SothoryosRuin.png',iconSize: [32, 74]})

var Reach = L.icon({iconUrl: 'img/marker/Reach.png',iconSize: [32, 74]})

var RL = L.icon({iconUrl: 'img/marker/RL.png',iconSize: [32, 74]})

var TrueNorth = L.icon({iconUrl: 'img/marker/TrueNorth.png',iconSize: [32, 74]})

var Vale = L.icon({iconUrl: 'img/marker/Vale.png',iconSize: [32, 74]})
var Valecapitol = L.icon({iconUrl: 'img/marker/Valecapitol.png',iconSize: [32, 74]})
var Valecity = L.icon({iconUrl: 'img/marker/Valecity.png',iconSize: [32, 74]})
var Valetown = L.icon({iconUrl: 'img/marker/Valetown.png',iconSize: [32, 74]})
var Valefort = L.icon({iconUrl: 'img/marker/Valefort.png',iconSize: [32, 74]})

var Wall = L.icon({iconUrl: 'img/marker/Wall.png',iconSize: [32, 74]})

var West = L.icon({iconUrl: 'img/marker/West.png',iconSize: [32, 74]})

// Define the markers
var markers = [
	// Each marker will be a line with the following format:
	//		[Lat, Long, icon, 'popup']
	// "Lat" and "Long" are the two numbers obtained by clicking on the map.
	// icon is one of the names defined above
	// popup is the text that will display on screen
//Stormlands
[-31.428663117358596,-114.697265625,SL,"Lover's Hill"],
[-32.76880048488168,-116.27929687499999,SL,"Nightsong"],
[-29.228890030194215,-107.841796875,SL,"Harvest Hall"],
[-30.524413269923986,-101.6015625,SL,"Blackhaven"],
[-25.562265014427492,-96.328125,SL,"Summerhall"],
[-21.37124437061831,-98.525390625,SL,"Broad Arch"],
[-25.720735134412095,-89.912109375,SL,"Grandview"],
[-31.503629305773018,-90.87890625,SL,"Stonehelm"],
[-29.305561325527712,-87.5390625,SL,"Crow's Nest"],
[-25.40358497318669,-82.96875,SL,"Griffin's Roost"],
[-28.613459424004414,-71.015625,SL,"Rain House"],
[-32.175612478499325,-73.740234375,SL,"Holywater"],
[-33.28461996888768,-77.6953125,SL,"Mistwood"],
[-36.17335693522159,-78.134765625,SLtown,"Weeping Town"],
[-35.02999636902566,-71.103515625,SL,"Greenstone"],
[-20.961439614096825,-69.78515625,SL,"Evenfall Hall"],
[-22.187404991398775,-78.22265625,SLcapitol,"Storm's End"],
[-15.876809064146757,-74.091796875,SL,"Parchments"],
[-12.811801316582606,-80.068359375,SL,"Haystack Hall"],
[-17.056784609942554,-82.44140625,SL,"Bronzegate"],
[-18.062312304546726,-92.10937499999999,SL,"Felwood"],
[-13.838079936422462,-93.955078125,SL,"Fawnton"],
[-33.06392419812064,-100.8984375,SLfort,"Caelen's Reach"],
[-11.350796722383672,-76.552734375,SLfort,"Durran's Grief"],
[-11.95334939364343,-86.923828125,SLfort,"Forrestwatch"],
[-29.228890030194215,-97.646484375,SL,"Gallowsgrey"],
//Vale
[27.21555620902969,-88.06640625,Vale,"Gates of the Moon"],
[28.844673680771795,-87.71484375,Valecapitol,"The Eyrie"],
[25.085598897064777,-92.197265625,Vale,"The Bloody Gate"],
[15.623036831528264,-79.453125,Valetown,"Wickendon"],
[25.085598897064777,-67.67578124999999,Valecity,"Gulltown"],
[26.980828590472107,-61.52343749999999,Vale,"Witch Isle"],
[27.761329874505233,-66.181640625,Vale,"Runestone"],
[29.611670115197406,-71.982421875,Vale,"Old Anchor"],
[33.211116472416855,-71.89453125,Vale,"Longbow Hall"],
[38.548165423046584,-66.09375,Vale,"Champion's Hall"],
[34.016241889667015,-83.75976562499999,Vale,"Heart's Home"],
[37.85750715625203,-80.15625,Vale,"Snakewood"],
[41.77131167976407,-77.431640625,Vale,"Coldwater Burn"],
[46.37725420510028,-69.60937499999999,Vale,"The Paps"],
[45.767522962149904,-78.134765625,Vale,"Pebble"],
[45.02695045318546,-83.84765625,Vale,"The Fingers"],
[47.754097979680026,-90,Valetown,"Three Sisters"],
[41.83682786072714,-88.59374999999999,Vale,"Ninestars"],
[41.64007838467894,-94.833984375,Valefort,"The Bite's Teeth"],
[34.66935854524545,-94.130859375,Vale,"Strongsong"],
[38.61687046392973,-85.60546875,Vale,"Newkeep"],
[31.728167146023935,-76.904296875,Vale,"Cloudspire"],
[28.14950321154457,-79.89257812499999,Vale,"Ironoaks"],
[25.878994400196202,-77.6953125,Vale,"Grey Glen"],
[24.367113562651276,-81.474609375,Vale,"Redfort"],
[21.94304553343818,-78.046875,Valefort,"Little Redfort"],
[27.371767300523047,-83.583984375,Vale,"Hardhold"],
//North
[47.040182144806664,-112.763671875,North,"Greywater Watch"],
[51.45400691005982,-107.40234375,North,"Moat Cailin"],
[50.56928286558243,-94.39453125,North,"Oldcastle"],
[56.12106042504407,-98.525390625,NorthCity,"White Harbor"],
[58.44773280389084,-80.947265625,North,"Ramsgate"],
[57.27904276497778,-67.8515625,North,"Widow's Watch"],
[62.59334083012024,-94.306640625,North,"Sheepshead Hills"],
[64.35893097894458,-90.17578124999999,North,"Hornwood"],
[68.33437594128185,-87.5390625,North,"The Dreadfort"],
[70.61261423801925,-70.400390625,North,"Karhold"],
[73.47848507889992,-91.93359375,North,"Last Hearth"],
[75.47513069090051,-70.48828125,North,"Kingshouse"],
[74.47290269579455,-109.6875,North,"Nothern Mountains"],
[71.60828252210263,-108.28125,North,"Highpoint"],
[67.30597574414466,-108.984375,NorthCapitol,"Winterfell"],
[63.66576033778838,-106.25976562499999,North,"Castle Cerwyn"],
[62.71446210149774,-123.22265625000001,North,"Tallhart Square"],
[56.41390137600676,-119.00390625,North,"Goldgrass"],
[57.562995459387146,-124.27734374999999,NorthTown,"Barrowton"],
[59.933000423746336,-142.03125,North,"The Rills"],
[66.58321725728175,-130.078125,North,"Bypine"],
[71.35706654962706,-142.03125,North,"Sea Dragon Point"],
[70.58341752317065,-124.71679687499999,North,"Deepwood Motte"],
[71.32895017791999,-117.94921874999999,North,"Ironrath"],
[73.89811065820952,-128.759765625,North,"Bear Island"],
[47.45780853075031,-138.779296875,North,"Flint's Finger"],
[53.69670647530323,-134.47265625,NorthFort,"Ironguard"],

// Bloodstone
[-40.78054143186031,-64.423828125,EssosFort,"Bloodstone (T1 Fort and T1 Port)"],


// Free Cities
[41.3108238809182,-44.12109374999999,EssosBigCity,"Braavos"],
[-2.7235830833483856,-43.681640625,EssosBigCity,"Pentos"],
[14.093957177836224,-15.205078125,EssosBigCity,"Norvos"],
[-2.0210651187669897,11.337890625,EssosBigCity,"Qohor"],
[-29.91685223307016,-33.57421875,EssosBigCity,"Myr"],
[-50.95842672335992,-42.01171875,EssosBigCity,"Lys"],
[-33.797408767572485,-54.404296875,EssosBigCity,"Tyrosh"],
[36.24427318493909,-21.97265625,EssosBigCity,"Lorath"],
[-51.72702815704775,5.625,EssosBigCity,"Volantis"],

//// Ruins in Essos
[-52.908902047770255,46.142578125,EssosRuin,"Elyria"],
[-61.8146638946839,60.99609375,EssosRuin,"Velos"],
[-57.23150299147891,59.32617187499999,EssosRuin,"Ghozai"],
[1.3182430568620136,-28.125,EssosRuin,"Ghoyan Drohe"],
[-7.536764322084078,-12.480468749999998,EssosRuin,"Ny Sar"],
[-67.67608458198097,35.68359375,EssosRuin,"Tyria"],
[-68.91100484562018,21.533203125,EssosRuin,"Oros"],
[-71.01695975726373,31.904296874999996,EssosRuin,"Valyria"],

// Sothoryos 
[-80.8588748843299,74.619140625,SothoryosRuin,"Zamettar"],
[-83.03688198552364,81.5625,SothoryosRuin,"Yeen"],
[-82.48333497678894,62.75390625,SothoryosRuin,"Gogossos"],
[-79.68718415450823,132.099609375,SothoryosRuin,"Gorosh"]

]