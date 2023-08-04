import mongoose, { Schema, Document } from 'mongoose';

// Cart Schema
interface ICartItem extends Document {
  productID: mongoose.Types.ObjectId;
  quantity: number;
}

interface ICart extends Document {
  userId: string; // Storing only the userId instead of referencing the User model
  items: ICartItem[];
}

const cartItemSchema: Schema<ICartItem> = new Schema({
  productID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, default: 1 },
});

const cartSchema: Schema<ICart> = new Schema({
  userId: { type: String, required: true }, // Store the userId directly in the cart
  items: [cartItemSchema],
});

export const Cart = mongoose.models.Cart || mongoose.model<ICart>('Cart', c