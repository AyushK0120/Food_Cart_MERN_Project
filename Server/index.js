// const express = require('express');
// const app = express();
// const port = 5000;
// const mongoDBS = require('./db');

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });

// // Use middleware before routes
// app.use(express.json());

// // MongoDB connection
// mongoDBS()
//   .then(() => {
//     console.log('MongoDB connected');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//     process.exit(1); // Exit the process if MongoDB connection fails
//   });

// // API routes
// app.use('/api', require('./Routes/CreateUser'));
// app.use('/api', require('./Routes/DisplayData'));

// // Catch-all route for undefined routes
// app.use((req, res) => {
//   res.status(404).send('Not Found');
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoDBS = require('./db');

// Middleware for handling CORS (place it at the top)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.CORS_ORIGIN || 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Middleware to parse incoming JSON requests
app.use(express.json());

// MongoDB connection
mongoDBS()
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process if MongoDB connection fails
  });

// API routes
app.use('/api', require('./Routes/CreateUser'));
app.use('/api', require('./Routes/DisplayData'));
app.use('/api', require('./Routes/OrderData'));

// Catch-all route for undefined routes
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Global error handler for unhandled promise rejections
process.on('unhandledRejection', (error) => {
  console.error('Unhandled Promise Rejection:', error);
  process.exit(1);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
