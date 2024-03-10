"use client";

import { Button } from "@/components/ui/button";
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

import { toast } from "sonner";
import { MediaType, MediaTypeWithId } from "src/models/media";


interface Props {
    addMedia: (media: MediaType) => Promise<MediaTypeWithId>
}

export default function Form({ addMedia }: Props) {

    const [media, setMedia] = useState<MediaType>({
        media_type: "image",
        media_url: "",
        title: "",
        description: "",
        tags: [],
        nearest_location: "",
        location: {
            lat: 0,
            long: 0
        }
    });




    return <>

        <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="title">
                Media title
            </Label>
            <Input type="text" id="title"
                placeholder="Enter a title for the media"
                onChange={(e) => {
                    setMedia({
                        ...media,
                        title: e.target.value
                    })
                }}
                value={media.title}

            />
        </div>

        <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="location_assets">
                Images / Videos
            </Label>
            <div className="flex gap-2 flex-wrap">
                <Select
                    value={media.media_type}
                    onValueChange={(value: "image" | "video") => {
                        setMedia({
                            ...media,
                            media_type: value
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
            </div>
            <Input type="text" id="media_url"
                placeholder="Enter an image URL or video URL"
                onChange={(e) => {
                    setMedia({
                        ...media,
                        media_url: e.target.value
                    })
                }}
                value={media.media_url}
            />
        </div>
        <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="description">
                Media description
            </Label>
            <Textarea id="description"
                rows={5}
                placeholder="Enter a description for the media"
                onChange={(e) => {
                    setMedia({
                        ...media,
                        description: e.target.value
                    })
                }}
                value={media.description}
            />

        </div>
        <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="location_tags">
                Location Tags
            </Label>
            <Input id="location_tags" type="text" placeholder="Enter a location tags"
                onChange={(e) => {
                    setMedia({
                        ...media,
                        tags: e.target.value.split(",")
                    })
                }}
                value={media.tags.join(",")}
            />
        </div>
        <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="location_nearest_location">
                Location Approximate Location
            </Label>
            <Input id="location_nearest_location" type="text" placeholder="Enter a location approximate location"
                onChange={(e) => {
                    setMedia({
                        ...media,
                        nearest_location: e.target.value
                    })
                }}
                value={media.nearest_location}
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
                            setMedia({
                                ...media,
                                location: {
                                    lat: position.coords.latitude,
                                    long: position.coords.longitude
                                }
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
                        setMedia({
                            ...media,
                            location: {
                                ...media.location,
                                lat: parseFloat(e.target.value)
                            }
                        })  
                    }}
                    value={media.location.lat}
                />
                <Input id="location_long" type="number" placeholder="Enter a location longitude"

                    onChange={(e) => {
                        setMedia({
                            ...media,
                            location: {
                                ...media.location,
                                long: parseFloat(e.target.value)
                            }
                        })
                    }}
                    value={media.location.long}
                />

            </div>

        </div>
        <Button
        disabled={media.media_url.length === 0 || media.title.length === 0 || media.description.length === 0 || media.nearest_location.length === 0 || media.location.lat === 0 || media.location.long === 0}
            onClick={() => {
                toast.promise(addMedia(media), {
                    loading: "Adding media",
                    success: "Media added",
                    error: "Failed to add media"
                });
            }}
        >
            Add Media
        </Button>
    </>
}