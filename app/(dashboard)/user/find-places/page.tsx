import { Suspense } from 'react';
import { findLocations } from "./actions";
import SearchBar from "./search";


export default async function FindPlaces({ searchParams }: {
    searchParams: {
        query?: string,
    }
}) {
    const locations = await findLocations(searchParams.query || "");


    return <div className="space-y-4">

        <SearchBar />

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Suspense fallback={<div>Loading...</div>}>
                {locations.map((location) => {
                    return <div key={location._id} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                        <img className="w-full h-56 object-cover object-center" src={location.assets[0].src} alt="avatar" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{location.name}</h3>
                            <p className="text-gray-500 dark:text-gray-300 line-clamp-2">{location.description}</p>
                        </div>
                    </div>
                })}
                {locations.length === 0 && <div>No places found</div>}
            </Suspense>
        </div>


    </div>
}