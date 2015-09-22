var fn = function() {
  $('#name-quest').slideToggle();
  var fnA = $('#first_nameA').val(); //use what is written in the textbox 
  $('#choice1').append("Welcome " + fnA + ". I do not think we have met before. Welcome to Mr. Bigglesworth fortress." +
  "I am really bad with names; so, I will call you seeker. I hope you do not mind. Now seeker why are you here?");
  $('#cl12').text("Broken Teddy Bear");
  $('#cl13').text("Lost");
  $('#cl14').text("Unknown");
};
var bt = function(){
  $('#choice2').append("It truly is sad how bad Bigglesworth toys has become these days. When I was your age " +
  " no one made toys as good as us. I will make a note to check on the teddy bear manufacturing division. Would you like to get him fixed?");
  $('#cl12').text("Yes");
  $('#cl13').text("No");
  $('#cl14').text("Not Sure");
};
var no = function() {
  $('#choice3').append("'Very few people have the honor of coming to Bigglesworth Fortress and you come here to waste my time? " +
    " That is not good at all. I believe you can find your own way back.'' With that the man turns and heads back through the massive fortress gates. " +
    "You are left wondering what mysteries await inside. Perhaps when you have a problem that Godfred can help with you...you will know");
  $('#pas').slideToggle();
};
var lt = function(){

};
var un = function(){

};

var jq = function() {
  $('#name-quest').slideToggle();
  $('#opening').fadeOut(1000);
  return false;
};
// var name =
//   $('#choice1').append("Welcome " + name + ". I do not think we have met before. Welcome to Mr. Bigglesworth fortress." +
//   "I am really bad with names; so, I will call you seeker. I hope you do not mind. Now seeker why are you here?");
var cl1 = function() {
  $('#choice1').append("Hello " + name + ". I do not think we have met before, but welcome to Mr. Bigglesworth fortress." +
  " I am really bad with names; so, I will call you seeker. I hope you do not mind. Now seeker why are you here?");
};
// var cl2 =
// var cl3 =
