import generarToken from "../../helpers/generarToken.js";
import hashPassword from "../../helpers/hashPassword.js";
const usuarios = [
  {
    nombreusuario: "Admin",
    password: hashPassword("adminpw"),
    email: "admin@admin.com",
    idrol: 1,
    token: generarToken(),
  },
  {
    nombreusuario: "StandardUser",
    password: hashPassword("userpw"),
    email: "user@user.com",
    idrol: 3,
    token: generarToken(),
  },
];

export { usuarios };
