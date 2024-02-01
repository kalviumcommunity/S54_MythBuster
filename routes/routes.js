const mongoose = require('mongoose');


const Myth = require("../models/posts.js")

async function connectToMongoDB() {
  await mongoose.connect('mongodb://localhost:27017/Myth-Buster'); 
  console.log('Connected to MongoDB');
}

async function getMythData() {
  const myths = await Myth.find();
  return myths;
}

async function findMythById(id) {
  const myth = await Myth.findById(id);
  return myth;
}

async function addMyth(data) {
  const newMyth = new Myth(data);
  await newMyth.save();
  return newMyth;
}

async function updateMythById(id, data) {
  const updatedMyth = await Myth.findByIdAndUpdate(id, data, { new: true }); 
  return updatedMyth;
}

async function deleteMythById(id) {
  const deletedMyth = await Myth.findByIdAndDelete(id);
  return deletedMyth;
}

module.exports = {
  connectToMongoDB,
  getMythData,
  findMythById,
  addMyth,
  updateMythById,
  deleteMythById
};
