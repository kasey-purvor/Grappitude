const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const thoughtSchema = new Schema({
  thought: { type: String, required: true },
}, {
  timestamps: true,
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
