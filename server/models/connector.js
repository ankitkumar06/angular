const pool = require('./dbconnection');
//const bcrypt = require('bcrypt');
// var password = require('password-hash-and-salt');
//const saltRounds = 10;
const jwt = require('jsonwebtoken');

var resultsNotFound = {
  "errorCode": "0",
  "errorMessage": "Operation not successful.",
  "rowCount": "0",
  "data": ""
};
var resultsFound = {
  "errorCode": "1",
  "errorMessage": "Operation successful.",
  "rowCount": "1",
  "data": ""
};

module.exports = {
  createUser: function (req, res) {
    pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected!
       
      //var timestamp = Date.now()
      var date = new Date();
      var time = JSON.stringify(date);
      var birthday = req.body.date.split("-");
      console.log(birthday);
  myFile = [{
    name: req.body.name,
  profile_img: req.body.img,
  brand_dtls :{
    brandname: req.body.brandname,
    about_me_slogan: req.body.about,
    bio: req.body.bio
  },
  email: req.body.email,
  birthday: {
    year: birthday[0],
    month: birthday[1],
    day:  birthday[2]
  },
  gender: req.body.gender,
  billtoaddress: {
    address: {
      street: req.body.street,
      postalCode: req.body.postalcode,
      city: req.body.city,
      countryCode: req.body.countrycode,
      country: req.body.country,
      text: req.body.text
    }
 
  },timestamp:time
  }]

  
  audidtl = [{
    createdby: req.body.name,
    date: time  },{
    modifiedby: req.body.name,
    datetime: time }
  ]
  var ashish = JSON.stringify(myFile);
  console.log(ashish);

  var audi = JSON.stringify(audidtl);
  console.log(audi);
       
        var sql = 'INSERT INTO hunter SET ?';
        var values = { 'name': req.body.name ,'details': ashish, 'audidtls':audi }
        // Use the connection
        connection.query(sql, values, function (error, results, fields) {
          if (error) {
            console.log(error);
            resultsNotFound["errorMessage"] = "emailID already exists.";
            return res.send(resultsNotFound);
          } else return res.send(resultsFound);

          // When done with the connection, release it.
          connection.release(); // Handle error after the release.
          if (error) throw error; // Don't use the connection here, it has been returned to the pool.
        });
       });
    
  }
}