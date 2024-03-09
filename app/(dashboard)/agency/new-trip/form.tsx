"use client";
import {
    Button
} from "@/components/ui/button";
import {
    CardContent
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

import { TripType, TripTypeWithId } from "src/models/trip";

import toast from "react-hot-toast";

interface Props {
    newTrip: (trip: TripType) => Promise<TripTypeWithId>
}


export default function Form({ newTrip }: Props) {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [startedAt, setStartedAt] = useState("");
    const [endedAt, setEndedAt] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState<string[]>([]);
    const [seats, setSeats] = useState(5);








    return (<>

        <CardContent className="grid gap-3">
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="location_name">
                    Starting From
                </Label>
                <Input type="text"
                    id="from"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    placeholder="Starting From"
                />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="location_name">
                    Going To
                </Label>
                <Input type="text"
                    id="to"
                    placeholder="Going To"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="location_name">
                    Start Date
                </Label>
                <Input type="date"
                    id="startedAt"
                    value={startedAt}
                    onChange={(e) => setStartedAt(e.target.value)}
                />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="location_name">
                    End Date
                </Label>
                <Input type="date"
                    id="endedAt"
                    value={endedAt}
                    onChange={(e) => setEndedAt(e.target.value)}
                />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="location_name">
                    Description
                </Label>
                <Textarea
                    id="description"
                    placeholder="Description of the trip"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="location_name">
                    Tags
                </Label>
                <Input type="text"
                    id="tags"
                    placeholder="Tags (comma separated)"
                    value={tags.join(",")}
                    onChange={(e) => setTags(e.target.value.split(","))}
                />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="seats">
                    Seats
                </Label>
                <Input type="text"
                    id="seats"
                    placeholder="Seats"
                    value={seats.toString()}
                    onChange={(e) => setSeats(parseInt(e.target.value))}

                />
            </div>


            <Button
            disabled={from === "" || to === "" || startedAt === "" || endedAt === "" || description === "" || tags.length === 0}

                onClick={() => {
                    if (from === "" || to === "" || startedAt === "" || endedAt === "" || description === "" || tags.length === 0) {
                        toast.error("All fields are required")
                        return
                    }
                    toast.promise(newTrip({
                        from,
                        to,
                        startedAt,
                        endedAt,
                        description,
                        tags,
                        travellers: [],
                        seats
                    }), {
                        loading: "Creating Trip",
                        success: "Trip Created",
                        error: "Failed to create trip"
                    
                    })


                }}>
                Save Changes
            </Button>


        </CardContent>


    </>)

}