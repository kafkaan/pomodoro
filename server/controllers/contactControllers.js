//@desciprtion get all contacts
//@route GET /api/contacts 
//@access public 

const asyncHandler = require("express-async-handler")

const Scores = require("../models/scoresModel")


const getContacts = asyncHandler(async (req, res) => {
    const scores = await Scores.find();
    res.status(200).json(scores);
    
    });



//@desicrption create contact
const createContact = asyncHandler(async (req, res) => {
    
    console.log("The request body is", req.body);
    const{name,email,phone} = req.body;
    if(!name || !email , !phone){
        res.status(400);
        throw new Error("Aldd fiels are manditory")
    }

    const scores = await Scores.create({
        name,
        email,
        phone,
    }) 
    res.status(201).json(scores)});

//@id a partir de la 

const getContact = asyncHandler(async (req, res) => {

    const contact = await Scores.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }
    res.status(200).json(contact);
    });
    


const updateContact =  asyncHandler(async (req, res) => {
        const { nametest,name, score } = req.body;
        console.log(nametest,name,score);
        if(!name || !score){
            res.status(400);
            throw new Error("Aldd fiels are manditory")
        }
        const str = `score.${name}`;
        const result = await Scores.updateOne({name:nametest},  { $set: { [`score.${name}`]: score } });
        res.status(201).json(result);
        

      });
    
        
const deleteContact =  asyncHandler(async (req, res) => {
    res.status(201).json({
     message : "delete all contacts"
    })});

module.exports = {getContacts,createContact,getContact,deleteContact,updateContact}