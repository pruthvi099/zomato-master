import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "Users",

    },
    orderDetails: [{
        food: {
            type: mongoose.Types.ObjectId,
            ref: "Foods",
        },
        quantity: { type: Number, required: true },
        paymode: { type: String, required: true },
        status: { type: String, default: "Placed" },
        paymentDetails: {
            itemTotal: { type: String, required: true },
            promo: { type: String, required: true },
            tax: { type: String, required: true },
        },
    }],
    orderRatings: {
        type: Number,
        required: true,
    },
}, { timestamps: true, });
export const OrderModel = mongoose.model("Orders", OrderSchema);