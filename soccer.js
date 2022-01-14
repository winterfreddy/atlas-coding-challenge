var fs = require('fs');

fs.readFile('soccer.dat', 'utf8', function(err, data) {
    if (err) throw err;
    data = data.split(" ").filter(String);
    data.shift();

    let teamName = "";
    let smallestDifference = Infinity;

    for(let i = 0; i < data.length; i++) {
        if(data[i].includes(".")) {
            let goalsScoredFor = data[i+6];
            let goalsScoredAgainst = data[i+8];
            let difference = Math.abs(parseInt(goalsScoredFor) - parseInt(goalsScoredAgainst));
            
            if(difference < smallestDifference) {
                smallestDifference = difference;
                teamName = data[i+1];
            }
        }
    }

    console.log(teamName);
});