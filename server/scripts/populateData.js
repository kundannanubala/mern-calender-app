const mongoose = require('mongoose');
const DateModel = require('../models/date'); // Correct path
const TimeSlot = require('../models/timeSlot'); // Correct path

// Replace with your actual MongoDB connection URL
mongoose.connect('mongodb://0.0.0.0:27017/calendar_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function populateData() {
  try {
    // Create dates for a year starting from September 2023
    const startDate = new Date('2023-09-01');
    const endDate = new Date('2024-08-31');
    const currentDate = new Date(startDate);

    // Loop through each day
    while (currentDate <= endDate) {
      const dayOfWeek = currentDate.getDay(); // 0 (Sunday) to 6 (Saturday)

      // Only create records for weekdays (1 to 5) and skip weekends
      if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        const dateObject = currentDate; // Date object

        // Create a Date document
        const dateDocument = await DateModel.create({ date: currentDate, isBooked: false });


        // Create time slots from 9:00 AM to 5:00 PM (assuming 1-hour slots)
        for (let hour = 9; hour < 17; hour++) {
          const startTime = `${hour.toString().padStart(2, '0')}:00 `;
          const endTime = `${(hour + 1).toString().padStart(2, '0')}:00 `;

          // Create a TimeSlot document
          await TimeSlot.create({
            startTime,
            endTime,
            date: dateDocument._id,
            isBooked: false, // Default availability is false
          });
        }
      }

      currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
    }

    console.log('Data population completed.');
  } catch (error) {
    console.error('Error populating data:', error);
  } finally {
    mongoose.disconnect(); // Close the database connection when done
  }
}

populateData();
