"use server";
import { authOptions } from "app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import dbConnect from "src/lib/dbConnect";
import { sessionType } from "src/types/session";

import Trip, { TripTypeWithId } from "src/models/trip";

export async function getTrips() : Promise<TripTypeWithId[]> {
    const session = await getServerSession(authOptions) as sessionType;
    await dbConnect();
    const trips = await Trip.find({creator:session.user._id}).sort({createdAt:-1});
    
    return JSON.parse(JSON.stringify(trips));
}