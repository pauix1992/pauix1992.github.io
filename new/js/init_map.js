        var map = L.map('map').setView([0, 0], 1);
        L.tileLayer('img/map/{z}/{y}-{x}.jpeg', {
            minZoom: 1,
            maxZoom: 4,
            attribution: 'ITP Map by /u/pauix',
            zomSnap: 0.25,
            tms: false,  
			noWrap: true,
            maxBounds:new L.LatLngBounds(new L.LatLng(86, -180), new L.LatLng(-86, 0)),
			maxBoundsViscosity: 1.0
        }).addTo(map);
        

		  
		/*This function gives you Lat Long of what you click on */
		
		function onMapClick(e) {
			if(confirm("ADD MARKER HERE?")){
				var mrk = "keep_4";
				var txt = prompt("Text")
				m_icon = L.icon({iconUrl: 'img/marker/'+mrk+'.png',iconSize: [12, 18]})
				mark = new L.Marker([e.latlng.lat, e.latlng.lng], {icon: m_icon}).bindPopup(txt);
				map.addLayer(mark)
	
				$("#text").val($("#text").val()+"["+e.latlng.lat+","+e.latlng.lng+","+mrk+",\""+txt+"\"],\n")
	
			}

		};
		map.on('click', onMapClick);
		

		
		//Loop through the keep markers (declared on marker.js) array and add markers to layer
		var arrKeeps_4 = []
        var arrKeeps_3 = []
         for (var i=0; i<keeps.length; i++) {
           
            var lat = keeps[i][0];
            var lon = keeps[i][1]; 
            var popupText = keeps[i][2];
            
             var marker_4 = new L.Marker([lat, lon], {icon: Keep_4}).bindPopup(popupText);
             var marker_3 = new L.Marker([lat, lon], {icon: Keep_3}).bindPopup(popupText);
			arrKeeps_4.push(marker_4)
            arrKeeps_3.push(marker_3)
         }
		var keepLayer_4 = L.layerGroup(arrKeeps_4);
        var keepLayer_3 = L.layerGroup(arrKeeps_3);

        
        map.on('zoomend',function(e,m){
            map.removeLayer(keepLayer_3);
            map.removeLayer(keepLayer_4);
            switch(e.target._zoom){
                case 1:
                break;
                
                case 2:
                break;
                
                case 3:
                    map.addLayer(keepLayer_3);
                break;
                
                case 4:
                    map.addLayer(keepLayer_4);
                break;
                
            }
        })