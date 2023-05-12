import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const checkAuth = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    // verifico que venga el token

    try {
      // separo al token de la palabra bearer
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // lo de codifico con la palabra que codifique desde un principio
      req.usuario = await prisma.usuario.findUnique({
        where: {
          idusuario: decoded.id,
        },
        select: {
          idusuario: true,
          email: true,
          nombreusuario: true,
          rol: {
            select: {
              nombrerol: true,
            },
          },
        },
      });
      return next();
    } catch (error) {
      return res.status(404).json({ msg: "Hubo un error!" });
    }
  }
  if (!token) {
    const error = new Error("Token no válido");
    res.status(404).json({ msg: `${error.message}` });
  }
};

export default checkAuth;
