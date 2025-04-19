const fs = require("fs");
const filePath = "notas.json";

// Función para cargar las notas desde el archivo JSON
function cargarNotas() {
  if (!fs.existsSync(filePath)) return [];

  const contenido = fs.readFileSync(filePath, "utf8");
  if (!contenido.trim()) return [];

  return JSON.parse(contenido);
}

// Función para guardar notas en el archivo JSON
function guardarNotas(notas) {
  fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
}

// Función para crear una nueva nota
function agregarNota(titulo, contenido) {
  const notas = cargarNotas();
  notas.push({ titulo, contenido });
  guardarNotas(notas);
  console.log("Nota agregada");
}

// Función para mostrar todas las notas
function listarNotas() {
  const notas = cargarNotas();
  if (notas.length === 0) {
    console.log("No hay notas");
    return;
  }

  console.log("📋 Lista de notas:");
  notas.forEach((nota, i) => {
    console.log(`\n[${i + 1}] ${nota.titulo}\n${nota.contenido}`);
  });
}

// Función para eliminar una nota por título
function eliminarNota(titulo) {
  const notas = cargarNotas();
  const notasFiltradas = notas.filter((nota) => nota.titulo !== titulo);

  if (notasFiltradas.length === notas.length) {
    console.log("No se encontró una nota con ese título.");
    return;
  }

  guardarNotas(notasFiltradas);
  console.log("Nota eliminada con éxito.");
}

agregarNota('Titulo', 'Mucha info')
listarNotas()
eliminarNota('Titulo')