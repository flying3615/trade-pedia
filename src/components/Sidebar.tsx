import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Zap, TrendingUp, CircleDollarSign, ChevronRight, ChevronDown, Newspaper, Search, X, Crosshair, Bot } from 'lucide-react';
import { clsx } from 'clsx';
import { strategies } from '../data/options/strategies';
import { ictConcepts } from '../data/ict-concepts';

// 定义导航项类型
type NavigationItem = {
    name: string;
    href?: string;
    icon?: React.ElementType;
    children?: NavigationItem[];
};

// 策略分类逻辑
function classifyByOutlook(name: string, tags?: string[]): '看多' | '看空' | '中性' {
    const text = `${name} ${(tags ?? []).join(' ')}`
    const has = (kw: string) => text.includes(kw)
    if (has('看多') || has('牛市')) return '看多'
    if (has('看空') || has('熊市')) return '看空'
    return '中性'
}

// 动态生成策略导航
const strategyGroups = strategies.reduce((acc, s) => {
    const key = classifyByOutlook(s.name, s.tags);
    if (!acc[key]) acc[key] = [];
    acc[key].push({ name: s.name, href: `/options/strategies/${s.id}` });
    return acc;
}, {} as Record<string, NavigationItem[]>);

const navigation: NavigationItem[] = [
    { name: '开仓 Checklist', href: '/checklist/trend-liquidity', icon: Crosshair },
    { name: '要闻', href: '/news', icon: Newspaper },
    { name: 'Introduction', href: '/intro', icon: Home },
    {
        name: 'Price Action',
        icon: Zap,
        children: [
            { name: '太妃决策树', href: '/decision-tree' },
        ]
    },
    {
        name: '期权交易',
        icon: CircleDollarSign,
        children: [
            { name: '新手入门', href: '/options/basics' },
            {
                name: '策略库',
                children: [
                    { name: '全部策略', href: '/options/strategies' }, // Main gallery link
                    { name: '看多策略', children: strategyGroups['看多'] },
                    { name: '看空策略', children: strategyGroups['看空'] },
                    { name: '中性策略', children: strategyGroups['中性'] },
                ]
            },
        ]
    },
    {
        name: 'ICT 交易',
        icon: TrendingUp,
        children: [
            ...ictConcepts.map(concept => ({
                name: concept.title,
                href: `/ict/${concept.id}`
            }))
        ]
    },
    {
        name: 'AI Prompts',
        icon: Bot,
        children: [
            { name: 'Coach Prompt', href: '/prompts/coach' },
            { name: 'Checklist Prompt', href: '/prompts/checklist' },
        ]
    },
    { name: 'Chart Patterns', href: '/patterns', icon: Zap },
];

function SidebarItem({ item, level = 0, forceOpen = false }: { item: NavigationItem; level?: number; forceOpen?: boolean }) {
    const location = useLocation();
    const hasChildren = item.children && item.children.length > 0;

    // Check if this item or any descendant is active
    const isCurrent = item.href ? location.pathname === item.href : false;
    const isChildActive = (items: NavigationItem[]): boolean => {
        return items.some(child =>
            (child.href === location.pathname) ||
            (child.children && isChildActive(child.children))
        );
    };

    // Auto-expand if child is active or forceOpen is true
    const [isOpen, setIsOpen] = useState(() => forceOpen || (hasChildren && isChildActive(item.children!)));

    // Toggle for parent items without href, or clickable parents
    const handleClick = (e: React.MouseEvent) => {
        if (hasChildren && !item.href) {
            e.preventDefault();
            setIsOpen(!isOpen);
        } else if (hasChildren && item.href) {
            // If it has both href and children, clicking might navigate OR toggle. 
            // Usually arrow toggles, name navigates. 
            // For simplicity here: name Navigates, we add a toggle button? 
            // Or just clicking the item toggles if it's a folder?
            // Let's assume folder-only items don't have href, or if they do, we navigate.
        }
    };

    // If item is active, or a child is active, we might want to highlight it
    const active = isCurrent || (hasChildren && isChildActive(item.children!));

    return (
        <li>
            <div
                className={clsx(
                    (isCurrent)
                        ? 'bg-gray-50 text-indigo-600 dark:bg-slate-900 dark:text-indigo-400'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-400 dark:hover:bg-slate-900 dark:hover:text-white',
                    'group flex items-center justify-between gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 cursor-pointer select-none transition-colors'
                )}
                onClick={handleClick}
            >
                {item.href ? (
                    <Link to={item.href} className="flex flex-1 items-center gap-x-3">
                        {item.icon && (
                            <item.icon className={clsx(
                                active ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400 group-hover:text-indigo-600 dark:text-gray-500 dark:group-hover:text-white',
                                'h-6 w-6 shrink-0'
                            )} />
                        )}
                        {item.name}
                    </Link>
                ) : (
                    <div className="flex flex-1 items-center gap-x-3">
                        {item.icon && (
                            <item.icon className={clsx(
                                active ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400 group-hover:text-indigo-600 dark:text-gray-500 dark:group-hover:text-white',
                                'h-6 w-6 shrink-0'
                            )} />
                        )}
                        {item.name}
                    </div>
                )}

                {hasChildren && !item.href && (
                    <span onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}>
                        {isOpen ? <ChevronDown className="h-4 w-4 opacity-50" /> : <ChevronRight className="h-4 w-4 opacity-50" />}
                    </span>
                )}
                {hasChildren && item.href && (
                    <span onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsOpen(!isOpen); }} className="p-1 hover:bg-gray-200 dark:hover:bg-slate-800 rounded">
                        {isOpen ? <ChevronDown className="h-4 w-4 opacity-50" /> : <ChevronRight className="h-4 w-4 opacity-50" />}
                    </span>
                )}
            </div>

            {hasChildren && isOpen && (
                <ul className="mt-1 space-y-1" style={{ paddingLeft: '1rem' }}>
                    {item.children!.map((child) => (
                        <SidebarItem key={child.name} item={child} level={level + 1} />
                    ))}
                </ul>
            )}
        </li>
    );
}

export function Sidebar() {
    const [searchQuery, setSearchQuery] = useState('');

    // 递归过滤导航项：保留匹配的节点及其祖先
    const filterNavigation = (items: NavigationItem[], query: string): NavigationItem[] => {
        if (!query.trim()) return items;

        const lowerQuery = query.toLowerCase();
        const result: NavigationItem[] = [];

        for (const item of items) {
            // 检查当前项是否匹配
            const nameMatches = item.name.toLowerCase().includes(lowerQuery);

            // 递归过滤子项
            const filteredChildren = item.children
                ? filterNavigation(item.children, query)
                : undefined;

            // 如果当前项匹配，或者有任何子项匹配，则保留
            const hasMatchingChildren = filteredChildren && filteredChildren.length > 0;

            if (nameMatches || hasMatchingChildren) {
                result.push({
                    ...item,
                    children: hasMatchingChildren ? filteredChildren : item.children
                });
            }
        }

        return result;
    };

    const filteredNavigation = filterNavigation(navigation, searchQuery);

    return (
        <div className="flex grow flex-col gap-y-5 border-r border-gray-200 bg-white px-6 pb-4 dark:border-gray-800 dark:bg-slate-950 h-full overflow-x-hidden">
            <div className="flex h-16 shrink-0 items-center gap-x-3">
                <img src="/favicon.png" alt="Logo" className="h-8 w-8" />
                <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Price Action Wiki
                </span>
            </div>

            {/* 搜索框 */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                    type="text"
                    placeholder="搜索导航..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-8 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                {searchQuery && (
                    <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 dark:hover:bg-slate-700 rounded"
                    >
                        <X className="h-3 w-3 text-gray-400" />
                    </button>
                )}
            </div>

            <nav className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                        <ul role="list" className="-mx-2 space-y-1">
                            {filteredNavigation.length > 0 ? (
                                filteredNavigation.map((item) => (
                                    <SidebarItem key={item.name} item={item} forceOpen={!!searchQuery} />
                                ))
                            ) : (
                                <li className="px-2 py-4 text-center text-sm text-gray-400 dark:text-gray-500">
                                    未找到匹配的导航项
                                </li>
                            )}
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
