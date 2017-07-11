window.onload = function(){
  function yenotCalend() {
    var currentDate = new Date();
    var US = false; //beging from Monday or Sunday
    this.changeUS = function(flag) {US = flag;}
    this.seconnds = function() {return currentDate.getSeconds();}
    this.minutes = function() {return currentDate.getMinutes();}
    this.hours = function() {return currentDate.getHours();}
    this.day = function() {return currentDate.getDate();}
    this.month = function() {return currentDate.getMonth();}
    this.year = function() {return currentDate.getFullYear();}
    this.dayOfWeek = function() {return currentDate.getDay();}
    this.allWeek = function(myDate) { //return array of all days of week
      var currentWeek = [];
      var currentWeekDay = (myDate) ? myDate.getDay() : currentDate.getDay();
      currentWeekDay = (currentWeekDay === 0 && !US) ? 7 : currentWeekDay;
      currentWeekDay -= !US;
      var beginOfWeekDay = (myDate) ? myDate : new Date();
      beginOfWeekDay.setDate(beginOfWeekDay.getDate() - currentWeekDay);
      for(var i = 0; i < 7; i++) {
              currentWeek.push(beginOfWeekDay.getDate());
              beginOfWeekDay.setDate(beginOfWeekDay.getDate() + 1);
      }
      return currentWeek;
    }
    this.allMonth = function(myDate) { //return array of all days of mounth
      var currentMonth = [];
      var beginOfMonth = (myDate) ? myDate : new Date();
      beginOfMonth.setDate(1); //
      for(var i = 1; i < 7; i++) {
        currentMonth.push(this.allWeek(beginOfMonth));
        beginOfMonth.setDate(i*7);
      }
      return currentMonth;
    }
  }
  /*document.getElementById('canvas').addEventListener('click',function(evt){
                                      alert(evt.clientX + ',' + evt.clientY);
                                      },false);
  document.getElementById('canvas2').addEventListener('click',function(evt){
                                      alert(evt.clientX + ',' + evt.clientY);
                                    },false);*/
  var tmpCalend = new yenotCalend();
  //tmpCalend.changeUS(true);
  var a = tmpCalend.allMonth(new Date("2017/06/31"));
  //document.getElementById('date').innerHTML = tmpCalend.allWeek(new Date("2017/06/29"));
  document.getElementById('date').innerHTML = a[0] +
                                              '<br>'+ a[1] +
                                              '<br>'+ a[2] +
                                              '<br>'+ a[3] +
                                              '<br>'+ a[4] +
                                              '<br>'+ a[5];

}
