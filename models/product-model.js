const mongoose= require("mongoose");

const productSchema = mongoose.Schema({
    image: Buffer,
    name: String,
    price: Number,
    discount: {
        Type: Number,
        default: []
    },
    bgcolor: String,
    panelcolor: String,
    textcolor: String,
});


module.exports = mongoose.model("product", productSchema);