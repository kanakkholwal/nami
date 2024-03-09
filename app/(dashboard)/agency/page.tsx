import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";
import { getTrips } from "./actions";

export default async function GuideDashboard() {

    const trips = await getTrips();


    return <>
        <div className="bg-white/50 dark:bg-white/10 backdrop-blur-lg p-4 rounded-xl flex gap-2">

            <Button asChild>
                <Link href="/agency/new-trip">
                    Add new Trip
                </Link>
            </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5">
            <Suspense fallback={<div>Loading...</div>}>
                {trips.map((trip, index) => {
                    return <div key={index} className="bg-white/50 dark:bg-white/10 backdrop-blur-lg p-4 rounded-xl">
                        <h2 className="text-xl font-bold">{trip.from} - {trip.to}</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Starting on <span className="font-semibold">{new Date(trip.startedAt).toDateString()}</span> {" "}
                            to <span className="font-semibold">{new Date(trip.endedAt).toDateString()}</span>
                            </p>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                        {trip.travellers.length} / {trip.seats} Seats are available
                        </div>
                        <div className="flex gap-2 mt-3">
                            {trip.tags.map((tag, index) => {
                                return <span key={index} className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-md text-sm uppercase">{tag}</span>
                            })}
                        </div>
                    </div>
                })}
            </Suspense>
        </div>


    </>
}