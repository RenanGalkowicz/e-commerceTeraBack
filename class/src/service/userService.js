import bcrypt from "bcrypt";
import userSchema from "../models/userSchema.js";

const login = async function (login, password) {
    const user = await userSchema.findOne({ email: login });

    if (user) {
        const checkPassword = bcrypt.hashSync(password, user.salt);
        if (checkPassword === user.password) {
            return "Entrou!";
        }
    }

    return "Usuário ou senha inválidos";
}

export default {
    login,
  };