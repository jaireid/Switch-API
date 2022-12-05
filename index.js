// RESTful APIs: https://www.youtube.com/watch?v=-MTSQjw5DrM
const express = require('express');
const app = express();
const PORT = 7000;

// Express does not parse JSON in the body by default. Middleware that tells Express to parse JSON
app.use(express.json());

// Listens to PORT 8080 and calls a callback to let us know when the API is ready
app.listen(PORT, 
           () => console.log(`Live: http://localhost:${PORT}`)
);

// Add endpoint to API (app.verb(route, handler): 

/* 
  GET Request: user is trying to get data
    1. set up server with switch endpoint for GET request
    2. When the route is requested run callback function to handle the request
*/
app.get('/switches', (request, response) => {
  /* 
    Request: incoming data 
    Responce: outgoing data/data we want to send back to client
  */
  // Sends a status and data payload to the server
  response.status(200).send({
    name: 'Milky Clears',
    rating: 'Top'
  })
});

/* 
  POST Request: user is trying to create new data
    1. set up server with switch endpoint for POST request
      a. endpoint has route params to capture dynamic values in the URL
      b. dynamic URL paramenter represents the id of switch and allows us to handle all ids
    2. When the route is requested run callback function to handle the request
*/
app.post('/switches/:id', (request, response) => {
  // Request object allows us to access information from the request message like URL parameters, headers, and body. We can use this to save a new record to the database
  const { id } = request.params;
  const { brand } = request.body;

  if(!logo) {
    response.status(418).send({ message: 'We need a brand!' });
  }

  res.send({
    switches:  `switch with ID: ${id} and Brand: ${brand}`
  });
});
