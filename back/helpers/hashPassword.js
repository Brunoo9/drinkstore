import { genSaltSync, hashSync } from "bcrypt";

const hashPassword = (pw) => {
  const saltRounds = genSaltSync(10);

  return hashSync(pw, saltRounds);
};

export default hashPassword;
