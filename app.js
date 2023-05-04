
const fs = require('fs');



let data;
try {

    data = fs.readFileSync('./data/test.csv', 'utf8');
    console.log('csv letto:',data);
    const json = parseCsvToJSON(data);
    writeJsonToFile(json);

} catch (err) {
    console.error(err);
}

console.log(parseCsvToJSON(data))


function parseCsvToJSON(data) {
    // 1) data= "name,surname,yob,gender\njing,Wang,1993,female\nsimone,maccarone,2003,male\npietro,viglino,1988,male\nvalentina,cherubini,2001,female"
    console.log('1------------------------')
    console.log('csv di data:', data);
    
    // 2) trasformare la stringa in un array di righe: (.split(/\r?\n/);)
    //          righe = ["name,surname,yob,gender\n","jing,Wang,1993,female","simone,maccarone,2003,male\npietro,viglino,1988,male","valentina,cherubini,2001,female"]
    console.log('2------------------------')
    const rows = data.split(/\r?\n/);
    console.log('righe:',rows);

    // 3) separare la prima riga dalle successive:
    //          intestazione = "name,surname,yob,gender"
    //          righe = ["jing,Wang,1993,female","simone,maccarone,2003,male\npietro,viglino,1988,male","valentina,cherubini,2001,female"]
    console.log('3------------------------');
    const header = rows.shift();
    console.log('header:', header);
    // 4)trasformare intestazione in un array:
    //          intestazione = ["name,surname,yob,gender"]
    //          righe = ["jing,Wang,1993,female","simone,maccarone,2003,male\npietro,viglino,1988,male","valentina,cherubini,2001,female"]
    console.log('4------------------------');
    const headerArray = header.split(',');
    // 5) creare un array temporaneo
    console.log('5------------------------');
    const tempArray = [];
    // 6) cicliamo le righe
    console.log('6------------------------');
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
    // 7) trasformiamo la riga in un array
      const rowArray = row.split(',');
    
    // 8) creare un nuovo oggetto vuoto
    console.log('8------------------------');
    const object={};
    // 9) cliclare su intestazione e aggiungere una proprietà all' oggetto per ogni elemento di intestaione
    console.log('9------------------------');
    for (let j = 0; j < headerArray.length; j++) {

        const key = headerArray[j];
        const value = rowArray[j];
        object[key] = value;
        
        }
    }
     // 10) aggiungere l' oggetto all' array temporaneo

    // 11) fare stringify dell' array temporaneo

    // 12) ritornare la stringa con json

                

}

function writeJsonToFile(json) {

    try {
        fs.writeFileSync('./output/test.json', json);
        // file written successfully
    } catch (err) {
        console.error(err);
    }
}