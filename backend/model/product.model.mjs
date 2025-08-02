import mongoose from 'mongoose'

const productSchema = mongoose.Schema(
    {
        productName: {
            type: String,
            required: true,
            trim: true
        },
        price: {
            type: Number,
            required: true,
        }
    },{
        timestamps: true
    }
)

export const Product = mongoose.model("product", productSchema)