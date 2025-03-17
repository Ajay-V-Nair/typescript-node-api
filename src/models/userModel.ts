import mongoose, {Document, Schema} from "mongoose";

export interface IUser extends Document {
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
        },
    },
    {
        timestamps: true,  // Automatically adds createdAt and updatedAt
    }
  );

  const User = mongoose.model<IUser>("User", UserSchema);

  export interface ICreateUser {
    firstName: string;
    lastName: string;
    email: string;
  }

  export default User;