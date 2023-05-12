// dependencias
import { PrismaClient } from "@prisma/client";

//funciones
import generarToken from "../helpers/generarToken.js";
import comprobarPassword from "../helpers/comprobarPassword.js";
import generarJWT from "../helpers/generarJWT.js";
import hashPassword from "../helpers/hashPassword.js";

// import { searchUserByName } from "../helpers/searchUser.js";

const prisma = new PrismaClient();

const createUser = async (req, res) => {
  const { nombreusuario, password, email } = req.body;
  const pwHash = hashPassword(password);

  const userExists = await prisma.usuario.findFirst({
    where: {
      email,
    },
  });

  if (userExists) {
    // verificamos si existe o no
    const error = new Error("Ya existe un usuario con ese email registrado");
    return res.status(400).json({ msg: `${error.message}` });
  }

  if (!pwHash)
    return res.status(500).send({ msg: "Error al encriptar la contraseña." });

  try {
    await prisma.usuario.create({
      // creamos el usuario
      data: {
        nombreusuario,
        password: pwHash,
        email,
        idrol: 3,
        token: generarToken(), // para el cambio de contraseña
      },
    });
    return res.status(200).json({ msg: "Usuario registrado correctamente" }); // enviamos como respuesta el body de la req
  } catch (error) {
    console.log(error);
  }
};

const authUser = async (req, res) => {
  // TODO: hacer para que se pueda entrar tambien con el nombre usuario
  const { email, password } = req.body;

  // hago la consulta para saber que ese usuario existe
  const user = await prisma.usuario.findFirst({
    where: {
      email,
    },
  });

  // sino existe error
  if (!user) {
    const error = new Error("El email y/o la contraseña no coincide");
    return res.status(404).json({ msg: `${error.message}` });
  }

  // si existe y esta confirmado

  // if (!user.confirm) {
  //     const error = new Error('Tu cuenta no ha sido confirmada');
  //     return res.status(404).json({msg: `${error.message}`});
  // }

  if (!(await comprobarPassword(password, user.password))) {
    const error = new Error("El email y/o la contraseña no coincide");
    return res.status(404).json({ msg: `${error.message}` });
  }

  return res.status(200).json({
    idusuario: user.idusuario,
    nombreusuario: user.nombreusuario,
    email: user.email,
    jwt: generarJWT(user.idusuario, user.nombreusuario),
  });
  //** mandamos como respuesta tambien al jwt porque lo vamos a mandar despues para consultar las rutas
  //** que necesiten ese jwt(las rutas privadas), para validar el usuario que este iniciando sesión
};

const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.usuario.findMany({
      where: {
        eliminado: false,
      },
    });
    if (!users) {
      const error = new Error("Ningun usuario encontrado");
      return res.status(404).json({ msg: `${error.message}` });
    }
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

const getAdminUsers = async (req, res) => {
  try {
    const users = await prisma.usuario.findMany({
      where: {
        OR: [
          {
            idrol: 1,
          }, // rol 1 especifica el rol Admin en la bd
          {
            idrol: 2,
          },
        ],
        eliminado: false,
      },
      select: {
        idusuario: true,
        nombreusuario: true,
        email: true,
        rol: {
          select: {
            idrol: true,
            nombrerol: true,
          },
        },
      },
    });
    if (!users) {
      const error = new Error("Ningun usuario encontrado");
      return res.status(404).json({ msg: `${error.message}` });
    }
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  const { nombreusuario, email, password, idrol } = req.body;
  const { id } = req.params;
  let pwHash;

  const user = await prisma.usuario.findUnique({
    where: {
      idusuario: Number(id),
    },
  });

  if (!user) {
    const error = new Error("El usuario no existe");
    return res.status(404).json({ msg: `${error.message}` });
  }

  try {
    if (password) {
      bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
          res.status(500).send({ msg: "Error al encriptar la contraseña." });
        }
        pwHash = hash;
        await prisma.usuario.update({
          where: {
            idusuario: Number(id),
          },
          data: {
            nombreusuario: nombreusuario || user.nombreusuario,
            password: pwHash || user.password,
            email: email || user.email,
            idrol: idrol || user.idrol,
          },
        });
      });
    } else {
      await prisma.usuario.update({
        where: {
          idusuario: Number(id),
        },
        data: {
          nombreusuario: nombreusuario || user.nombreusuario,
          email: email || user.email,
          idrol: idrol || user.idrol,
        },
      });
    }

    res.status(200).json({ msg: "Usuario editado correctamente" });
  } catch (error) {
    console.log(error);
  }
};

const userProfile = (req, res) => {
  return res.json(req.usuario);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  const user = await prisma.usuario.findUnique({
    where: { idusuario: Number(id) },
  });

  if (!user) {
    const error = new Error("El usuario no existe");
    return res.status(400).json({ msg: `${error.message}` });
  }

  try {
    const userUpdated = await prisma.usuario.update({
      where: {
        idusuario: Number(id),
      },
      data: {
        eliminado: true,
      },
    });
    if (userUpdated) {
      res
        .status(200)
        .json({ msg: `Usuario ${user.nombreusuario} eliminado correctamente` });
    } else {
      res.status(400).json({ msg: "Algo fallo al eliminar el usuario" });
    }
  } catch (error) {
    console.log(error);
  }
};

export {
  createUser,
  getAllUsers,
  getAdminUsers,
  updateUser,
  userProfile,
  authUser,
  deleteUser,
};
