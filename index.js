/**
 * Gets the dialogue out an ASS or SRT subtitle file. You can write the output
 * to a text file then open it in the browser so it works with Yomichan or
 * whatever.
 *
 * To add the ability to convert for a certain anime's subtitle files, write the
 * appropriate conversion function and add it to the conversionFunctions object.
 *
 * If there aren't enough command line arguments, the list of available
 * conversion functions is printed instead.
 *
 * Usage:
 *  node index.js <ANIME NAME> <SUBTITLE FILE>
 * 
 * Example:
 *  node index.js umaru '[Kamigami] Himouto! Umaru-chan - 01 [1280x720 x264 AAC Sub(Chs,Cht,Jap)](1)(1).ass'
 *
 **/


/* CONVERSION FUNCTIONS */
const conversionFunctions = {
  umaru: e => e
    .find(f => f.section === 'Events')
    .body
    .filter(g => g.key === 'Dialogue')
    .map(h => h.value.Text.replace(/{.*}/, '')),

  goblinslayer: e => e.map(f => f.text),

  nothing: e => e
}


// IMPORTS
const fs = require('fs');
const assParser = require('ass-parser');
const srtParser = require('subtitle').parse;

// read conversion function name and filename from command line
const conversion = conversionFunctions[process.argv[2]];
const filename = process.argv[3];

if (conversion && filename) {
  const file = fs.readFileSync(filename, 'utf8');
  const parser = filename.endsWith('srt') ? srtParser : assParser;

  conversion(parser(file))
    .forEach(line => console.log(line));
} else {
  // print available conversion functions if not enough command line args
  Object.keys(conversionFunctions).forEach(f => console.log(f));
}
