
 
        var map = L.map('map').setView([50.85, -8.04], 2);
        L.tileLayer('img/map/{z}/{y}-{x}.jpeg', {
            minZoom: 0,
            maxZoom: 5,
            attribution: 'ITP Map by /u/pauix',
            tms: false,
			noWrap: true,
			maxBoundsViscosity: 1.0
        }).addTo(map);
		
		/*This function gives you Lat Long of what you click on */
		var popup = L.popup();
		function onMapClick(e) {
			popup
				.setLatLng(e.latlng)
				.setContent("You clicked the map at " + e.latlng.toString())
				.openOn(map);
		};
		map.on('click', onMapClick);
		

		
		
		//Loop through the markers (declared on marker.js) array and add markers to layer
		var arrMarkers = []
         for (var i=0; i<markers.length; i++) {
           
            var lat = markers[i][0];
            var lon = markers[i][1];
			var icn = markers[i][2];
            var popupText = markers[i][3];
            
             var marker = new L.Marker([lat, lon], {icon: icn}).bindPopup(popupText);
			arrMarkers.push(marker)
         }
		var markerLayer = L.layerGroup(arrMarkers).addTo(map);

		
		// Hide markers if the user zooms out
		map.on('zoomend', function () {
			if (map.getZoom() <= 2 && map.hasLayer(markerLayer)) {
				map.removeLayer(markerLayer);
			}
			if (map.getZoom() > 2 && map.hasLayer(markerLayer) == false)
			{
				map.addLayer(markerLayer);
			}   
		}); 
		