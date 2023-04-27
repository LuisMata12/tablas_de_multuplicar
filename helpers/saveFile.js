const { table } = require('console');
const fs = require('fs') 

let salida ='';

const multiplicacion =async(base,listar,end)=>{
    try {
        for (let i = 1; i <= end; i++) {
            salida+=`${base} x ${i} = ${base*i}\n`;
        }
        if(listar==true){            
            console.log(`===============\nTabla del ${base}\n===============`)
            console.log(salida)
        }
        fs.writeFile(`./tablas/tabla-${base}.txt`,salida,(err)=>{
            if (err) throw err;
            // console.log('the flie has been saved!')
        })
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }

}
module.exports={
    saveFile:multiplicacion
}