import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";

export default  async function GuideDashboard() {
   
    
    return <>
        <div className="bg-white/50 dark:bg-white/10 backdrop-blur-lg p-4 rounded-xl flex gap-2">

            <Button asChild>
                <Link href="/guide/locations/add">
                    Add new Trips
                </Link>
            </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5">
            <Suspense fallback={<div>Loading...</div>}>
                {/* {locations.map((location, index) => {
                    return <LocationCard key={index} location={location} />
                })} */}
            </Suspense>
        </div>


    </>
}