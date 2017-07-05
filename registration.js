jQuery(document).ready(function(){
  $.ajax({
    type: 'POST',
    url: 'http://185.18.52.203:8080/yenot3/registration/start/call',
    //http://185.18.52.203
    contentType: 'application/json',
    //crossDomain: true,
    dataType: 'json',
    //headers: { 'Access-Control-Allow-Origin': '*' },
    //headers: 'MTp5ZW5vdA==',
    //headers: 'Access-Control-Allow-Origin',
    //imei: 354156050670282
    data: JSON.stringify({"number": "375445563743"}),
    //beforeSend: function(xhr) {
    //        xhr.setRequestHeader ("Authorization", "Basic " + "MTp5ZW5vdA==");},
    error: function(jqXHR, textStatus, errorThrown) {$("p").text(textStatus);},
    success: function(data){$("p").text(data["password"]);}
  });
}) //End of Ready
