interface Env {
    // 定义环境变量（如果有）
}

export const onRequest: PagesFunction<Env> = async () => {
    // Forex Factory 本周日历 JSON 数据源
    const targetUrl = 'https://nfs.faireconomy.media/ff_calendar_thisweek.json';

    try {
        const response = await fetch(targetUrl, {
            headers: {
                // 模拟浏览器 UA，防止被拦截
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        });

        if (!response.ok) {
            return new Response(`Failed to fetch: ${response.status} ${response.statusText}`, { status: response.status });
        }

        const data = await response.text();

        return new Response(data, {
            headers: {
                'Content-Type': 'application/json',
                // 设置 CDN 缓存 1 小时
                'Cache-Control': 'public, max-age=3600'
            }
        });
    } catch (error) {
        return new Response(`Error fetching data: ${error instanceof Error ? error.message : String(error)}`, { status: 500 });
    }
};
