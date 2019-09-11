var makeAwkwardDancer = function(top, left, timeBetweenSteps) {                                                         // child dancer that takes in the same parameters as the parent
  makeDancer.call(this, top, left, timeBetweenSteps);                                                                  // need to call the dancer superclass (parent) with all their properties passed in aka this, as well as the parameters that are passed in
  this.$node1 = $('<img class="awkward" src="https://s.tcdn.co/37b/cb5/37bcb50a-74ed-36aa-b08c-bd2847fea4e5/1.png"></img>');
};

// blinkyDancer.step = function() {
// call the old version of step at the beginning of any call to this new version of step
// oldStep();
// toggle() is a jQuery method to show/hide the <span> tag.
// See http://api.jquery.com/category/effects/ for this and
// other effects you can use on a jQuery-wrapped html tag.

makeAwkwardDancer.prototype = Object.create(makeDancer.prototype);                                       // Object.create creates a new object in the makeBlinkyDancer.prototype and linking the parent's prototypes/methods into it
makeAwkwardDancer.prototype.constructor = makeAwkwardDancer;                                              // then, in order for makeBlinkyDancer object to have it's own

makeAwkwardDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);

  //this.$node1.toggle();

};