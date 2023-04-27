const {saveFile} =require('./helpers/saveFile.js')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const argv = yargs(hideBin(process.argv)) 
.option('b',{
    type:'number',
    alias:'base',
    demandOption:true
})
.option('l',{
    type:'boolean',
    alias:'listar',
    default:false
})
.option('e',{
    type:'number',
    alias:'end',
    default:10
})
.check((argv, options)=>{
    if(isNaN(argv.b)){
        throw new Error('La base no es un numero')
    }
    return true
})
.argv

const {base,listar,end} = argv;
console.log(base,listar,end)


if(base){
    saveFile(base,listar,end)
    .then((nombreDelArchivo)=>console.log(nombreDelArchivo,'creado'))
    .catch(err =>console.log(err))
}else{
    console.log('you need insert a argument for exmple: (--base=5) if you want create a multiplication table')
}



