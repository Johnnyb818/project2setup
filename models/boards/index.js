///////////////////////////////////
// IMPORT SCHEMA AND MODEL
///////////////////////////////////
const { Schema, model } = require("mongoose");

////////////////////////////////////
// CREATE SCHEMA
////////////////////////////////////

const boardSchema = new Schema({
  username: { type: String, required: true,},
  board: { type: String, required: true },
  img: {type: String, required: true},
  details: {type: String, required: true},
  price: {type: String, required: true}
});

////////////////////////////////////
// CREATE MODEL
////////////////////////////////////
const Board = model("board", boardSchema);

////////////////////////////////////
// EXPORT MODEL
////////////////////////////////////
module.exports = Board;
