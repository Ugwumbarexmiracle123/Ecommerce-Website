import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userEmail:{
        type: String,
        required: [true, 'Please specify a user id']
    },
    items:{
        type: Array,
        required:[true, 'Please add items to the cart']
    }
}, { timestamps: true});

const cartModel = mongoose.model('cart', cartSchema);

export default cartModel;