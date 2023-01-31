const { Schema, model } = require('mongoose');
// const assignmentSchema = require('./Assignment');


const userSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
      max_length: 50,
    },


  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('student', userSchema);

module.exports = User;
