const express = require("express");
const { createNote, getNotes, updateNotes, deleteNotes, getNotesById } = require("../controller/noteController");
const router = express.Router();
const authenticate = require('../middleware/auth')


router.post("/newNote", authenticate, createNote);
router.get("/getNote", authenticate, getNotes);
router.put("/updateNote/:_id", authenticate, updateNotes);
router.delete("/deleteNote/:_id", authenticate, deleteNotes);
router.get("/getNotesById/:id", authenticate, getNotesById)

module.exports = router;