import {findLocations} from "./actions";


export default async function FindPlaces({searchParams}:{
    searchParams: {
        query?: string,
    }
}) {
    const locations = await findLocations(searchParams.query || "");


    return <>
    
    
    </>
}