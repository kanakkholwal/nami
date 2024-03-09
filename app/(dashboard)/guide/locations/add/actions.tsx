"use server";
import { authOptions } from "app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import dbConnect from "src/lib/dbConnect";
import Location, { LocationType, LocationTypeWithId } from "src/models/location";
import { sessionType } from "src/types/session";


export async function addLocation(newLocation:LocationType) : Promise<LocationTypeWithId> {
    const session = await getServerSession(authOptions) as sessionType;
    await dbConnect();
    const location = new Location(newLocation);
    location.creator = session.user._id;
    await location.save();
    revalidatePath("/guide");
    return JSON.parse(JSON.stringify(location));
}