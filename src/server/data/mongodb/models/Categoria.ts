import { Schema, model } from "mongoose";

const CategoriaSchema = new Schema({
  titulo: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
    required: false,
  },
});

export const categoriaModel = model("categorias", CategoriaSchema);
