
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function UserDashboard() {
    return <div>
        <h1>User Dashboard</h1>

        <p>Here is the user dashboard</p>

        <Link href="/user/settings">
            <div className="flex gap-2">
                <Button>Settings</Button>
            </div>
            </Link>
    </div>
}