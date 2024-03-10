"use client";

import { Button } from "@/components/ui/button";
import React from "react";



interface Props {
    getMedia: (location: {
        lat: number,
        long: number
    }) => Promise<any>;
}


export default function SearchBar({ getMedia }: Props) {
    const [loading, setLoading] = React.useState(false);
    const [location, setLocation] = React.useState({
        lat: 0,
        long: 0
    });
    const [media, setMedia] = React.useState<any[]>([]);
    React.useEffect(() => {
        if (location.lat !== 0 && location.long !== 0) {
            setLoading(true);
            getMedia(location).then((data) => {
                setMedia(data);
            }).catch((err:any) =>{
                console.log(err);

            }).finally(() => {
                setLoading(false);
            })
        }
    }, [location, getMedia]);



    return <div className="w-full flex flex-col gap-2">

        <Button 
        disabled={loading}
        className="max-w-[10rem]"
        onClick={() => {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position);
                setLocation({
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                });
            }, (error) => {
                console.log(error);
            }, {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0,
            })

        }}>
            {loading ? "Searching":"Explore Now"}
        </Button>
        <div className="flex items-center flex-wrap gap-2 w-full">
            {media.map((item, index) => {
                return <div key={index} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                    <div>{item.title}</div>
                    <img className="w-full h-56 object-cover object-center" src={item.media_url} alt={item.title} />
                    <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{item.name}</h3>
                    </div>
                </div>
            })}
        </div>
    </div>


}