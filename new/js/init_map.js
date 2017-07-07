        var map = L.map('map').setView([0, 0], 1);
        L.tileLayer('img/map/{z}/{y}-{x}.jpeg', {
            minZoom: 1,
            maxZoom: 4,
            attribution: 'ITP Map by /u/pauix',
            tms: false,  
			noWrap: true,
            maxBounds:new L.LatLngBounds(new L.LatLng(86, -180), new L.LatLng(-86, 0)),
			maxBoundsViscosity: 1.0
        }).addTo(map);
		  
		/*This function gives you Lat Long of what you click on */
		
		function onMapClick(e) {
			if(confirm("ADD MARKER HERE=?")){
				var mrk = "keep_4";
				var txt = prompt("Text")
				m_icon = L.icon({iconUrl: 'img/marker/'+mrk+'.png',iconSize: [12, 18]})
				mark = new L.Marker([e.latlng.lat, e.latlng.lng], {icon: m_icon}).bindPopup(txt);
				map.addLayer(mark)
	
				$("#text").val($("#text").val()+"["+e.latlng.lat+","+e.latlng.lng+","+mrk+",\""+txt+"\"],\n")
	
			}

		};
		map.on('click', onMapClick);
		

		
		//Loop through the SL markers (declared on marker.js) array and add markers to layer
		var arrKeeps = []
         for (var i=0; i<keeps.length; i++) {
           
            var lat = keeps[i][0];
            var lon = keeps[i][1];
			var icn = keeps[i][2];
            var popupText = keeps[i][3];
            
             var marker = new L.Marker([lat, lon], {icon: icn}).bindPopup(popupText);
			arrKeeps.push(marker)
            alert(i);
         }
		var keepLayer = L.layerGroup(arrKeeps).addTo(map);
