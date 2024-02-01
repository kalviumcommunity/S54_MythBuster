const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MythSchema = new Schema({
  postId: { type: Number, required: true },  
  Title: { type: String, required: true },   
  Image: String,
  UserId: {type: mongoose.Schema.Types.ObjectId,
  ref: "User"},
  Likes: Number,
  Comments: Array,
  Time: { type: Date, default: Date.now() }, 
}, { timestamps: true });

module.exports = mongoose.model("Myth", MythSchema);
