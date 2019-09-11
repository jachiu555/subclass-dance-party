var makeDancer = function(top, left, timeBetweenSteps) {                                        // makeDancer is a function that, when an object is created, will pass along these properties
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);

};
// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote

makeDancer.prototype.step = function() {                                                        // step method that will be delegated to the new blinky dancer object
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);                                      // setTimeout will run the step method on line 12 by binding the invocation on line 7 in the makeDancer parent class. then it will run the timeBetweenSteps time
};

makeDancer.prototype.setPosition = function(top, left) {                                        // another method that will also be delegated to any new blinky dancer object that's created
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
  //this.$node1.css(styleSettings);
};

