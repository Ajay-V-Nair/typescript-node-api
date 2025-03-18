import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
}

// ICreateUser interface for data validation during user creation
export interface ICreateUser {
    firstName: string;
    lastName: string;
    email: string;
}

const UserSchema: Schema<IUser> = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, 'Please fill a valid email address'], // Email regex validation
        },
    },
    {
        timestamps: true,  // Automatically adds createdAt and updatedAt
    }
);

const User = mongoose.model<IUser>("User", UserSchema);

export default User;