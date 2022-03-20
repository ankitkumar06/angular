const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// store config variables in dotenv
require('dotenv').config();
const cors = require('cors');

// ****** allow cross-origin requests code START ****** //
app.use(cors()); // uncomment this to enable all CORS and delete cors(corsOptions) in below code
const allowedOrigins = process.env.allowedOrigins.split(',');
 
// app.use(cors({
//     origin: function (origin, callback) {
//         // allow requests with no origin 
//         // (like mobile apps or curl requests)
//         if (!origin) return callback(null, true);
//         if (allowedOrigins.indexOf(origin) === -1) {
//             var msg = 'The CORS policy for this site does not ' + 'allow access from the specified Origin.';
//             return callback(new Error(msg), false);
//         }
//         return callback(null, true);
//     }
// }));


// app Routes
// create application/json parser
const jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })
 
// POST /login gets urlencoded bodies
app.post('/registration', jsonParser, function (req, res) {
    // if(valFunctions.checkInputDataNULL(req,res)) return false;
    // if(valFunctions.checkInputDataQuality(req,res)) return false;
    //if(valFunctions.checkJWTToken(req,res)) return false;
    //if(valFunctions.checkUserAuthRole(req,res)) return false;
   console.log(req.body);
    var dbFunctions = require('./models/connector');
    dbFunctions.createUser(req,res);
});
// app.get('/registration', jsonParser, function (req, res) {
//     //if(valFunctions.checkInputDataNULL(req,res)) return false;
//     //if(valFunctions.checkInputDataQuality(req,res)) return false;
//     //if(valFunctions.checkUserAuthRole(req,res)) return false;
//     var dbFunctions = require('./models/connector');
//     var userEmail = valFunctions.checkJWTToken(req,res);
//     if(!userEmail) return false;
//     dbFunctions.getUser(userEmail,res);
// });
// app.post('/updateregistration', jsonParser, function (req, res) {
//     if(valFunctions.checkInputDataNULL(req,res)) return false;
//     if(valFunctions.checkInputDataQuality(req,res)) return false;
//     //if(valFunctions.checkUserAuthRole(req,res)) return false;
//     var dbFunctions = require('./models/connector');
//     var userEmail = valFunctions.checkJWTToken(req,res);
//     if(!userEmail) return false;
//     dbFunctions.updateRegistration(userEmail,req,res);
// });


app.use('/a', (req, res) => res.send("Welcome GPS Mobile Tracker App User !"));
app.listen(process.env.PORT, () => console.log('Elish Enterprise Server is ready on localhost:' + process.env.PORT));