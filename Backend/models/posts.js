import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MythSchema = new Schema({
  Title: { type: String, required: true },   
  Image: String,
  // UserId: {type: mongoose.Schema.Types.ObjectId,
  // ref: "User"},
  Description: {type: String},
  Likes: Number,
  Comments: Array,
  Time: { type: Date, default: Date.now() }, 
}, { timestamps: true });


const Myth = mongoose.model("Myth", MythSchema)

export default  Myth;