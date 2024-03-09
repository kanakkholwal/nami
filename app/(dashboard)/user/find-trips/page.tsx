import { Suspense } from "react";
import { findTrips } from "./actions";

import SearchBar from "./search";


export default async function FindTrips({ searchParams }: {
    searchParams: {
        from?: string,
        to?: string,
        startDate?: string,
        endDate?: string
    }
}) {

    const searchQuery = {
        from: searchParams?.from,
        to: searchParams?.to,
        startDate: searchParams?.startDate,
        endDate: searchParams?.endDate
    }

    const trips = await findTrips(searchQuery);

    return <div>

        <SearchBar />
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5">

            <Suspense fallback={<div>Loading...</div>}>
                {trips.map((trip, index) => {
                    return <div key={index} className="bg-white/50 dark:bg-white/10 backdrop-blur-lg p-4 rounded-xl">
                        <h2 className="text-xl font-bold">{trip.from} - {trip.to}</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Starting on <span className="font-semibold">{new Date(trip.startedAt).toDateString()}</span> {" "}
                            to <span className="font-semibold">{new Date(trip.endedAt).toDateString()}</span>
                        </p>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            {trip?.travellers?.length || 0} / {trip.seats} Seats are booked
                        </div>
                        <div className="flex gap-2 mt-3 flex-wrap">
                            {trip.tags.map((tag, index) => {
                                return <span key={index} className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-md text-sm uppercase">{tag}</span>
                            })}
                        </div>
                    </div>
                })}
            </Suspense>

        </div>
    </div>
}