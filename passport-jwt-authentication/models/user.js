import mongoose from "mongoose"

const UsersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
    },
  hash: { type: String },
  salt: { type: String },
  admin: { type: Boolean}
});

const Users = mongoose.model('Users', UsersSchema);

export default Users;
