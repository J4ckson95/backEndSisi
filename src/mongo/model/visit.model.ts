import { Schema, Types, model } from "mongoose";
const VisitSchema = new Schema({
  visitType: {
    type: String,
    enum: [
      "Ración industrializada",
      "Almuerzo",
      "Complemento alimentario ampm",
    ],
    required: true,
  },
  date: { type: Date, required: true },
  municipio: { type: String, required: true },
  institucion: { type: String, required: true },
  sede: { type: String, required: true },
  inspector: { type: Types.ObjectId, ref: "User" },
  findings: [{ type: String }],
  responses: [
    {
      question: { type: Types.ObjectId, ref: "Question" },
      responseValue: { type: Number, enum: [0, 1] },
    },
  ],
});
const Visit = model("Visit", VisitSchema);
export default Visit;
