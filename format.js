const fs=require('fs')

let rawdata = fs.readFileSync('db.json');  
let student = JSON.parse(rawdata);  
console.log(student);  

for(let i=0;i<student.users.length;i++)
{
student.users[i].appointment.start=new Date(student.users[i].appointment.start).getTime()
student.users[i].appointment.end=new Date(student.users[i].appointment.end).getTime()

}

fs.writeFile('newFile.json',JSON.stringify(student.users),()=>null)