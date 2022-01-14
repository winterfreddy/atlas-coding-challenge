var fs = require('fs');

fs.readFile('w_data.dat', 'utf8', function(err, data) {
    if (err) throw err;
    data = data.split(" ").filter(String);

    let currDay = 1;
    let minimumSpread = Infinity;
    let minimumSpreadDay = 1;
    let minimumSpreadMaxTemp = 0;
    let minimumSpreadMinTemp = 0;

    for(let i = 0; i < data.length; i++) {
        if(currDay > 30) break;
        if(parseFloat(data[i]) === currDay) {
            let maximumTemp = data[i+1];
            let minimumTemp = data[i+2];

            if(parseFloat(maximumTemp) === parseInt(maximumTemp) && parseFloat(minimumTemp) === parseInt(minimumTemp)) {
                let currMinimum = parseFloat(maximumTemp) - parseFloat(minimumTemp);
                if(currMinimum < minimumSpread) {
                    minimumSpread = currMinimum;
                    minimumSpreadDay = currDay;
                    minimumSpreadMaxTemp = parseFloat(maximumTemp);
                    minimumSpreadMinTemp = parseFloat(minimumTemp);
                }
                currDay += 1;
            }
        }
    }

    console.log(`Day Number: ${minimumSpreadDay}, Smallest Temperature Spread: ${minimumSpread}`);
});