var fs = require('fs');
var TenWords = /** @class */ (function () {
    // Constructor
    function TenWords(fileName) {
        this.file = fileName;
    }
    TenWords.prototype.Count = function () {
        //Read in the file
        fs.readFile(this.file, 'utf8', function (err, data) {
            if (err)
                throw err;
            // Regular expression strips text of new lines and blanks
            var reg = /\n| /; // Strip of all new lines and blanks
            var clean = data.split(reg);
            // Count words
            var count = {};
            for (var _i = 0, clean_1 = clean; _i < clean_1.length; _i++) {
                var i = clean_1[_i];
                count[i] = (count[i] || 0) + 1;
            }
            // Sort the array after number of occurances
            var sorted = []; // Declare a new array
            for (var key in count)
                sorted.push([key, count[key]]); // Create a new array for use - sorted[word] = count;
            sorted.sort(function (a, b) { return a[1] - b[1]; }); // Sort the array based on the second element (count)
            sorted.reverse(); // Reverse the result array
            // Writes the first 10 items in the array in the console
            console.log(sorted.slice(0, 10));
        });
    };
    return TenWords;
}());
// Create TenWords instance
var fileTest = new TenWords('hitch.txt');
// Use Count method
fileTest.Count();
