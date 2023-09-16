//Lista de contactos
let listaContactos = [
  {
    id: 1,
    nombre: "Adriana",
    apellido: "Villarreal",
    telefono: "020305060",
    ubicaciones: {
      ciudad: "Venezuela",
      direccion: "Avenidad principal 395",
    },
  },

  {
    id: 2,
    nombre: "Daniel",
    apellido: "Reyes",
    telefono: "020305060",
    ubicaciones: {
      ciudad: "Venezuela",
      direccion: "Avenidad principal 390",
    },
  },

  {
    id: 3,
    nombre: "Benjamin",
    apellido: "Reyes",
    telefono: "024505060",
    ubicaciones: {
      ciudad: "Venezuela",
      direccion: "Avenidad principal 350",
    },
  },
];

//Añadir contacto

function agregarContactos(contactos) {
  listaContactos.push(contactos);
}
agregarContactos({
  id: 4,
  nombre: "Jackeline",
  apellido: "Barboza",
  telefono: "020334560",
  ubicaciones: {
    ciudad: "Venezuela",
    direccion: "Avenidad principal 342",
  },
});
agregarContactos({
  id: 5,
  nombre: "Rafael",
  apellido: "Villarreal",
  telefono: "0203343450",
  ubicaciones: {
    ciudad: "Venezuela",
    direccion: "Avenidad principal 332",
  },
});
agregarContactos({
  id: 6,
  nombre: "Jordan",
  apellido: "Villarreal",
  telefono: "05345450",
  ubicaciones: {
    ciudad: "Venezuela",
    direccion: "Avenidad principal 322",
  },
});
agregarContactos({
  id: 7,
  nombre: "jennifer",
  apellido: "Villarreal",
  telefono: "04114143450",
  ubicaciones: {
    ciudad: "Venezuela",
    direccion: "Avenidad principal 252",
  },
});

//Borrar contacto

function eliminarContacto(id) {
  let indice = -1;
  for (let i = 0; i < listaContactos.length; i++) {
    if (id === listaContactos[i].id) {
      indice = i;
      break;
    }
  }

  if (indice >= 0) {
    let contactoEliminado = listaContactos.splice(indice, 1);
    console.log(`Contacto con id ${id} eliminado`);
    console.log("Contacto eliminado...", contactoEliminado);
  } else {
    console.log("El contacto no existe...");
  }
}

//actualizar contacto

function actualizarContacto(id, nuevosDatos) {
  let indice = -1;
  for (let i = 0; i < listaContactos.length; i++) {
    if (id === listaContactos[i].id) {
      indice = i;
      break;
    }
  }

  if (indice >= 0) {
    let listaActualizada = Object.assign(listaContactos[indice], nuevosDatos);
    console.log(
      `El contacto ${listaContactos[indice].nombre} con id ${id} ha sido actualizado`
    );
    console.log("Contacto Actualizado...", listaActualizada);
  } else {
    console.log("El contacto no existe...");
  }
}

//Imprimir Contacto

function imprimirContactos() {
  console.log("lista de contactos...");
  console.log(listaContactos);
}

imprimirContactos();

eliminarContacto(1);
actualizarContacto(3, {
  ubicaciones: { ciudad: "colombia", direccion: "bogota" },
});
console.log("Lista de Contactos Actualizada!");
imprimirContactos();
