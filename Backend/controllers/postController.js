import Myth from "../models/posts.js";

async function getMythData(req, res) {
  try {
    const myths = await Myth.find();
    res.status(200).json({ data: myths });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching myths" });
  }
}

async function findMythById(req, res) {
  try {
    const id = (req.params.id);
    const myth = await Myth.findById({_id:id});
    if (!myth) {
      res.status(404).json({ message: "Myth not found" });
    } else {
      res.status(200).json({ data: myth });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching myth" });
  }
}

async function addMyth(req, res) {
  try {
    const  data  = req.body;
    const newMyth = new Myth(data);
    await newMyth.save();
    res.status(201).json({ data: newMyth });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding myth" });
  }
}

async function updateMythById(req, res) {
  try {
    const id = (req.params.id); 
    const data  = req.body;
    const updatedMyth = await Myth.findByIdAndUpdate({_id:id}, data);
    if (!updatedMyth) {
      res.status(404).json({ message: "Myth not found" });
    } else {
      res.status(200).json({ message: "Myth updated successfully", data: updatedMyth });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating myth" });
  }
}


async function deleteMythById(req, res) {
  try {
    const id = req.params.id;
    const deletedMyth = await Myth.findByIdAndDelete({_id:id});
    if (!deletedMyth) {
      res.status(404).json({ message: "Myth not found" });
    } else {
      res.status(200).json({ data: deletedMyth });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting myth" });
  }
}

export {
  getMythData,
  findMythById,
  addMyth,
  updateMythById,
  deleteMythById,
};
