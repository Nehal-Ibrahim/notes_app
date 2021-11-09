// const fs=require('fs')
// fs.writeFileSync('note.txt','hello')
// console.log(fs.readFileSync('note.txt').toString())
// fs.appendFileSync('note.txt', 'content!')
// const x=require('./data')
// console.log(x)
// console.log(x.name)
// console.log(x.g)
// console.log(x.sum(3,3))


///////////////////////////////////////////////////////////////////////////




//const validator =require('validator')
//console.log(validator.isEmail('nehalibrahim026@gmail.com'))




/////////////////////////////////////////////////////////////////////
// const chalk = require('chalk');

// console.log(chalk.blue('Hello world!'));

///////////////////////////////////////////////////
// console.log(process.argv)
// const command=process.argv[2]
// console.log(command)
// if(command=='add')
// {
//     console.log('great')
// }
// else if(command=='delete'){
//     console.log('oh no')
// }
// else{
//     console.log('error')
// }



///////////////////////////////////////////////////////
// const yargs=require('yargs')
// yargs.command(
//     {
//         command:'add',
//         descripe:'add notes',
//         handler:()=>{
//             console.log('add notes')

//         }
//     }

// )
// yargs.command(
//     {
//         command:'delete',
//         descripe:'delete notes',
//         handler:()=>{
//             console.log('delete notes')

//         }
//     }

// )
// yargs.command(
//     {
//         command:'list',
//         descripe:'list notes',
//         handler:()=>{
//             console.log('list notes')

//         }
//     }

// )
// yargs.command(
//     {
//         command:'read',
//         descripe:'read notes',
//         handler:()=>{
//             console.log('read notes')

//         }
//     }

// )
// //console.log(yargs.argv)
// yargs.parse()
/////////////////////////////////////////////////////////////////
const notes =require('./notes')
 const yargs=require('yargs')
yargs.command(
    {
        command:'add',
        descripe:'add notes',
        builder:{
            title:{
                descripe:'this the title of note to be added',
                type:'string',
                demandOption:true
            },
            body:{
                descripe:'this the body of note to be added',
                type:'string',
                demandOption:true
            }
        },
        handler:( argv )=>{
            notes.addNotes(argv.title,argv.body)

        }
    }

)
yargs.command(
    {
        command:'delete',
        descripe:'delete notes',
        builder:{
            title:{
                descripe:'this the title of note to be deleted',
                type:'string',
                demandOption:true
            }},
        handler:(argv)=>{
            notes.removeNotes(argv.title)
        }
    }

)
yargs.command(
    {
        command:'list',
        descripe:'list notes',
        handler:()=>{
            notes.listNotes()

        }
    }

)
yargs.command(
    {
        command:'read',
        descripe:'read notes',
        builder:{
            title:{
                descripe:'this the title of note to be read',
                type:'string',
                demandOption:true
            }},
        handler:(argv)=>{
            notes.readNote(argv.title)

        }
    }
)
console.log(yargs.argv)
