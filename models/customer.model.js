import mongoose from "mongoose";
import bcrypt from "bcrypt";

const customerSchema = new mongoose.Schema({
    name:{
        type: String,
        requiered:[true, 'Please add a name'],
    },
    address: {
        type: String,
        requiered: [true, 'Please add an address'],
    },
    phoneNumber: {
        type: String,
        required: [true, 'Please add a phone number'],
        minLength: 14,
        maxLength: 14,
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    password:{
        type: String,
        require: [true, 'Please add a password'],
        pattern:  [/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,32}$/, 'Your password must include numbers and letters']
    }
}, { timestamps: true});

customerSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, 10);

    next();
});

// defined model
const customerModel = mongoose.model('customer', customerSchema);

// export model
export default customerModel;