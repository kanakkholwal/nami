
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function UserDashboard() {


    return <div>
        <h1>User Dashboard</h1>

        <p>Here is the user dashboard</p>

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
}