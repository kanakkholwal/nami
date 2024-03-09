"use client";
import {
    Button
} from "@/components/ui/button";
import {
    CardContent
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

import { LocationType, LocationTypeWithId } from "src/models/location";

import toast from "react-hot-toast";

interface Props {
    addLocation: (location:LocationType) => Promise<LocationTypeWithId>
}


export default function Form({addLocation}:Props) {
    const [name, setName] = useState("");
    const [assets, setAssets] = useState<{
        type: "image" | "video",
        src: string
    }[]>([]);
    const [asset, setAsset] = useState<{
        type: "image" | "video",
        src: string
    }>({
        type: "image",
        src: ""
    })
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState<string[]>([]);
    const [nearest_location, setApproxLocation] = useState("");
    const [location, setLocation] = useState({
        lat: 0,
        long: 0
    });



    return (<>

        <CardContent className="grid gap-3">
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="location_name">
                    Location Name
                </Label>
                <Input type="text" id="location_name" placeholder="Enter a location name you want to add"
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                    value={name}
                />
            </div>
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="location_assets">
                    Location Images / Videos
                </Label>
                <div className="flex gap-2 flex-wrap">
                    <Select
                        value={asset.type}
                        onValueChange={(value:"image" | "video") => {
                            setAsset({
                                ...asset,
                                type: value
                            })
                        }}
                    >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="image">Image</SelectItem>
                            <SelectItem value="video">Video</SelectItem>
                        </SelectContent>
                    </Select>

                    <Input type="text" id="location_name" placeholder="Enter a location name you want to add"
                        onChange={(e) => {
                            setAsset({
                                ...asset,
                                src: e.target.value
                            })
                        }}
                        value={asset.src}
                    />
                    <Button
                    disabled={asset.src === ""}
                        onClick={() => {
                            if (asset.src === "") return;
                            if(assets.length > 3) return;
                            setAssets([...assets, asset])
                            setAsset({
                                type: "image",
                                src: ""
                            })
                        }}
                    >
                        Add
                    </Button>

                </div>

                <div className="flex items-stretch justify-start gap-4 w-full">
                    {assets.map((asset, index) => {
                        if (asset.type === "video") {
                            return <video key={index} src={asset.src}
                                className="w-full h-48 object-cover rounded-md basis-1 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4"
                            />
                        }
                        else if (asset.type === "image")
                            return <img key={index} src={asset.src}
                                className="w-full h-48 object-cover rounded-md basis-1 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4"
                            />
                    })}
                </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="location_description">
                    Location Description
                </Label>
                <Textarea id="location_description"
                    rows={5}
                    placeholder="Enter a location description"
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }}
                    value={description}
                />
            </div>
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="location_tags">
                    Location Tags
                </Label>
                <Input id="location_tags" type="text" placeholder="Enter a location tags"
                    onChange={(e) => {
                        setTags(e.target.value.split(","))
                    }}
                    value={tags.join(",")}
                />
            </div>
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="location_nearest_location">
                    Location Approximate Location
                </Label>
                <Input id="location_nearest_location" type="text" placeholder="Enter a location approximate location"
                    onChange={(e) => {
                        setApproxLocation(e.target.value)
                    }}
                    value={nearest_location}
                />
            </div>
            <div className="grid w-full items-center gap-1.5">
                <div className="flex justify-between items-center">

                    <Label htmlFor="location_lat">
                        Set Location Latitude
                    </Label>
                    <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {

                            navigator.geolocation.getCurrentPosition((position) => {
                                console.log(position);
                                setLocation({
                                    lat: position.coords.latitude,
                                    long: position.coords.longitude
                                });
                            });
                        }}
                    >
                        Use Current Location
                    </Button>
                </div>
                <div className="flex justify-between items-center gap-2">

                    <Input id="location_lat" type="number" placeholder="Enter a location latitude"
                        onChange={(e) => {
                            setLocation({
                                ...location,
                                lat: parseFloat(e.target.value)
                            })
                        }}
                        value={location.lat}
                    />
                    <Input id="location_long" type="number" placeholder="Enter a location longitude"

                        onChange={(e) => {
                            setLocation({
                                ...location,
                                long: parseFloat(e.target.value)
                            })
                        }}
                        value={location.long}
                    />

                </div>

            </div>
            <Button
            disabled={name === "" || assets.length === 0 || description === "" || tags.length === 0 || nearest_location === "" || location.lat === 0 || location.long === 0}
            onClick={() => {
                if(name === "" || assets.length === 0 || description === "" || tags.length === 0 || nearest_location === "" || location.lat === 0 || location.long === 0) 
                {
                toast.error("Please fill all the fields");
                return;
                }

                
                toast.promise(addLocation({
                    name,
                    assets,
                    description,
                    tags,
                    nearest_location,
                    location
                }), {
                    loading: "Adding location...",
                    success: "Location added successfully",
                    error: "Failed to add location"
                })
            
            }}>
                Save Changes
            </Button>


        </CardContent>


    </>)

}