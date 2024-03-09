import type { Metadata } from 'next';
import { Provider, ThemeProvider } from "./client-provider";
import './global.css';

import { Plus_Jakarta_Sans } from "next/font/google";


const font = Plus_Jakarta_Sans({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin-ext', 'latin'],
    display: 'swap',
    adjustFontFallback: false,
    variable: '--plus-jakarta',
    fallback: ['system-ui', 'sans-serif']
})



export const metadata: Metadata = {
    title: 'Straw Hat Crew',
    description: 'Go on an adventure with the Straw Hat Crew!',
    authors: [{ name: 'Kanak Kholwal', url: 'https://kanakkholwal.eu.org' }],
    creator: 'Kanak Kholwal',


}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
        </head>
            <body className={font.className + " min-h-screen selection:bg-primary/10 selection:text-primary dark:bg-gray-900 antialiased"}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    themes={['light', 'dark']}
                >
                    <Provider>{children}</Provider>

                </ThemeProvider>
            </body>
        </html>
    )
}
