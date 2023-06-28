import { createWriteStream } from 'fs';

// A bi-dimensional array that stores random names and last names
const randomNames = [
  ["George", "Antonio", "Paulo", "Cristina", "Alexa", "Simão", "Geraldo", "Samuel", "Inacio", "Mohammed", "Sam", "Phineas", "Calvin", "Lee", "Khalid", "Ramos", "Gloria", "Alexo", "Maria", "Selena", "Miquelmina", "Olivia", "Gregorio"],
  ["Munhika", "Da Silva", "Raul", "Calueto", "Obamah", "Sousa", "de Palmeiras", "Smith", "Grey", "Wheesley", "Wall", "de Jesus", "Antonio", "Santiago", "Fernadez", "Pinto", "Mala", "Gregorio", "Mouse", "Campbel", "Soccer", "Ball", "Steel", "Grama", "de Gama", "Paredes", "Múcua", "Ligia", "Tree", "Gym"]
];

// A function that handles names
function createData(index) {
  const name = {
    firstName: randomNames[0][Math.floor(Math.random() * randomNames[0].length)],
    secondName: randomNames[1][Math.floor(Math.random() * randomNames[1].length)]
  };
  const data = {
    "id": crypto.randomUUID(),
    "Name": `${name.firstName} ${name.secondName} - Index - ${index}`
  };

  return data;
}

async function createFile() {
  const writeStream = createWriteStream('./data/bigData.json');
  writeStream.write("["); // Open of JSON Array in file

  let count = 0;
  for (const data of generateData()) {
    writeStream.write(JSON.stringify(data));

    // Write a newline after each data entry for better readability
    writeStream.write("\n");

    count++;

    // Write the data in chunks of 100,000 entries
    if (count % 100000 === 0) {
      await new Promise((resolve) => writeStream.write("]", resolve));
      writeStream.write("[");
    }
  }

  // Write the closing of JSON array in the file
  await new Promise((resolve) => writeStream.write("]", resolve));

  writeStream.end();
}

function* generateData() {
  for (let i = 1; i <= 1000000000; i++) {
    const data = createData(i);
    yield data;
  }
}

createFile();
