
const fs=require('fs')

const addNotes=(title,body)=>{
    const notes=loadNotes()
    const duplicateTitles=notes.filter((note)=>{
        return note.title===title
    })
    console.log(duplicateTitles)
    if(duplicateTitles.length===0){

    notes.push({title:title , body:body})
   
saveNotes(notes)
console.log('saved successfully')
}
else{
    console.log('Error duplicateTitles')
}}

const loadNotes=()=>{
    try{
        const dataBuffer=fs.readFileSync('notes.json').toString()
        return JSON.parse(dataBuffer)
    }
    catch(err){
        return []
    }
}

const saveNotes=(notes)=>{
    const saveData=JSON.stringify(notes)
    fs.writeFileSync('notes.json',saveData)
}

/////////////////////////////////////////////

const removeNotes=(title)=>{
    const notes=loadNotes()
    const notesToKeep=notes.filter((note)=>{
        return note.title!==title
    })
    console.log(notesToKeep)
    saveNotes(notesToKeep)
    console.log('Removed')
}
/////////////////////////////////////////////////////

const readNote=(title)=>{
    const notes=loadNotes()
    const note=notes.find((note)=>{
        return note.title===title
    })
    if(note){
        console.log(note.body)
    }
    else{
        console.log('NotFound')
    }

}
////////////////////////////////////////////////////////
const listNotes=()=>{
    const notes=loadNotes()
    notes.forEach(note=> {
        console.log(note.title)
    });
    
}

module.exports={
    addNotes,
    removeNotes,
    readNote,
    listNotes

}