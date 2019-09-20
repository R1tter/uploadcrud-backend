const mongoose = require("mongoose");

const mongoosePaginate = require("mongoose-paginate");

const ClientSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  CPForCNPJ: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  debitTax: {
    type: Number,
    required: true
  },
  creditTax: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

ClientSchema.plugin(mongoosePaginate);

mongoose.model("Client", ClientSchema);
