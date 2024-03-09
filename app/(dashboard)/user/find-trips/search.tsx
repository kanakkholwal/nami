"use client";

import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function SearchBar() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const handleSearch = useDebouncedCallback((term: string, value: string) => {
        console.log(`Searching... ${term}`);

        console.log(term);
        const params = new URLSearchParams(searchParams);


        if (term && value) {
            params.set(term, value);
        } else {
            params.delete(term);
        }
        router.push(`?${params.toString()}`);
    }, 300);

    return <div className="w-fill flex flex-col gap-2">
        <div className="text-lg font-bold">Find new Places</div>
        <div className="flex items-stretch w-full gap-1 ">
            <Input
                placeholder="Starting From"
                defaultValue={searchParams.get('from')?.toString()}
                onChange={(e) => {
                    handleSearch('from', e.target.value);
                }}
            />
            <Input
                placeholder="Going To"
                defaultValue={searchParams.get('to')?.toString()}
                onChange={(e) => {
                    handleSearch('to', e.target.value);
                }}
            />
        </div>
        <div className="flex items-stretch w-full gap-1 ">
            <Input
                placeholder="Start Date"
                type="date"
                defaultValue={searchParams.get('startDate')?.toString()}
                onChange={(e) => {
                    handleSearch('startDate', e.target.value);
                }}
            />
            <Input
                placeholder="End Date"
                type="date"
                defaultValue={searchParams.get('endDate')?.toString()}
                onChange={(e) => {
                    handleSearch('endDate', e.target.value);
                }}
            />
        </div>

    </div>


}