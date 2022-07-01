const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
    trim: true,
  },
  email: {
    required: true,
    type: String,
    trim: true,
    validate: {
      validator: (value) => {
        const re =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return value.match(re);
      },
    },
    message: "Please enter a valid Email.",
  },
  password: {
    required: true,
    type: String,
    validate: {
      validator: (value) => {
        return value.length >= 8;
      },
    },
    message: "Password's Length should be at least 8 characters.",
  },
  address: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "user",
  },
  //Cart
});

const User = mongoose.model("User", userSchema);
module.exports = User;
