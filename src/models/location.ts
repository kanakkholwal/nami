import mongoose, { Document, Schema, Types } from "mongoose";


export type LocationType = {
    name:string,
    assets:{
        type:"image" | "video",
        src:string
    }[],
    description:string,
    tags:string[],
    nearest_location:string,
    location:{
        lat:number,
        long:number
    }
}
export type LocationTypeWithId = LocationType & {
    _id:string,
    creator:string,
    createdAt:string,
    updatedAt:string
}

type Location =  Document & LocationType & {
    creator:Types.ObjectId
}

const locationSchema = new Schema<Location>({
    name: {
        type: String,
        required: true
    },
    assets: {
        type: [{
            type: {
                type: String,
                enum: ["image", "video"],
                required: true
            },
            src: {
                type: String,
                required: true
            }
        }],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    nearest_location: {
        type: String,
        required: true
    },
    location: {
        lat: {
            type: Number,
            required: true
        },
        long: {
            type: Number,
            required: true
        }
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }

}, {
    timestamps: true,
}
);
const Location = mongoose.models.Location || mongoose.model<Location>('Location', locationSchema);

export default Location;
