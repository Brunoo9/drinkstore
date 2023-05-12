import bcrypt from "bcrypt";

const comprobarPassword = async (pwForm, pwBD) => {
  return await bcrypt.compare(pwForm, pwBD); // compara la pw que llega desde el formulario, con la que esta hasheada y guardada en la bd
  // retorna true o false
};

export default comprobarPassword;
