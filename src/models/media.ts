import mongoose, { Document, Schema, Types } from "mongoose";


export type MediaType = {

    media_type: string,
    media_url: string,
    title: string,
    description: string,
    tags: string[],
    nearest_location:string,
    location:{
        lat:number,
        long:number
    }

}
export type MediaTypeWithId = MediaType & {
    _id: string,
    creator: string,
    createdAt: string,
    updatedAt: string
}

type Media = Document & MediaType & {
    creator: Types.ObjectId
}

const mediaSchema = new Schema<Media>({
    media_type: {
        type: String,
        required: true
    },
    media_url: {
        type: String,
        required: true
    },
    title: {
        type: String,
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    timestamps: true,
}
);

mediaSchema.index({ creator: 1 });

const Media = mongoose.models.Media || mongoose.model<Media>('Media', mediaSchema);

export default Media;
