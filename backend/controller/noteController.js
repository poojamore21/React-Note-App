const userNoteModel = require("../model/noteData");


const createNote = async (req, res) => {
    const { title} = req.body;
  
    try {
      // Check if a note with the same title already exists
      const existingNote = await userNoteModel.findOne({ title });
  
      if (existingNote) {
        res.status(400).send("Note with this title already exists");
      } else {
        let data = new userNoteModel(req.body);
        let result = await data.save();
        console.log("Note created successfully", result);
        return res.status(201).send(result);
      }
    } catch (err) {
      // Handle errors
      res.status(500).json({ message: err.message });
    }
  };


const getNotes = async (req, res) => {
    try {
      const notes = await userNoteModel.find().sort({ pinned: -1 });
      res.json(notes);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  const getNotesById = async (req, res) => {
    const { id } = req.params;
    console.log(`Fetching note with ID: ${id}`); // Log the ID
    try {
      const note = await userNoteModel.findById(id);
      if (!note) {
        console.log(`Note with ID: ${id} not found`);
        return res.status(404).send({ message: "Note not found" });
      }
      res.send({ note });
    } catch (error) {
      console.error(`Error fetching note with ID: ${id}`, error.message);
      res.status(500).send({ message: error.message });
    }
  };
  
  
  

const updateNotes = async (req, res) => {
    let data = await userNoteModel.updateOne({ _id: req.params._id }, { $set: req.body });
    res.send(data);
    console.log("Updated successfully", data);
  };

// const updateNotes = async (req, res) => {
//   try {
//     let data = await userNoteModel.updateOne({ _id: req.params.id }, { $set: req.body });
//     res.send(data);
//     console.log("Updated successfully", data);
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// };


const deleteNotes = async (req, res) => {
    let data = await userNoteModel.deleteOne({ _id: req.params._id });
    res.send(data);
    console.log('Data deleted', data);
  };
  
module.exports = {createNote, getNotes, updateNotes, deleteNotes, getNotesById}




// ********************How to add conditional debugging**************

// Conditional debugging is a technique used in software development where a breakpoint is triggered only when a specific condition is met. This allows developers to pause the execution of a program at a particular point, but only under certain circumstances, which helps in isolating specific issues without needing to pause execution on every iteration or function call.

// const userNoteModel = require("../model/noteData");

// const createNote = async (req, res) => {
//   const { title } = req.body;

//   // Conditional debugging: Check if title is "Important" before proceeding
//   if (title === "Important") {
//     console.log("Creating note with the title: Important"); // Conditional logging
//     debugger; // Execution will pause here in debug mode
//   }

//   try {
//     // Check if a note with the same title already exists
//     const existingNote = await userNoteModel.findOne({ title });

//     if (existingNote) {
//       res.status(400).send("Note with this title already exists");
//     } else {
//       let data = new userNoteModel(req.body);
//       let result = await data.save();
//       console.log("Note created successfully", result);
//       return res.status(201).send(result);
//     }
//   } catch (err) {
//     // Handle errors
//     res.status(500).json({ message: err.message });
//   }
// };

// const getNotesById = async (req, res) => {
//   const { id } = req.params;

//   // Conditional debugging: Log and pause if the note ID is "1234"
//   if (id === "1234") {
//     console.log("Fetching note with special ID: 1234");
//     debugger; // Execution will pause here in debug mode
//   }

//   try {
//     const note = await userNoteModel.findById(id);
//     if (!note) {
//       console.log(`Note with ID: ${id} not found`);
//       return res.status(404).send({ message: "Note not found" });
//     }
//     res.send({ note });
//   } catch (error) {
//     console.error(`Error fetching note with ID: ${id}`, error.message);
//     res.status(500).send({ message: error.message });
//   }
// };

// const updateNotes = async (req, res) => {
//   const { _id } = req.params;

//   // Conditional debugging: Pause if the note ID is a specific value
//   if (_id === "special-note-id") {
//     console.log("Updating special note");
//     debugger; // Execution will pause here in debug mode
//   }

//   try {
//     let data = await userNoteModel.updateOne({ _id }, { $set: req.body });
//     res.send(data);
//     console.log("Updated successfully", data);
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// };

// const deleteNotes = async (req, res) => {
//   const { _id } = req.params;

//   // Conditional debugging: Log and pause if the note ID is a special one
//   if (_id === "special-delete-id") {
//     console.log("Deleting special note with ID: special-delete-id");
//     debugger; // Execution will pause here in debug mode
//   }

//   try {
//     let data = await userNoteModel.deleteOne({ _id });
//     res.send(data);
//     console.log('Data deleted', data);
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// };

// module.exports = { createNote, getNotesById, updateNotes, deleteNotes };
