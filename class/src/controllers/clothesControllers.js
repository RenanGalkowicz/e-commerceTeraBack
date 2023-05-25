import bcrypt from "bcrypt";
import ClothesSchema from "../models/clothesSchema.js";

const getAll = async (req, res) => {

  try {
    const clothes = await ClothesSchema.find();

    if (!Clothes) {
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

const createClothes = async (req, res) => {
  const hash = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hash;

  try {
    const newClothe = new ClothesSchema(req.body);

    const savedClothe = await newClothe.save();

    res.status(201).send({
      statusCode: 201,
      data: {
        savedClothe,
      },
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({
      statusCode: 500,
      message: "Clothe not saved",
    });
  }
};

const updateClotheById = async (req, res) => {
  try {
  
    await ClothesSchema.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).send({
      statusCode: 200,
      message: "Clothe updated",
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({
      statusCode: 500,
      message: "Clothe not updated",
    });
  }
};

const deleteClotheById = async (req, res) => {
  try {
  
    await ClothesSchema.findByIdAndDelete(req.params.id);

    res.status(200).send({
      statusCode: 200,
      message: "Clothe deleted",
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({
      statusCode: 500,
      message: "Clothe not deleted",
    });
  }
};

export default {
  getAll,
  createClothes,
  updateClotheById,
  deleteClotheById,
};