"use server";
import dbConnect from "src/lib/dbConnect";

import Trip, { TripTypeWithId } from "src/models/trip";

export async function findTrips({
    from,
    to,
    startDate,
    endDate
}: {
    from?: string,
    to?: string,
    startDate?: string,
    endDate?: string
}): Promise<TripTypeWithId[]> {
    await dbConnect();

    const trips = await Trip.find({
        from: from ? new RegExp(from, "i") : { $exists: true },
        to: to ? new RegExp(to, "i") : { $exists: true },
        startedAt: startDate ? { $gte: startDate } : { $exists: true },
        endedAt: endDate ? { $lte: endDate } : { $exists: true }
    }).lean();
    return JSON.parse(JSON.stringify(trips));


}
