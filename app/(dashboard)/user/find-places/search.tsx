"use client";

import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function SearchBar() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const handleSearch = useDebouncedCallback((term: string) => {
        console.log(`Searching... ${term}`);

        console.log(term);
        const params = new URLSearchParams(searchParams);

        
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        router.push(`?${params.toString()}`);
    }, 300);

    return <>
    
    <Input placeholder="Search for places"
    
    defaultValue={searchParams.get('query')?.toString()}
    onChange={(e) => {
        handleSearch(e.target.value);
    }}
    />
    </>


}