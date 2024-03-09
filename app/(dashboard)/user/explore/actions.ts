"use server";
import dbConnect from "lib/dbConnect";
import Media from "src/models/media";


export async function getMedia(location:{
    lat: number,
    long: number
}) {
    await dbConnect();
    // find all media within 1km of the location
    const media = await Media
        .find({
            location: {
                $geoWithin: {
                    $centerSphere: [
                        [location.lat, location.long], 1 / 6378.1
                    ]
                }
            }
        })
        .sort({ createdAt: -1 })
        .select('media_type media_url tags title location')
        .limit(20)
        .exec();
    return JSON.parse(JSON.stringify(media));
}
