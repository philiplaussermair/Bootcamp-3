//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: "mongodb+srv://philip:dbpassword@philipcen3031-rqtmf.mongodb.net/test?retryWrites=true&w=majority", 
  }, 
  openCage: {
    key: '1e4cbbf6419544cfb4c9d1be5306189c' 
  },
  port: 8080
};