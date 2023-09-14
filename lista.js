//Lista de contactos
const listaContactos = ["Adriana Villarreal", "Daniel Reyes", "Benjamin Reyes"];

//Añadir contacto

function agregarContactos(contactos) {
  listaContactos.push(contactos);
}
agregarContactos("Jackeline Barboza");
agregarContactos("Rafael Villarreal");

//Borrar contacto

function quitarContactos(removerContacto) {
  const posicion = listaContactos.indexOf(removerContacto);
  if (posicion !== -1) {
    listaContactos.splice(posicion, 1);
  }
}

quitarContactos("Benjamin Reyes");

//Imprimir Contacto

function imprimirContactos() {
  for (let i = 0; i < listaContactos.length; i++) {
    console.log(listaContactos[i]);
  }
}

imprimirContactos();
