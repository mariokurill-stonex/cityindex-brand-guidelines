
// init controller
var controller = new ScrollMagic.Controller();

var tweenLeadspace = TweenMax.staggerFromTo("#leadspace .section__details", 2, {transform: "translateY(0vh)",opacity: "1"}, {transform: "translateY(-10vh)",opacity: "0", ease: Linear.easeIn}, 1);
var sceneLeadspace = new ScrollMagic.Scene({
            triggerElement: "#trigger-leadspace", 
            triggerHook: 0,
            duration: "25%"
          })
          .setTween(tweenLeadspace)
          .addTo(controller);

// var tweenAbout = TweenMax.staggerFromTo("#about .section__details", 2, {transform: "scale(1)",filter: "blur(0px)",opacity: "1"}, {transform: "scale(2)",filter: "blur(40px)",opacity: "0", ease: Linear.easeIn}, 1);
// var sceneAbout = new ScrollMagic.Scene({
//            triggerElement: "#trigger-about", 
//            triggerHook: 0,
//            duration: "50%"
//          })
//          .setTween(tweenAbout)
//          .addTo(controller);

// build tween
var tweenAbout = TweenMax.staggerFromTo("#about .section__details .fire", 5, {transform: "scale(1.25)",filter: "blur(40px)",opacity: "0"}, {transform: "scale(1)",filter: "blur(0px)",opacity: "1", ease: Linear.easeIn}, 1);

// build scene
var sceneAbout = new ScrollMagic.Scene({
            triggerElement: "#trigger-about", 
            triggerHook: 0,
            duration: "250%"
          })
          .setTween(tweenAbout)
          .addTo(controller);

var tweenCase1 = TweenMax.staggerFromTo("#case-1 .section__details", 2, {transform: "translateY(0vh)",opacity: "1"}, {transform: "translateY(-10vh)",opacity: "0", ease: Linear.easeOut}, 1);
var sceneCase1 = new ScrollMagic.Scene({
            triggerElement: "#trigger-case-1", 
            triggerHook: 0,
            duration: "25%"
          })
          .setTween(tweenCase1)
          .addTo(controller);

var tweenCase1img1      = TweenMax.staggerFromTo("#case-1 .block-image--lcg-1", 2, {top: "50%", left: "50%"}, {top: "40%", left: "40%", ease: Linear.easeOut}, 1);
var sceneCase1img1      = new ScrollMagic.Scene({
            triggerElement: "#trigger-case-1-img", 
            triggerHook: 0.5,
            duration: "25%"
          })
          .setTween(tweenCase1img1)
          .addTo(controller);
var tweenCase1img2      = TweenMax.staggerFromTo("#case-1 .block-image--lcg-2", 2, {top: "50%", left: "50%"}, {top: "60%", left: "60%", ease: Linear.easeOut}, 1);
var sceneCase1img2      = new ScrollMagic.Scene({
            triggerElement: "#trigger-case-1-img", 
            triggerHook: 0.5,
            duration: "25%"
          })
          .setTween(tweenCase1img2)
          .addTo(controller);


var tweenCase1img3      = TweenMax.staggerFromTo("#case-1 .block-image--lcg-3", 2, {top: "10%"}, {top: "-50%", ease: Linear.easeOut}, 1);
var sceneCase1img3      = new ScrollMagic.Scene({
            triggerElement: ".block-image--lcg-3-trigger", 
            triggerHook: 0.25,
            duration: "150%"
          })
          .setTween(tweenCase1img3)
          .addTo(controller);

var tweenCase2 = TweenMax.staggerFromTo("#case-2 .section__details", 2, {transform: "translateY(0vh)",opacity: "1"}, {transform: "translateY(-10vh)",opacity: "0", ease: Linear.easeOut}, 1);
var sceneCase2 = new ScrollMagic.Scene({
            triggerElement: "#trigger-case-2", 
            triggerHook: 0,
            duration: "50%"
          })
          .setTween(tweenCase2)
          .addTo(controller);


var tweenCase2img1      = TweenMax.staggerFromTo("#case-2 .block-image--flowbank-1", 2, {transform: "scale(1)"}, {transform: "scale(1.5)", ease: Linear.easeOut}, 1);
var sceneCase2img1      = new ScrollMagic.Scene({
            triggerElement: ".block-image--flowbank-1-trigger", 
            triggerHook: 0.5,
            duration: "100%"
          })
          .setTween(tweenCase2img1)
          .addTo(controller);

var tweenCase3 = TweenMax.staggerFromTo("#case-3 .section__details", 2, {transform: "translateY(0vh)",opacity: "1"}, {transform: "translateY(-10vh)",opacity: "0", ease: Linear.easeOut}, 1);
var sceneCase3 = new ScrollMagic.Scene({
            triggerElement: "#trigger-case-3", 
            triggerHook: 0,
            duration: "25%"
          })
          .setTween(tweenCase3)
          .addTo(controller);

var tweenCase4 = TweenMax.staggerFromTo("#case-4 .section__details", 2, {transform: "translateY(0vh)",opacity: "1"}, {transform: "translateY(-10vh)",opacity: "0", ease: Linear.easeOut}, 1);
var sceneCase4 = new ScrollMagic.Scene({
            triggerElement: "#trigger-case-4", 
            triggerHook: 0,
            duration: "25%"
          })
          .setTween(tweenCase4)
          .addTo(controller);

var tweenCase5 = TweenMax.staggerFromTo("#case-5 .section__details", 2, {transform: "translateY(0vh)",opacity: "1"}, {transform: "translateY(-10vh)",opacity: "0", ease: Linear.easeOut}, 1);
var sceneCase5 = new ScrollMagic.Scene({
            triggerElement: "#trigger-case-5", 
            triggerHook: 0,
            duration: "25%"
          })
          .setTween(tweenCase5)
          .addTo(controller);


var tweenCase5img3      = TweenMax.staggerFromTo("#case-5 .block-image--esr-3", 2, {top: "10%"}, {top: "-50%", ease: Linear.easeOut}, 1);
var sceneCase5img3      = new ScrollMagic.Scene({
            triggerElement: ".block-image--esr-3-trigger", 
            triggerHook: 0.25,
            duration: "150%"
          })
          .setTween(tweenCase5img3)
          .addTo(controller);

var tweenCase6 = TweenMax.staggerFromTo("#case-6 .section__details", 2, {transform: "translateY(0vh)",opacity: "1"}, {transform: "translateY(-10vh)",opacity: "0", ease: Linear.easeOut}, 1);
var sceneCase6 = new ScrollMagic.Scene({
            triggerElement: "#trigger-case-6", 
            triggerHook: 0,
            duration: "25%"
          })
          .setTween(tweenCase6)
          .addTo(controller);


var sceneFooter = new ScrollMagic.Scene({
            triggerElement: "#contact",
            triggerHook: 0.5, // show, when scrolled 10% into view
            duration: "150%" // hide 10% before exiting view (80% + 10% from bottom)
          })
          .setClassToggle("body", "dark") // add class to reveal
          .addTo(controller);





// Add smooth scrolling to all links
$("a").on('click', function(event) {

// Make sure this.hash has a value before overriding default behavior
if (this.hash !== "") {
  // Prevent default anchor click behavior
  event.preventDefault();

  // Store hash
  var hash = this.hash;

  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 1000, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
  });
} // End if
});














