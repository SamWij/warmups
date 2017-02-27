console.log("decode");

var encode = ["FRZDUGV", "GLH", "PDQB", "WLPHV", "EHIRUH", "WKHLU", "GHDWKV", "WKH", "YDOLDQW", "QHYHU", "WDVWH", "RI", "GHDWK", "EXW", "RQFH"]
var alphabet= 'abcdefghijklmnopqrstuvwxyz'
var decode = [];

for (var i = 0; i < encode.length; i++) {


    for (var alphabetIndex = 0; alphabetIndex <= alphabet.length; alphabetIndex++) {
            // console.log(encode[i].charAt(alphabetIndex));

            if (encode[i].charAt(alphabetIndex) === alphabet.charAt(alphabetIndex)) {
              decode.push(alphabet.charAt(alphabetIndex+3));
            }
    }

    }
