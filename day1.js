var date =prompt();
var myBirthDate = new Date(date);
var curDate = new Date();
alert(myBirthDate.getDay());
var diff = Math.floor(curDate.getTime()-myBirthDate.getTime());
var d = 1000*60^60^24*365;
var old=diff/d;
alert(parseInt(old));