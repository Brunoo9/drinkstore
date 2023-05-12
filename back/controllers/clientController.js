import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllClients = async (req, res) => {
  try {
    const clients = await prisma.cliente.findMany({
      select: {
        idcliente: true,
        nombrecliente: true,
        apellidocliente: true,
        fechanacimiento: true,
        direccion: true,
        telefono: true,
        usuario: {
          select: {
            idusuario: true,
            nombreusuario: true,
            email: true,
          },
        },
      },
    });
    res.json(clients);
  } catch (error) {
    console.log(error);
  }
};

const editClient = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
export { getAllClients };
