var mysql = require('mysql');
var pool  = mysql.createPool({
 
  host            : "localhost",
  user            : "root",
  password        : "",
  database        : "angular",
  connectionLimit : 10
});
pool.getConnection(function(err, connection) {
    if (err) throw err; 
    console.log("vvbbnvv vbv")// not connected!
  });

module.exports = pool;
pool.connection 
