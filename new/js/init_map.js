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
	//		if(confirm("ADD MARKER HERE?")){
				var name = prompt("Name")
				mark = new L.Marker([e.latlng.lat, e.latlng.lng], {icon: Keep_4}).bindPopup("txt");
				map.addLayer(mark)
              $("#text").val($("#text").val()+"["+e.latlng.lat+","+e.latlng.lng+",\""+name+"\"],\n")
        
         //       circle = L.circle([e.latlng.lat, e.latlng.lng],(1), {color: "#ffcc00", fillColor:"#ffcc00",fillOpacity:0.75}).addTo(map)
		//		$("#text").val($("#text").val()+"["+e.latlng.lat+","+e.latlng.lng+"],\n")
	
	//		}

		};
		map.on('click', onMapClick);
		

		
		//Loop through the keep markers (declared on marker.js) array and add markers to layer
		var arrKeeps_4 = []
        var arrKeeps_3 = []
        var arrKeeps_2 = []
        
		//Loop through the village markers (declared on marker.js) array and add markers to layer
		var arrVillages_4 = []
        var arrVillages_3 = []
        var arrVillages_2 = []        
        
        for (var i=0; i<keeps.length; i++) {
           
            var lat = keeps[i][0];
            var lon = keeps[i][1]; 
            var popupText = keeps[i][2];
            
             var marker_4 = new L.Marker([lat, lon], {icon: Keep_4, title:popupText}).on('click',function(e){$("#extras").html("<iframe style='width:100%;height:100%' src='http://itp.wikia.com/"+this.title+"'></iframe>")});
             var marker_3 = new L.Marker([lat, lon], {icon: Keep_3}).bindPopup(popupText);
             var marker_2 = new L.Marker([lat, lon], {icon: Keep_2}).bindPopup(popupText);
             
			arrKeeps_4.push(marker_4)
            arrKeeps_3.push(marker_3)
            arrKeeps_2.push(marker_2)
        }
		var keepLayer_4 = L.layerGroup(arrKeeps_4);
        var keepLayer_3 = L.layerGroup(arrKeeps_3);
        var keepLayer_2 = L.layerGroup(arrKeeps_2);

        
       for (var i=0; i<villages.length; i++) {
           
            var lat = villages[i][0];
            var lon = villages[i][1]; 
            var popupText = villages[i][2];
            
             var marker_4 = new L.Marker([lat, lon], {icon: Village_4}).bindPopup(popupText);
             var marker_3 = new L.Marker([lat, lon], {icon: Village_3}).bindPopup(popupText);
             var marker_2 = new L.Marker([lat, lon], {icon: Village_2}).bindPopup(popupText);
             
			arrVillages_4.push(marker_4)
            arrVillages_3.push(marker_3)
            arrVillages_2.push(marker_2)
        }
		var villageLayer_4 = L.layerGroup(arrVillages_4);
        var villageLayer_3 = L.layerGroup(arrVillages_3);
        var villageLayer_2 = L.layerGroup(arrVillages_2);
        
        
        
        
        map.on('zoomend',function(e,m){
            e.target.removeLayer(keepLayer_2);
            e.target.removeLayer(keepLayer_3);
            e.target.removeLayer(keepLayer_4);
            
            e.target.removeLayer(villageLayer_2);
            e.target.removeLayer(villageLayer_3);
            e.target.removeLayer(villageLayer_4);

            switch(e.target._zoom){
                case 1:
                break;
                
                case 2:
                    e.target.addLayer(keepLayer_2);
                    e.target.addLayer(villageLayer_2);
                break;
                
                case 3:
                    e.target.addLayer(keepLayer_3);
                    e.target.addLayer(villageLayer_3);
                break;
                
                case 4:
                    e.target.addLayer(keepLayer_4);
                    e.target.addLayer(villageLayer_4);
                break;
                
            }
        })
        
        
        
        
        
        
        
        
        
        
   
        
    var Dorne = L.polygon([
[-78.17058224978182,-131.32115185260773],
[-78.34941069014627,-130.88169872760773],
[-78.36714623906053,-129.91490185260773],
[-78.49055166160312,-129.4754487276077],
[-78.52557254138316,-128.42076122760773],
[-78.64731965002211,-127.98130810260773],
[-78.80197997387756,-128.33287060260773],
[-78.83606545333527,-129.4754487276077],
[-78.97138592818217,-129.82701122760773],
[-79.10508621944108,-129.4754487276077],
[-79.10508621944108,-128.24497997760773],
[-79.25358567155389,-127.80552685260771],
[-79.23718500609334,-127.01451122760773],
[-79.36770077764092,-126.39927685260771],
[-79.52864723963516,-126.92662060260773],
[-79.7029066676203,-126.39927685260771],
[-79.84334640007744,-126.92662060260773],
[-79.85883334713466,-127.71763622760773],
[-79.99716840285254,-128.33287060260773],
[-80.01242320181375,-129.29966747760773],
[-80.11856387883782,-129.82701122760773],
[-80.14868414142823,-130.88169872760773],
[-80.26825877186883,-131.32115185260773],
[-80.34226182910454,-130.96958935260773],
[-80.35699541661764,-129.91490185260773],
[-80.50311210185099,-129.38755810260773],
[-80.51760256598752,-128.15708935260773],
[-80.40106272066014,-127.62974560260773],
[-80.35699541661764,-126.75083935260773],
[-80.26825877186883,-126.13560497760771],
[-80.26825877186883,-125.34458935260774],
[-80.14868414142823,-124.90513622760771],
[-80.11856387883782,-123.76255810260773],
[-79.95126549716151,-123.32310497760773],
[-79.84334640007744,-123.76255810260773],
[-79.73428059335231,-123.14732372760773],
[-79.71860546904043,-122.35630810260773],
[-79.5446087817067,-122.00474560260771],
[-79.40008452319314,-122.53208935260771],
[-79.40008452319314,-123.41099560260774],
[-79.26996163854977,-123.93833935260771],
[-79.08846164655658,-123.49888622760771],
[-78.9545598577521,-123.85044872760773],
[-78.9545598577521,-124.72935497760773],
[-78.80197997387756,-125.34458935260774],
[-78.78489872650538,-126.39927685260771],
[-78.664607712059,-126.92662060260773],
[-78.45542534118533,-126.57505810260771],
[-78.33164847573174,-127.71763622760773],
[-78.18858618658851,-128.5086518526077],
[-78.17058224978182,-129.38755810260773],
[-77.9890486243739,-129.91490185260773],
[-77.9890486243739,-130.88169872760773]
],{color:"#ffcc00"}).addTo(map);
    
  