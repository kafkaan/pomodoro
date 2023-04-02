const express= require("express");

const router = express.Router();

const {getContacts,createContact,getContact,deleteContact,updateContact}= require("../controllers/contactControllers");



router.route("/").get(getContacts).post(createContact);


    
 router.route("/:id").get(getContact);

 router.route("/").put(updateContact);

 router.route("/:id").delete(deleteContact);

  module.exports = router;

