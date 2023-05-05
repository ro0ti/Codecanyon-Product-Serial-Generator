const fs = require('fs');

var prompt = require('prompt');
prompt.start();

console.clear();
main();

function main() {
    
    console.log("How many do you want to create?\n");
    prompt.get(['AMOUNT'], function(error, input) {
        if (error) { console.log(error); }
        var codes = '';
        for (var i = 0; i < Math.floor(input.AMOUNT); i++) {
            //6f6eb250-aedb-468b-a29d-8c57adc41c16
            var sect1 = sect(8);
            var sect2 = sect(4);
            var sect3 = sect(4);
            var sect4 = sect(4);
            var sect5 = sect(12);
            codes += `${sect1}-${sect2}-${sect3}-${sect4}-${sect5}\n`;
            console.log(`[Created] ${sect1}-${sect2}-${sect3}-${sect4}-${sect5}`);
        }

        fs.writeFileSync('./list.txt', `${codes}`);
        console.log('Created: ' + Math.floor(input.AMOUNT) + ' code(s) and saved.');
        main();
    });
}

function sect(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
function perc(val, val2) { return (100 * val) / val2; }