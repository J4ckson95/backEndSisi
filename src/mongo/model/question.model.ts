import { Schema, Types, model } from "mongoose";
const QuestionSchema = new Schema({
  visitType: {
    type: String,
    enum: [
      "Ración industrializada",
      "Almuerzo",
      "Complemento alimentario ampm",
    ],
    required: true,
  },
  questionText: { type: String, required: true },
  questionOrder: { type: Number, required: true },
});
const Question = model("Question", QuestionSchema);
export default Question;
