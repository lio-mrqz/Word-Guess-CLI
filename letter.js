var prompts = require("prompts");

var letter = function() {
    var divider = "\n------------------------------------------------------------\n\n";

    this.test = function(test){
        console.log("function works");
        console.log("input test was: " + test + divider);
    };
}

var leter = new letter();

var letterGuessed = process.argv[2];

leter.test(letterGuessed)