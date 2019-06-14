const fs = require("fs");

let rawdata = fs.readFileSync("test.json");
let student = JSON.parse(rawdata);
console.log(student);

for (let i = 0; i < student.length; i++) {
  student[i].appointment[0].start = new Date(student[i].appointment[0].start).getTime();
  student[i].appointment[0].end = new Date(student[i].appointment[0].end).getTime();

  student[i].appointment = student[i].appointment[0];
}

fs.writeFile("newFile.json", JSON.stringify(student), () => null);
