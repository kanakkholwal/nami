"use server";
import { authOptions } from "app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import dbConnect from "src/lib/dbConnect";
import Location, { LocationTypeWithId } from "src/models/location";
import { sessionType } from "src/types/session";

export async function getLocations() : Promise<LocationTypeWithId[]> {
    const session = await getServerSession(authOptions) as sessionType;
    await dbConnect();
    const data = await Location.find({
        creator: session.user._id
    }).exec();
    
    return JSON.parse(JSON.stringify(data));
}

