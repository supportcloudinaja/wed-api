'use strict';

const connectToDatabase = require('./db');
// const connectToDatabase = require('./db');
const User = require('./models/User');
require('dotenv').config({
  path: './variables.env'
});


module.exports.create = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      User.create(JSON.parse(event.body))
        .then(note => callback(null, {
          statusCode: 200,
          headers: {
            'Access-Control-Allow-Origin': "*"
          },
          body: JSON.stringify(note)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': "*"
          },
          body: 'Could not create the User.'
        }));
    });
};

module.exports.getOne = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      User.findById({
          _id: event.pathParameters.id
        })
        .then(note => callback(null, {
          statusCode: 200,
          headers: {
            'Access-Control-Allow-Origin': "*"
          },
          body: JSON.stringify(note)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': "*"
          },
          body: 'Could not fetch the User.'
        }));
    });
};

module.exports.getAll = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      User.find()
        .then(notes => callback(null, {
          statusCode: 200,
          headers: {
            'Access-Control-Allow-Origin': "*"
          },
          body: JSON.stringify(notes)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': "*"
          },
          body: 'Could not fetch the notes.'
        }))
    });
};

module.exports.update = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      User.findByIdAndUpdate({
          _id: event.pathParameters.id
        }, JSON.parse(event.body), {
          new: true
        })
        .then(note => callback(null, {
          statusCode: 200,
          headers: {
            'Access-Control-Allow-Origin': "*"
          },
          body: JSON.stringify(note)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': "*"
          },
          body: 'Could not fetch the notes.'
        }));
    });
};

module.exports.delete = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      User.findByIdAndRemove({
          _id: event.pathParameters.id
        })
        .then(note => callback(null, {
          statusCode: 200,
          headers: {
            'Access-Control-Allow-Origin': "*"
          },
          body: JSON.stringify({
            message: 'Removed note with id: ' + User._id,
            note: note
          })
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': "*"
          },
          body: 'Could not fetch the notes.'
        }));
    });
};