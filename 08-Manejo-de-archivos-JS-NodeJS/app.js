//console.log("おはようございます世界")
//Using 'FS' module from node.js
/*
Modify,
read,
copy,
delete,
rename.
*/
//We can use it asyncronous or syncronous
//ex. fs.rename() -> fs.renameSync()


//Importing the module fs
const { error } = require('console')
const fs = require('fs')

//Reading files 📖
//1, route, charset, function(lauched af resolve)
const archivo = fs.readFileSync('index.html', 'utf-8')
console.log('After sec. 1', archivo)

/*

//renaming files 🆕
//1. file path, 2. new name 3. catch error
fs.rename('index.html', 'main.html', error => {
    if (error) {
        throw error
    }
})
console.log('after rename')

//Append info
//1. path 2. content to append, 3. catch error
fs.appendFile('main.html', '<h1>nodeJS</h1>', (error) => {
    if(error){
        throw error
    }
    console.log('content added')
})
console.log('after append file')

//Overwrite all the content
fs.writeFile('main.html', 'Helouuu', (error) => {
    if(error){
        throw error
    }
    console.log('content DESTROYED succesfully')
})
console.log('after write file')
// Delete a file
fs.unlink('main.html', error => {
    if(error){
        throw error
    }
    console.log('Death star succesfully destrolled the document.')
})
console.log('The end')

*/