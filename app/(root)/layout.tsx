import '../globals.css';
import {Metadata} from "next";
import {Header} from "@/components/shared/Header";

export const metadata: Metadata = {
    title: 'Next.js Application',
    description: 'This is next test app'
}

export default function ProductsLayout({children, modal}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode
}>) {
    return (
        <main className='min-h-screen'>
            <Header/>
            {children}
            {modal}
        </main>
    );
}
