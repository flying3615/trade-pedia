import type { ReactNode } from 'react';
import { Sidebar } from '../components/Sidebar';

interface DocsLayoutProps {
    children: ReactNode;
    disableScroll?: boolean;
}

export function DocsLayout({ children, disableScroll = false }: DocsLayoutProps) {
    return (
        <div className="flex h-screen overflow-hidden bg-white dark:bg-slate-950">
            {/* Sidebar for desktop */}
            <div className="hidden md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col">
                <Sidebar />
            </div>

            {/* Main content */}
            <div className="flex flex-1 flex-col md:pl-72 h-full">
                <main className={`flex-1 focus:outline-none h-full ${disableScroll ? 'overflow-hidden' : 'overflow-y-auto'}`}>
                    <div className="h-full w-full">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
