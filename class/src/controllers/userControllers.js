import bcrypt from "bcrypt";
import UserSchema from "../models/userSchema.js";
import userService from "../service/userService.js"

//MONTAR O NOSSO CRUD

// listar todos os usuários da database
const getAll = async (req, res) => {

  try {
    const users = await UserSchema.find();

    if (!users) {
      res.status(500).send({
        statusCode: 500,
        message: err.message,
      });
    }

    res.status(200).send({
      statusCode: 200,
      data: {
        users,
      },
    });
  } catch (e) {
    console.error(e);
  }
};

// criar um novo usuário na database
const createUser = async (req, res) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  req.body.password = hash;
  req.body.salt = salt;

  try {
    const newUser = new UserSchema(req.body);

    const savedUser = await newUser.save();

    res.status(201).send({
      statusCode: 201,
      data: {
        savedUser,
      },
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({
      statusCode: 500,
      message: "User not saved",
    });
  }
};

// atualizar um usuário
const updateUserById = async (req, res) => {
  try {
    //findByIdAndUpdate(filtro, info a ser atualizada)
    await UserSchema.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).send({
      statusCode: 200,
      message: "User updated",
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({
      statusCode: 500,
      message: "User not updated",
    });
  }
};

// deletar um usuário
const deleteUserById = async (req, res) => {
  try {
    //findByIdAndUpdate(filtro, info a ser atualizada)
    await UserSchema.findByIdAndDelete(req.params.id);

    res.status(200).send({
      statusCode: 200,
      message: "User deleted",
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({
      statusCode: 500,
      message: "User not deleted",
    });
  }
};

const findUserById = async (req, res) => {
  try {
      const user = await UserSchema.findById(req.params.id);

    res.status(200).send({
      statusCode: 200,
      message: "User found",
      data: {
        user,
      },
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({
      statusCode: 500,
      message: "User not found",
    });
  }
};

const login = async (req, res, next) => {
  const credentials = req.body;
  try {
      const response = await userService
          .login(credentials.email, credentials.password);

      res.status(200).send(response);
  } catch (error) {
      res.status(403).send(error);
  }
}

export default {
  getAll,
  createUser,
  updateUserById,
  deleteUserById,
  findUserById,
  login,
};