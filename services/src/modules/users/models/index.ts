import mongoose, { Schema } from 'mongoose';
import { User } from '../types';

const UserSchema = new Schema<User>({
  supabaseId: { type: String, required: true, unique: true },
  email: { type: String, unique: true },
  password: { type: String },
  verified: { type: Boolean, default: false },
  permissions: { type: [String], default: [] },
  role: { type: String, default: 'user' },
  subscriptionPlan: { type: String, default: 'free' },
  profileImg: { type: String },
  info: { type: Object, default: {} },
});

export const UserModel = mongoose.model<User>('User', UserSchema);
