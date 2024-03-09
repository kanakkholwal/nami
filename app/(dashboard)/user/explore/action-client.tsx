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
    const [location, setLocation] = React.useState({
        lat: 0,
        long: 0
    });
    const [media, setMedia] = React.useState<any[]>([]);
    React.useEffect(() => {
        if (location.lat !== 0 && location.long !== 0) {
            getMedia(location).then((data) => {
                setMedia(data);
            })
        }
    }, [location, getMedia]);



    return <div className="w-full flex flex-col gap-2">

        <Button 
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
            Explore Now
        </Button>
        <div className="flex flex-col gap-2">
            {media.map((item, index) => {
                return <div key={index} className="flex flex-col gap-2">
                    <div>{item.title}</div>
                    <img src={item.media_url} alt={item.title} />
                </div>
            })}
        </div>
    </div>


}