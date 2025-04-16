const fs = require("fs")

const filePath = "./notas.json"

const crearNota = (titulo, contenido) => {
    let notas = []
    if(fs.existSync(filePath)){
        const data = fs.readFileSync(filePath, 'utf-8')
        notas = JSON.parse(data)
        console.log(data)
    }
}

const leerNota = () => {

}

const eliminarNota = (nota) => {

}