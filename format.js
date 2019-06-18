const fs = require("fs");

let rawdata = fs.readFileSync("db.json");
let student = JSON.parse(rawdata);

for (let i = 0; i < student.users.length; i++) {
  student.users[i].location = student.users[i].location[0];
}

fs.writeFile("newFile.json", JSON.stringify(student), () => null);
