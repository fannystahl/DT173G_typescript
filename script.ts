declare function require(name:string); // Make it possible to use require in TypeScript
var fs = require('fs');


class TenWords {
    // Variables
    file: string;

    // Constructor
    constructor(fileName:string) {
        this.file = fileName;
        }

    Count() {
        
        //Read in the file
        fs.readFile(this.file, 'utf8', function(err, data) { // Read all of the file content 
        if (err) throw err;
    
        // Regular expression strips text of new lines and blanks
        let reg:RegExp = /\n| /; // Strip of all new lines and blanks
        let clean = data.split(reg); 

        // Count words
        let count = {};
        for(let i of clean){
            count[i] = (count[i]||0) + 1;
        }

        // Sort the array after number of occurances
        var sorted = []; // Declare a new array
                        for (let key in count) sorted.push([key, count[key]]); // Create a new array for use - sorted[word] = count;
                        sorted.sort(function (a, b) { return a[1] - b[1] }); // Sort the array based on the second element (count)
                        sorted.reverse(); // Reverse the result array

        // Writes the first 10 items in the array in the console
        console.log(sorted.slice(0, 10));

        }); 
    }
}

// Create TenWords instance
let fileTest: TenWords = new TenWords('hitch.txt');
// Use Count method
fileTest.Count();
