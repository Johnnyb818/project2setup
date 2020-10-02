//////////////////////////////////
// DEPENDENCIES
/////////////////////////////////
const { Router } = require("express");
const auth = require("../authmiddleware");
const Board =require("../../models/boards")

///////////////////////////////////////
// CREATE ROUTER
///////////////////////////////////////
const router = Router();

///////////////////////////////////////
// ROUTES
///////////////////////////////////////

//INDEX
router.get("/", auth, async (req, res) => {
  try{
    const boards = await Board.find({username: req.session.username});
    res.render("boards/index.jsx", {boards});
  } catch (err) {
    console.log(err);
  }
})


//NEW
router.get("/new", auth, async (req, res) => {
  try{
    res.render("boards/new.jsx")
  } 
  catch(error){
    console.log(error)
  }
})


//Create
router.post("/", auth, async (req, res) => {
  try{
    req.body.username = req.session.username
    const newBoard = await Board.create(req.body)
    res.redirect("/boards")
  } 
  catch(error){
    console.log(error)
  }
})


//Delete
router.delete("/:id", auth, async (req, res) => {
  try{
    await Board.findByIdAndDelete(req.params.id)
    res.redirect("/boards/")
  } 
  catch(error){
    console.log(error)
  }
})


//Edit 
router.get("/edit/:id", auth, async (req, res) => {
  try{
    const board = await Board.findById(req.params.id)
    res.render("boards/edit.jsx", {board})
  } 
  catch(error){
    console.log(error)
  }
})


//Update
router.put("/edit/:id", auth, async (req, res) => {
  try{
    req.body.username = req.session.username
    await Board.findByIdAndUpdate(req.params.id, req.body)
    res.redirect("/boards/")
  } 
  catch(error){
    console.log(error)
  }
})

//Show
router.get('/:id', (req, res) => {
  Board.findById(req.params.id, (error, foundBoard) => {
    res.render("boards/show.jsx", {
      board: foundBoard,
      index: req.params.id
    })
  })
})


//TEST ROUTE TO SHOW HOW AUTH MIDDLEWARE WORKS

router.get("/", auth, (req, res) => {
  res.send("if you see this you are logged in");
});

///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;
