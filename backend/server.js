const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/clinic', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
const appointmentRoutes = require('./routes/appointmentRoutes');
app.use('/api/appointments', appointmentRoutes);

// Start Server
app.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});
