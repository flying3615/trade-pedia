import { useNavigate } from 'react-router-dom'
import type { Strategy } from '../../lib/options/types'
import MiniPayoff from './MiniPayoff'

export default function StrategyCard({ s }: { s: Strategy }) {
  const navigate = useNavigate()
  // Use /options/strategies/ prefix for internal links
  const target = s.knowledgeOnly && s.linkTo ? s.linkTo : `/options/strategies/${s.id}`
  const goto = () => navigate(target)

  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/50 dark:hover:shadow-slate-900/50 cursor-pointer"
      role="button"
      tabIndex={0}
      onClick={goto}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          goto()
        }
      }}
      aria-label={`查看策略：${s.name}`}
    >
      <h3 className="mb-3 text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {s.name}
      </h3>

      {!s.knowledgeOnly && (
        <div className="mb-4 h-24 w-full overflow-hidden rounded-lg bg-slate-50 dark:bg-slate-800/50">
          <div className="h-full w-full opacity-80 transition-opacity group-hover:opacity-100">
            <MiniPayoff strategy={s} />
          </div>
        </div>
      )}

      {s.summary && (
        <p className="mb-4 line-clamp-3 text-sm text-slate-600 dark:text-slate-400 flex-grow">
          {s.summary}
        </p>
      )}

      {s.tags && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {s.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}


