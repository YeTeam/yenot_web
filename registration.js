jQuery(document).ready(function(){
  $.ajax({
    type: 'POST',
    url: 'http://185.18.52.203:8080/yenot3/registration/start/call',
    contentType: 'application/json',
    dataType: 'json',
    //imei: 354156050670282
    data: JSON.stringify({
      "nickname":"Arthur",
      "password":"BSnf&MPW\/H-",
      "number":375445563743,
      "imei":354156050670282,
      "numbers":[375298477307, 375332439170]
    }),
    error: function(jqXHR, textStatus, errorThrown) {$("p").text(textStatus);},
    success: function(data){$("p").text(JSON.stringify(data));}
  });
}) //End of Ready
