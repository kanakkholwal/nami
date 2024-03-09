import bcrypt from 'bcryptjs';
import mongoose, { Document, Schema } from "mongoose";
import { customAlphabet } from 'nanoid';
import validator from 'validator';

// Define a user schema
interface User extends Document {
  name: string;
  username: string;
  email: string;
  profilePicture: string;
  password: string;
  providers: string[];
  role: string;
  private: boolean;
  verificationToken: string | null;
  verified: boolean;

}


function generateRandomUsername():string {
  // Generate a random UUID
  const slug = customAlphabet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 8)()

  // Add a prefix (e.g., 'user_') to the alphanumeric username
  return `user_${slug}`;
}
const userSchema = new Schema<User>(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    username:{
        type: String,
        trim: true,
        required: true,
        unique: true,
        validate: [validator.isAlphanumeric, 'Username can only contain letters and numbers'],
        default: () => generateRandomUsername(),
        
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, 'Please enter a valid email'],
      lowercase: true,
    },
    profilePicture: {
      type: String,
      default: 'https://res.cloudinary.com/nexonauts/image/upload/v1680632194/kkupgrader/placeholder_rwezi6.png',
    },
    private: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minLength: [6, "Your password must be at least 6 characters long"],
      select: false, // Don't send back password after request
    },
    providers:{
      type: [String],
      default: [],
    },
    role: {
      type: String,
      default: 'user',
      enum: {
        values: ['user', 'admin'],
      },
    },
    verificationToken: {
      type: String,
      default: null,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },{
    timestamps: true,
  }
);


// Middleware to hash password before saving
userSchema.pre<User>('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  const saltRounds = 10;
  try {
    const hash = await bcrypt.hash(this.password, saltRounds);
    this.password = hash;
    next();
  } catch (err:any) {
    return next(err);
  }
});

userSchema.pre<User>('save', async function (next) {
  if (!this.isModified('verificationToken')) {
    return next();
  }
  if (this.isModified('email')) {
    this.verified = false;
  }
  if (this.isModified('verificationToken')) {
    if (this.verificationToken === null) {
      this.verified = true;
    }
  }
  next();
});

// Method to compare password
userSchema.methods.comparePassword = async function (password:string) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (err:any) {
    throw new Error(err);
  }
};


const User = mongoose.models.User || mongoose.model<User>('User', userSchema);

export default User;