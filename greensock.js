// basic syntax is      TweenMax.to(target, duration, {vars});
// also, for this particular animation to work, greensock.css file has to have .logo{position:relative}; in order for it to work
//  this is because DOM elements do not have a left property, they have a css that controls the left property, so what's happening is that TweenMax recognizes that the target of the Tween is a DOM element, the properties that are being Twenened are css properties, and it's passing those values off to the css plug-in which then changes those values and applies them to the in-line style
// normally in css the backgroundColor is background-color with a hyphen, but in JavaScript, that hyphen is seen as a subtraction sign, so camelCase is used instead, the same applies to other properties usually with a hyphen in css
TweenMax.to(".logo", 2, {
  left:600, 
  backgroundColor:"#e6b3ff",
  padding:20, 
  borderColor:"gray",
  borderRadius:26
  });