import { addMedia } from "./actions";

import Form from "./form";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

export default async function UploadMedia() {




    return <>
        <Card variant="glass">
            <CardHeader>
                <CardTitle>
                    Add a locations
                </CardTitle>
                <CardDescription>
                    Add a location to the guide
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <Form addMedia={addMedia} />
            </CardContent>
        </Card>


    </>
}