// basic syntax is      TweenMax.to(target, duration, {vars});
// also, for this particular animation to work, greensock.css file has to have .logo{position:relative}; in order for it to work
//  this is because DOM elements do not have a left property, they have a css that controls the left property, so what's happening is that TweenMax recognizes that the target of the Tween is a DOM element, the properties that are being Twenened are css properties, and it's passing those values off to the css plug-in which then changes those values and applies them to the in-line style
// normally in css the backgroundColor is background-color with a hyphen, but in JavaScript, that hyphen is seen as a subtraction sign, so camelCase is used instead, the same applies to other properties usually with a hyphen in css
// you can also specify the target by passing in an exact reference to a DOM element as a target, such as by doing TweenMax.to(document.getElementById("header"), 1, {left:600})
// or also, if you're going to be using a target more than once, it's recommended to create a reference(create a variable ) to that target and then pass that variable to the Tween, this allows you to search the DOM for the element just once, and then TweenMax knows exactly which element to use. see example on next line:
// to do what the line above states, here's an example    var header = document.getElementById("header") then TweenMax.to(header, 1, {left:600}) TweenMax.to(header, 1, {opacity: 0, delay:1})
// on another note, you can also pass in a jquery selector as a target or an array of objects as in the following line:
// TweenMax.to($("h2.feature"), 1, {left:600}); TweenMax.to([header, thumb], 1, {opacity:0});
TweenMax.to(".logo", 2, {
  left:600, 
  backgroundColor:"#e6b3ff",
  padding:20, 
  borderColor:"gray",
  borderRadius:26
  });