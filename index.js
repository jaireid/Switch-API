import express, { json } from 'express';

const app = express();
const PORT = 7000;

// Express does not parse JSON in the body by default
// Middleware that tells Express to parse JSON
app.use(json());

// Listens to PORT 7000 and call a callback to let us know when the API is ready
app.listen(PORT, () => console.log(`Live: http://localhost:${PORT}`));

/* 
  Request: Incoming data 
  Response: Outgoing data - data we want to send back to client

  GET Request: user is trying to get data
    1. Set up server with switch endpoint for GET request
    2. When the route is requested run callback function to handle the request
*/
app.get('/switches', (request, response) => {
  // Sends a status and data payload to the server
  response.status(200).send({
    name: 'Milky Clears',
    rating: 'Top'
  })
});

/* 
  POST Request: User is trying to create new data
    1. Set up server with switch endpoint for POST request
      a. Endpoint has route params to capture dynamic values in the URL
      b. Dynamic URL parameter represents the id of switch and allows us to handle all ids
    2. When the route is requested run callback function to handle the request
*/
app.post('/switches/:id', (request, response) => {
  // Request object allows us to access information from the request message like URL parameters, headers, and body.
  // We can use this to save a new record to the database
  const { id } = request.params;
  const { manu } = request.body;

  if(!manu) {
    response.status(404).send({ message: 'Missing Manufacturer!' });
  }

  res.send({
    switches: `switch with ID: ${id} and Manufacturer: ${manu}`
  });
});
