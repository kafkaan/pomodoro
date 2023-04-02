const mongoose = require("mongoose");


const scoreSchema = mongoose.Schema({
    name: { type: String, required: true },
   
    score: { type: Object, required: true },
     
    

    
},{timestamps:true,}
)

module.exports = mongoose.model("Scores",scoreSchema)