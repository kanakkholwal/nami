"use client";
import { create } from "zustand";


type State = {
    name: string
    assets: string[]
    approx_location: string,
    description: string
    tags: string[],
    location: {
        lat: number,
        long: number
    },
}

export const useFormStore = create<State>((set) => ({
    name: "",
    assets: [],
    approx_location: "",
    description: "",
    tags: [],
    location: {
        lat: 0,
        long: 0
    }
}))