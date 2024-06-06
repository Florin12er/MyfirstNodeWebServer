import fs from 'fs';
import myDateTime from './Date/date.js';

const content = [
  {
    hello: "stefa",
    florin: "cool",
  },
  {
    familia: "dumm",
  },
];

fs.mkdir("directory", { recursive: true }, (err) => {
  if (err) {
    return console.error(err);
  }

  // Call myDateTime to get the current date as a string
  const dateString = myDateTime();

  fs.writeFile("directory/example.json", JSON.stringify(dateString), (err) => {
    if (err) {
      return console.error(err);
    }
    console.log("File was created with data");

    fs.open("directory/example.txt", "w+", (err, fd) => {
      if (err) {
        return console.error(err);
      }
      console.log(fd);
      console.log("File opened");

      fs.close(fd, (err) => {
        if (err) {
          console.error(err);
        }
      });
    });
  });
});

