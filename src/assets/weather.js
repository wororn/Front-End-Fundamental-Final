let x = document.getElementById("cuaca");
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(weatherdata);
      } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
    
    function weatherdata(position) {

      fetch('https://api.openweathermap.org/data/2.5/weather?lat='+position.coords.latitude+'&lon='+position.coords.longitude+'&appid=b2c336bb5abf01acc0bbb8947211fbc6')
      .then(response => response.json())
      .then(data => {
      console.log(data);
	  
      document.getElementById("cuaca").innerHTML = `
      <br>Lon: ${data.coord.lon} 
      <br>Lat: ${data.coord.lat} 
      <br>Negara: ${data.sys.country} 
      <br>Wilayah: ${data.name}
      <br>Berawan: ${data.clouds.all}
      <br>Tekanan: ${data.main.pressure}
      <br>Kecepatan Angin: ${data.wind.speed}
      <br>Kelembaban: ${data.main.humidity}
      <br>Temprature: ${data.main.temp} 

      `
      });
    }