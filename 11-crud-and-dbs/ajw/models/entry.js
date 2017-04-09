var mongoose = require('mongoose')

var aSchema = mongoose.Schema

var entrySchema = new aSchema({

  name: String,

  created_on: Date,

  content: String

})

var Entry = mongoose.model('Entry', entrySchema)

module.exports = Entry
