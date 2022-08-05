


      fetch('https://covid19.mathdro.id/api/countries/Indonesia')
      .then(response => response.json())
      .then(data => {

      console.log(data);
	  document.getElementById("covid").innerHTML = `
      <br>Terkonfirmasi: ${data.confirmed.value}
      <br>Sembuh: ${data.recovered.value}
      <br>Meninggal: ${data.deaths.value}
      <br>Tgl. Update : ${data.lastUpdate}
     `
      });
