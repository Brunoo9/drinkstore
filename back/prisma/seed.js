import { PrismaClient } from "@prisma/client";
import { productos } from "./data/productos.js";
import { roles } from "./data/roles.js";
// import { clientes } from "./data/clientes.js";
import { categorias } from "./data/categorias.js";
import { usuarios } from "./data/usuarios.js";
import { subcategorias } from "./data/subcategorias.js";

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.categoria.createMany({ data: categorias });
    await prisma.subcategoria.createMany({ data: subcategorias });
    await prisma.producto.createMany({ data: productos });
    await prisma.rol.createMany({ data: roles });
    await prisma.usuario.createMany({ data: usuarios });
    // await prisma.cliente.createMany({ data: clientes });
  } catch (error) {
    console.log(error);
  }
}

//?: tengo que seguir con lo de como voy a hacer lo de la tabla usuarios y la tabla clientes
//? opciones: hacer un endpoint para solo se registren usuarios clientes
//? tener creado ya un usuario super admin
//? y poder cambiarle el rol
//? reestablecer tambien lo de la union con usuario y orden, no cliente y orden

main();
