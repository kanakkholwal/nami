"use server";
import { authOptions } from "app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import dbConnect from "src/lib/dbConnect";
import { sessionType } from "src/types/session";

import Trip, { TripType, TripTypeWithId } from "src/models/trip";

export async function newTrip(new_trip:TripType) : Promise<TripTypeWithId> {
    const session = await getServerSession(authOptions) as sessionType;
    await dbConnect();
    const trip = new Trip(new_trip);
    trip.creator = session.user._id;
    await trip.save();
    revalidatePath("/agency");
    return JSON.parse(JSON.stringify(trip));
}