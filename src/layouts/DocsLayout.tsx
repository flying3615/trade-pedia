import { useState, useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Sidebar } from '../components/Sidebar';

interface DocsLayoutProps {
    children: ReactNode;
    disableScroll?: boolean;
}

export function DocsLayout({ children, disableScroll = false }: DocsLayoutProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // 路由变化时关闭移动端菜单
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    // 防止滚动穿透
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    return (
        <div className="flex h-screen overflow-hidden bg-white dark:bg-slate-950">
            {/* Mobile top bar */}
            <div className="fixed top-0 left-0 right-0 z-40 md:hidden">
                <div className="flex items-center justify-between h-14 px-4 bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-gray-800">
                    <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                        Price Action Wiki
                    </span>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 -mr-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile sidebar overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/50 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile sidebar drawer */}
            <div
                className={`fixed inset-y-0 left-0 z-40 w-72 transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="pt-14 h-full">
                    <Sidebar />
                </div>
            </div>

            {/* Desktop sidebar */}
            <div className="hidden md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col">
                <Sidebar />
            </div>

            {/* Main content */}
            <div className="flex flex-1 flex-col md:pl-72 h-full pt-14 md:pt-0">
                <main className={`flex-1 focus:outline-none h-full ${disableScroll ? 'overflow-hidden' : 'overflow-y-auto'}`}>
                    <div className="h-full w-full">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
