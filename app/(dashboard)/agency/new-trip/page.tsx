import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

import { newTrip } from "./actions";
import Form from "./form";


export default async function GuideDashboard() {


    return (<>

        <Card variant="glass">
            <CardHeader>
                <CardTitle>
                    Add a new trip
                </CardTitle>
                <CardDescription>
                    Add a new trip to your agency
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form newTrip={newTrip}/>
            </CardContent>
        </Card>


    </>)

}