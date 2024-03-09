
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function UserDashboard() {


    return <div className="space-y-4">
        <h1>User Dashboard</h1>

        <p>Here is the user dashboard</p>

        <div className="flex gap-2">

            <Button asChild>
                <Link href="/user/find-places">
                    Find new Places
                </Link>
            </Button>
            <Button asChild>
                <Link href="/user/find-trips">
                    Find new Trips
                </Link>
            </Button>
        </div>

    </div>
}