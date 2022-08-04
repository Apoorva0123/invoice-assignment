const express = require('express');
const inVoice = require('../models/invoice.model');
const router = express.Router();

router.get("", async (req, res) => {
    try {
      const invoice = await inVoice.find().lean().exec();
  
      return res.status(200).send(invoice);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  router.get("/:id", async (req, res) => {
    try {
      const invoice = await inVoice.findById(req.params.id).lean().exec();
  
      return res.status(200).send(invoice);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  router.patch("/:id", async(req, res) => {
    try{
        const iv = await inVoice.findByIdAndUpdate(req.params.id, req.body, {new:true})
        return res.status(200).send(iv)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})

router.delete("/:id", async(req, res) => {
    try{
        const iv = await inVoice.findByIdAndDelete(req.params.id)
        return res.status(200).send(iv)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})

  router.post("", async (req,res) => {
    try{
        const invoice = await inVoice.create(req.body)
        return res.status(200).send(invoice) 
         }
      catch(err){
        return res.status(500).send({ message: err.message });
      }
  })

  module.exports = router