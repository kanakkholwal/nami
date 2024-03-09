import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

import { addLocation } from "./actions";
import Form from "./form";


export default async function GuideDashboard() {


    return (<>

        <Card variant="glass">
            <CardHeader>
                <CardTitle>
                    Add a locations
                </CardTitle>
                <CardDescription>
                    Add a location to the guide
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form addLocation={addLocation}/>
            </CardContent>
        </Card>


    </>)

}