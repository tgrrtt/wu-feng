var wuFengsUrn = function(){
  var ghost = Object.create(ghostMethods);
  return ghost;
};

ghostMethods = {
  remember: function(thing) {
    // if thing exists 
    console.log("Wu-Feng remembers.");
    
    // else
    // console.log(thing + "never happened.")
  }
};
