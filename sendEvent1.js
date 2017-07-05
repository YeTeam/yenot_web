window.onload = function(){
  var urlEvent = 'http://185.18.52.203:8080/yenot3/resources/1/events/create';
  sendEvent(urlEvent,function(data){$('p').text(data);});
} //End of Ready

function sendEvent(url, callbackRecive) {
  var f = callbackRecive || function(data) {};
  var xhr = new XMLHttpRequest();
  var jsonData = JSON.stringify({
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
  });
  //xhr.onreadystatechange = function() {
  //  if(xhr.readyState == 4 && xhr.status == 200) {
  xhr.onload = function() {
      f(xhr.responseText);
  //  }
  }
  xhr.open('POST',url,true);
  xhr.withCredentials = true;
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  //xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); //not nessesary
  //xhr.setRequestHeader('Allow',' GET, POST, HEAD, OPTIONS');  //not nessesary
  //xhr.setRequestHeader('Accept', 'application/json' );        //not nessesary
  xhr.setRequestHeader("Authorization", "Basic MTp5ZW5vdA==");
  xhr.send(jsonData);
}
