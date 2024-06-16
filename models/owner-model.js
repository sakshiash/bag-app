const mongoose= require("mongoose");

const ownerSchema = mongoose.Schema({
    fullname : String,
    email: String, 
    password: String,
    cart: {
        type: Array,
        default: [],
    },
    isadmin: Boolean,
    orders: {
        type: Array,
        default:[]
    },
    contact: Number,
    image: String,
    gstin: String,
});

module.exports = mongoose.model("owner", ownerSchema);