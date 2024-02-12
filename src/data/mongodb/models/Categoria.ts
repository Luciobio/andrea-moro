import { Schema, model } from "mongoose";

const CategoriaSchema = new Schema({
  titulo: {
    type: String,
    required: true,
  },
  children: {
    status: {
      type: Boolean,
      default: true,
      required: false,
    },
    type: [String],
    default: [""],
    required: false,
  },
  status: {
    type: Boolean,
    default: true,
    required: false,
  },
});

export const categoriaModel = model("categorias", CategoriaSchema);
