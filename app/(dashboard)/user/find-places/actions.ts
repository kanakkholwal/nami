"use server";
import dbConnect from "src/lib/dbConnect";
import Location, { LocationTypeWithId } from "src/models/location";


export async function findLocations(query:string) : Promise<LocationTypeWithId[]> {
    
    await dbConnect();
    const filterQuery = {
        $or: [
            { "name": { $regex: query, $options: "i" } },
            { "description": { $regex: query, $options: "i" } },
            {
                tags: {
                    $elemMatch: {
                        $regex: query,
                        $options: "i",
                    },
                }
            }
        ],
    } as unknown as any;
    const locations = await Location.find(filterQuery)
    .sort({
        createdAt: "desc",
    })
    .limit(69)
    .exec();

    return JSON.parse(JSON.stringify(locations));
    

}