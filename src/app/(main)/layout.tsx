import { ReactNode } from "react";
import { Header } from "../ui/components/Header";

export default function RootLayout({ children }: { children: ReactNode }) {

    return (
        <>
            <Header />
            <div className="flex min-h-[calc(100dvh-64px)] flex-col">
                <main className="flex-1">{children}</main>
            </div>
        </>
    );
}