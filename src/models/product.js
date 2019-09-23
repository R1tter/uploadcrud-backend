const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const ProductSchema = new mongoose.Schema({
  base: {
    type: String,
    required: true
  },
  baseCredit: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model("Product", ProductSchema);
