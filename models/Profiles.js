import mongoose from 'mongoose';
const { Schema } = mongoose;

const ProfileSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  totalEarnings: { type: Number, default: 0 },
  earningsFromSupporters: { type: Number, default: 0 },
  earningsFromMembership: { type: Number, default: 0 },
  earningsFromShop: { type: Number, default: 0 },
  supportersCount: { type: Number, default: 0 }
});

export const Profile = mongoose.models.Profile || mongoose.model('Profile', ProfileSchema);