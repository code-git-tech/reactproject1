const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// GET all
router.get('/', async (req, res) => {
  const data = await Appointment.find();
  res.json(data);
});

// POST
router.post('/', async (req, res) => {
  const appt = new Appointment(req.body);
  await appt.save();
  res.json({ message: 'Appointment added' });
});

// PUT
router.put('/:id', async (req, res) => {
  await Appointment.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: 'Appointment updated' });
});

// DELETE
router.delete('/:id', async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.id);
  res.json({ message: 'Appointment deleted' });
});

module.exports = router;
