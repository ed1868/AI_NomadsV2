const mongoose = require('mongoose')

// Don't forget to set "MONGODB_URI" in ~/server/.env
const uri =
  process.env.MONGODB_URI ||
  `mongodb://localhost/please-set-process-env-mongodb-uri`


var username = 'eddie';
var password = 'alien4721';
var hosts = 'iad2-c11-2.mongo.objectrocket.com:53134,iad2-c11-1.mongo.objectrocket.com:53134,iad2-c11-0.mongo.objectrocket.com:53134';
var database = 'nomadserver';
var options = '?replicaSet=cbbff00826cb40f3b3e06038dcbb3d72';
var connectionString = 'mongodb://' + username + ':' + password + '@' + hosts + '/' + database + options;


mongoose
  .connect(connectionString, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  })
