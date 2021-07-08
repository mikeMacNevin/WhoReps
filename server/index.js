// BOILER
const express = require('express')
const path = require('path');

// ROUTES
const address = require('./routes/address.js')

// APP
const app = express()

// INDEX.HTML ENTRY POINT *IN CLIENT FOLDER*
app.use(express.static(path.join(__dirname, "..", "client/build")));
app.use(express.static(path.join(__dirname, "..", "client/public")));

// USE ROUTES
app.use((req, res, next) => {
  console.log("/ dis one")
  res.sendFile(path.join(__dirname, "..", "client/build", "index.html"));
});

app.use('/address', address)

app.use('/mike', address, (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "client/build", "index.html"))
});



// A PORT FOR LISTENING
const PORT = process.env.PORT || 3003

app.listen(PORT, () => {
  console.log(`Server done be listening on port: ${PORT}`)
});

