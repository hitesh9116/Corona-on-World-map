function updateMap() {
    console.log("Updating map with realtime data")
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected;
                if (cases<=10){
                    color = "rgb(0, 255, 0)";
                    // height = "10px";
                }

                else if(cases<=100){
                    color = "rgb(400, 255, 0)";
                }

                else{
                    color = `rgb(${cases}, 0, 0)`;
                    // height = "(${cases}/10)px";
                }

                // Markers on the map
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                }).setLngLat([longitude, latitude])
                .addTo(map); 
            });
        })
}

//The data will be updated every 3 hours
let interval = 2000;                   
setInterval( updateMap, interval); 