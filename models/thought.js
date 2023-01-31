const { Schema, model } = require('mongoose');

// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    thoughtName: {
      type: String,
      required: true,
    },
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const thought = model('thought', thoughtSchema);

module.exports = thought;
