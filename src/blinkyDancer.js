var makeBlinkyDancer = function(top, left, timeBetweenSteps) {                                                         // child dancer that takes in the same parameters as the parent
  makeDancer.call(this, top, left, timeBetweenSteps);                                                                  // need to call the dancer superclass (parent) with all their properties passed in aka this, as well as the parameters that are passed in
};

// blinkyDancer.step = function() {
// call the old version of step at the beginning of any call to this new version of step
// oldStep();
// toggle() is a jQuery method to show/hide the <span> tag.
// See http://api.jquery.com/category/effects/ for this and
// other effects you can use on a jQuery-wrapped html tag.

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);                                       // Object.create creates a new object in the makeBlinkyDancer.prototype and linking the parent's prototypes/methods into it
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;                                              // then, in order for makeBlinkyDancer object to have it's own

makeBlinkyDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);

  this.$node.toggle();

};
