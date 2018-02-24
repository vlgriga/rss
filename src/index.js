// PLEASE DON'T change function name
module.exports = 
function makeExchange(currency) {
    var obj = {
        'H' : 0,
        "Q" : 0,
        "D" : 0,
        "N" : 0,
        "P" : 0
    };

    if( currency < 0) {
        return {};
    } else if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else {
        while( currency >= 50) {
            currency -= 50;
            obj["H"]++;
        }
        while( currency >= 25) {
            currency -= 25;
            obj["Q"]++;
        }
        while( currency >= 10) {
            currency -= 10;
            obj["D"]++;
        }
        while( currency >= 5) {
            currency -= 5;
            obj["N"]++;
        }
        while( currency >= 1) {
            currency -= 1;
            obj["P"]++;
        }
    }

    for (var key in obj) {
        if(obj[key] ==   0) {
            delete obj[key];
        }
    }
   
    return obj;
}

