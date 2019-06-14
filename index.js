const db=require('./db.json')
const fs =require('fs')

const aux=db.user;

for(let i=0;i<aux.length;i++)
{
  aux[i].appointment=aux[i].appointment[0]
}

fs.writeFile('newfile.json',JSON.stringify(aux),()=>null)