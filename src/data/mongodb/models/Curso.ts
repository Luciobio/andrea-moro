import { Schema, model } from "mongoose";

const CursoSchema = new Schema({
  titulo: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  categorias: [
    {
      type: Schema.Types.ObjectId,
      ref: "categorias",
      required: true,
    },
  ],
  imagen: {
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

export const cursoModel = model("cursos", CursoSchema);
