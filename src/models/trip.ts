import mongoose, { Document, Schema, Types } from "mongoose";


export type TripType = {
    from: string,
    to: string,
    startedAt: string,
    endedAt: string,
    description: string,
    tags: string[],
    travellers:{
        name:string,
        email:string,
        phone:string,
        age:number,
        _id:string
    }[],
    seats: number
    
}
export type TripTypeWithId = TripType & {
    _id:string,
    creator:string,
    createdAt:string,
    updatedAt:string
}

type Trip =  Document & TripType & {
    creator:Types.ObjectId
}

const tripSchema = new Schema<Trip>({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    startedAt: {
        type: String,
        required: true
    },
    endedAt: {
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
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    travellers: [{
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    }],
    seats: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true,
}
);

const Trip = mongoose.models.Trip || mongoose.model<Trip>('Trip', tripSchema);

export default Trip;
