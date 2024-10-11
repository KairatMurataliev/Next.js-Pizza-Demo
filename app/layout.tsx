import {Nunito} from 'next/font/google';

import './globals.css';
import {Metadata} from "next";
import {Header} from "@/components/shared/Header";

const nunito = Nunito({
    subsets: ['cyrillic'],
    variable: '--font-nunito',
    weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: 'Test App',
    description: 'This is next pizza test app'
}

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={nunito.className}>
        <main className='min-h-screen'>
            <Header/>
            {children}
        </main>
        </body>
        </html>
    );
}
