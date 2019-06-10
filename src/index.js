const express = require('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 7000);

// Middlewares
app.use(express.json());

// Routes
app.use(require('./routes/doctor'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port 3000', app.get('port'));
});

