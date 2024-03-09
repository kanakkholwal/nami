import { LocationTypeWithId } from "src/models/location";

export default function LocationCard({ location }: { location: LocationTypeWithId }) {


    return <div className="bg-white/50 dark:bg-white/10 backdrop-blur-lg p-4 rounded-xl flex gap-2">

        <div className=" space-y-2">
            <h1 className="text-xl font-bold">{location.name}</h1>
            <p>
            <span className="font-semibold p-2 bg-primary/10 text-primary rounded-lg my-2 text-sm">
                {location.nearest_location}
            </span>
            </p>
            <p className="text-sm font-medium line-clamp-3">{location.description}</p>

            <div className="flex gap-2">
                {location.tags.map((tag, index) => {
                    return <span key={index} className="text-xs bg-blue-500 text-white p-1 rounded-md">{tag}</span>
                })}
            </div>
        </div>
    </div>
}