const mongoose = require("mongoose")

const GoodsSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter product name"]
        },

        quantity: {
            type: Number,
            requierd: true,
            default: 1
        },

        price: {
            type: Number,
            requierd: true,
            default: 0
        },

    
    },
    {
        timestamps: true
    }
)

const Goods = mongoose.model("Goods", GoodsSchema)
module.exports = Goods