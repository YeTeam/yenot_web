jQuery(document).ready(function(){
  $.ajax({
    type: 'POST',
    url: 'http://185.18.52.203:8080/yenot3/resources/1/events/create',
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({
      "name":"event",
    	"lat":0,
    	"lon":0,
    	"timeZone":null,
    	"maxMembers":10,
    	"description":"descript",
    	"type":2,
    	"locationName":null,
    	"locationAddress":null,
    	"eventDates":[{"clientId":1,
                     "datetimeStart":99999956578900,
                     "datetimeEnd":99999978745401,
                     "timeStart":100,
                     "timeEnd":200,
                     "days":[1,3,5],
                     "periodInterval":null,
                     "subeventId":null,
                     "period":"ONCE" }],
    	"members": [2439170,375257514302]
    }),
    beforeSend: function(xhr) {
            xhr.setRequestHeader ("Authorization", "Basic MTp5ZW5vdA==");
            },
    error: function(jqXHR, textStatus, errorThrown) {$("p").text(textStatus);},
    success: function(data){$("#text").text(JSON.stringify(data)); $("#data").text(data["data"]["message"]);}
  });
}) //End of Ready
