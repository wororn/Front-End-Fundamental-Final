document.addEventListener('DOMContentLoaded', function() {
    let calendarEl = document.getElementById('calendar');
   
    let month = currentTime.getMonth() + 1 ;
    let bulan;
      
if (month=="1"){
  bulan = "01";
  }
else 
if (month=="2"){
  bulan = "02";
  }
else
  if (month=="3"){
  bulan = "03";
  }
else
if (month=="4"){
  bulan = "04";
  }
  
if (month=="5"){
  bulan = "05";
  }

  else
 if (month==6){
  bulan = "06";
  }
  else
  
  if (month==7){
  bulan = "07";
  }
  else
 if (month==8){
  bulan = "08";
  }
else
 if (month==9){
  bulan = "09";
  }
  else
if (month==10){
  bulan = "10";
  }
else
	if (month==11){
  bulan = "11";
  }
  else
  
  if (month==12){
  bulan = "12";
  }
 

    let calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: 'prev,next',
        center: 'title',
        right: 'today'
      },
      initialDate: '2020-'+bulan+'-12',
      editable: true,
      navLinks: true, // can click day/week names to navigate views
      dayMaxEvents: true, // allow "more" link when too many events
      events: {
        url: 'php/get-events.php',
        failure: function() {
          document.getElementById('script-warning').style.display = 'block'
        }
      },
      loading: function(bool) {
        document.getElementById('loading').style.display =
          bool ? 'block' : 'none';
      }
    });

    calendar.render();
  });
