# Node.js Data Generation and File Writing
Using Node js Stream to generate a large amount of data on demand

-The WritableStream is a fundamental concept in Node.js streams that represents a destination or a sink where data can be written or sent. It provides an abstraction for writing data to various targets, such as files, network connections, or any other writable resource.

#Description
The provided code is a Node.js script that generates a large amount of data and writes it to a JSON file using a writable stream. The goal of the script is to create a file named "bigData.json" containing one billion data entries.

To accomplish this, the code utilizes an array called `randomNames` that stores random first names and last names. It defines a function called `createData` that generates a single data entry by randomly selecting a first name and a last name from the `randomNames` array. Each data entry consists of an ID (generated using the `crypto.randomUUID()` function) and a name in the format "First Name Last Name - Index - X", where X represents the index of the data entry.

The code also includes a generator function called `generateData`, which uses a `for` loop to generate data entries one by one using the `createData` function. The generator function yields each data entry, allowing for efficient memory usage and processing of large data sets.

The main function, `createFile`, sets up a writable stream using the `createWriteStream` function from the Node.js `fs` module. It opens the JSON file by writing an opening square bracket (`[`) to indicate the start of a JSON array. Then, it iterates over the generated data entries using a `for...of` loop and writes each entry to the stream as a JSON string using `JSON.stringify`. This process is repeated for each data entry.

Once all the data entries have been written, the code writes a closing square bracket (`]`) to the stream to mark the end of the JSON array. Finally, it ends the writable stream, completing the file writing process.

The use of a writable stream allows the code to write data to the file on-demand and in chunks, reducing memory usage and improving overall efficiency. By generating the data entries in a streaming fashion and writing them to the file incrementally, the code mitigates the risk of running out of memory when dealing with such a large data set.

In summary, this code demonstrates a technique for generating and writing a massive amount of data to a JSON file using a writable stream in Node.js. It provides a scalable approach to handle large data sets efficiently and avoid memory-related issues when working with substantial amounts of data.

